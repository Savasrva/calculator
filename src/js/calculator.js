(function(ele, utils) {
  "use strict";
  function Calculator(containerId) {
    if (!(this instanceof Calculator)) {
      throw new Error('이 객체는 new를 사용하여 생성해야 합니다.');
    }
  
    var stack = [],
      current = [],
      showExpression,
      frag;
  
    showExpression = function(element, value1, value2) {
      element.innerHTML = value1 || value2 ? value1 + utils.numberFormat(value2) : '0';
    }

    this.containerId = containerId;
    frag = document.createDocumentFragment();
    frag.appendChild(this.domFactory({
      stack: stack,
      current: current,
      elements: ele,
      utils: utils,
      showExpression: showExpression
    }));
  
    document.getElementById(containerId).appendChild(frag);
  };
  
  Calculator.prototype.domFactory = function(args) {
    var props = args.elements.element.split('.'),
      utils = args.utils,
      elementName = props[0],
      className = props[utils.arrayIndexOf(props, 'class=')],
      type = props[utils.arrayIndexOf(props, 'type=')],
      content = props[utils.arrayIndexOf(props, 'content=')],
      dom,
      items = args.elements.items,
      event = args.elements.event,
      value = args.elements.value,
      addEvent = utils.eventHandler.event,
      click = utils.eventHandler.name,
      i = 0,
      length = 0,
      self = this;
  
    dom = document.createElement(elementName);
    if (className) dom.className = className.split('=')[1];
    if (type) dom.setAttribute('type', type.split('=')[1]);
    if (content) dom.innerHTML = content.split('=')[1];
    if (className === 'class=expression') {
      args.showExpression = args.showExpression.curry(dom);
      args.showExpression();
    }
    if (event) {
      dom[addEvent](click, function() {
        console.log(event);
        self[event](args.stack, args.current, args.showExpression, value);
      });
    }
    if (items) {
      for (i = 0, length = items.length; i < length; i++) {
        args.elements = items[i]; //엘리먼트 교체
        dom.appendChild(this.domFactory(args));
      }
    }
  
    return dom;
  };
  
  Calculator.prototype.calculate = function(stack, current, showExpression, value) {
    if (stack.length < 2 && current.length > 0) { return false; }
    if (current[0] === value) {
      stack.splice(0, 0, this.result);
    }
    if (current.length > 0) {
      if (current.join('') !== '=') { stack.push(current.join('')); }
      current.length = 0;
    }
    if (isNaN(stack[stack.length-1].replace(',', ''))) { stack.pop(); }
    current.push(value);
    this.result = utils.limitDecimalPoint(this.postfixCalculate(this.infixToPostfix(stack)));

    showExpression('', this.result);
    while (stack.length > 2) {
      stack.shift();
    }
  };
  
  Calculator.prototype.addOperator = function(stack, current, showExpression, value) {
    var sLastIndex = stack.length - 1;
    if (current.length === 0) { return false; }
    if (typeof stack[sLastIndex] === 'number' && current.length === 0) {
      stack[sLastIndex] = value;
    }
    if (utils.arrayIndexOf(current, '=') > -1) {
      stack.length = 0;
      current.length = 0;
      stack.push(this.result);
      stack.push(value);
    }
    if (current.join('')) {
      stack.push(utils.numberFormat(current.join('')));
      stack.push(value);
      current.length = 0;
    }
    showExpression(stack.join(''), current.join(''));
  };
  
  Calculator.prototype.addOperand = function(stack, current, showExpression, value) {
    var cur = current.join('');
    if (current.length === 0 && value === '0' && stack.length === 0
      || current.length === 1 && current[0] === '0' && value === '0') {
      return false;
    }
    if (utils.isLimit(cur) || utils.isLimitDecimalPointLength(cur)) { return false; }
    if (utils.arrayIndexOf(current, '.') > -1 && value === '.') { return false; }
    if (current.length === 1 && current[0] === '0' && value !== '.') { current.shift(); }
    if (current.length === 0 && value === '.') { current.push('0'); }
    if (current[0] === '=') {
      stack.length = 0;
      current.length = 0;
    }

    current.push(value);
    showExpression(stack.join(''), current.join(''));
  };
  
  Calculator.prototype.clearExpression = function(stack, current, showExpression) {
    stack.length = 0;
    current.length = 0;
    showExpression(stack.join(''), current.join(''));
  };

  Calculator.prototype.infixToPostfix = function(expression) {
    var resultStack = [],
      operatorStack = [],
      operator = {
        '+' : 1,
        '-' : 1,
        '*' : 2,
        '/' : 2
      },
      order = 0,
      flag = false;
    
    for (var i = 0, length = expression.length; i < length; i++) {
      order = operator[expression[i]];
      if (order) {
        for (var k = 0, oLength = operatorStack.length; k < oLength; k++) {
          if (order <= operator[operatorStack[k]]) {
            flag = true;
          }
        }
  
        if (flag) {
          resultStack.push(operatorStack.pop());
          operatorStack.push(expression[i]);
          flag = false;
        } else {
          operatorStack.push(expression[i].replace(',', ''));
        }
      } else {
        resultStack.push(expression[i].replace(',', ''));
      }
    }
  
    operatorStack.reverse();
    return resultStack.concat(operatorStack);
  };
  
  Calculator.prototype.postfixCalculate = function(postfixExpression) {
    var calculator = {
      '+': function(y, x) { // pop을 사용하면 마지막부터 나오기 때문에 인자를 반대로 받는다
        return x + y;
      },
      '-': function(y, x) {
        return x - y;
      },
      '*': function(y, x) {
        return x * y;
      },
      '/': function(y, x) {
        return x / y;
      }
    },
    resultStack = [],
    i = 0,
    length = 0;
    
    for (i = 0, length = postfixExpression.length; i < length; i++) {
      if (calculator[postfixExpression[i]]) {
        resultStack.push(calculator[postfixExpression[i]](+resultStack.pop(), +resultStack.pop()));
      } else {
        resultStack.push(postfixExpression[i]);
      }
    }
    
    return resultStack[0];
  };

  Calculator.prototype.minimizeToggle = function() {
    var container = document.getElementById(this.containerId),
      className = '';
    className = container.className;
    if (className.indexOf('minimized') > -1) {
      container.className = className.replace('minimized', '');
    } else {
      container.className = className + ' minimized';
    }
  };
  
  new Calculator('app');
  
}(domElements, utils));