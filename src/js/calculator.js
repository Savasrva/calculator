function Calculator(containerId, domElements, utils) {
  "use strict";
  if (!(this instanceof Calculator)) {
    throw new Error('이 객체는 new를 사용하여 생성해야 합니다.');
  }

  var stack = [],
    current = ['0'],
    utils = utils,
    domElements = domElements,
    showExpression,
    frag;

  showExpression = function(element, value) {
    element.innerHTML = value;
  }

  frag = document.createDocumentFragment();
  frag.appendChild(this.domFactory({
    stack: stack,
    current: current,
    elements: domElements,
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
    children = args.elements.children,
    event = args.elements.event,
    value = args.elements.value,
    addEvent = utils.eventHandler.event,
    click = utils.eventHandler.name,
    i = 0,
    length = 0
    self = this;

  dom = document.createElement(elementName);
  if (className) dom.className = className.split('=')[1];
  if (type) dom.setAttribute('type', type.split('=')[1]);
  if (content) dom.innerHTML = content.split('=')[1];
  if (className === 'class=expression') {
    args.showExpression = args.showExpression.curry(dom);
    args.showExpression(args.current.join(''));
  }
  if (event) {
    dom[addEvent](click, function() {
      self[event](args.stack, args.current, args.showExpression, value);
    });
  }
  if (children) {
    for (i = 0, length = children.length; i < length; i++) {
      args.elements = children[i]; //엘리먼트 교체
      dom.appendChild(this.domFactory(args));
    }
  }

  return dom;
};

Calculator.prototype.calculate = function(stack, current, showExpression, value) {
  // showExpression(this.postfixCalculate(this.infixToPostfix(stack)));
  // while(stack.length > 2) {
  //   stack.shift();
  // }
  // current = [value];
  console.log(stack);
  console.log(current);
  console.log(showExpression(current.join('')));
};

Calculator.prototype.addOperator = function(stack, current, showExpression, value) {
  console.log(stack);
  console.log(value);
  console.log(showExpression);
};

Calculator.prototype.addOperand = function(stack, current, showExpression, value) {
  if (current.length === 1 && current[0] === '0' && value === '0') return; 
  current.push(value);
  showExpression(current.join(''));
};

Calculator.prototype.clearExpression = function(stack, current, showExpression) {
  while(stack.length > 0) stack.pop();
  while(current.length > 0) current.pop()
  current.push('0');
  showExpression(current.join(''));
};

Calculator.prototype.close = function() {

};

Calculator.prototype.infixToPostfix = function (expression) {
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
        operatorStack.push(expression[i]);
      }
    } else {
      resultStack.push(expression[i]);
    }
  }

  operatorStack.reverse();
  return resultStack.concat(operatorStack);
};

Calculator.prototype.postfixCalculate = function (postfixExpression) {
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
  resultStack = []
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

new Calculator('app', domElements, utils);