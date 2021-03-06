if (!Function.prototype.curry) {
  Function.prototype.curry = function() {
    var args = [].slice.apply(arguments);
    var self = this;
    return function() {
      return self.apply(null, args.concat([].slice.apply(arguments)));
    };
  };
}
var domElements = domElements || {
  element: 'div.class=wrapper',
  items: [
    {
      element: 'div.class=application-wrapper',
      items: [
        {
          element: 'div.class=application-content',
          items: [
            {
              element: 'div.class=calculator-app',
              items: [
                {
                  element: 'div.class=calculator',
                  items: [
                    {
                      element: 'h1.class=calculator-title.content=계산기',
                    },
                    {
                      element: 'div.class=result-window',
                      items: [
                        {
                          element: 'p.class=expression',
                        }
                      ]
                    },
                    {
                      element: 'ul.class=calculator-btn-list',
                      items: [
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=C',
                              event: 'clearExpression'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=&divide;',
                              event: 'addOperator',
                              value: '/'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=&times;',
                              event: 'addOperator',
                              value: '*'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=-',
                              event: 'addOperator',
                              value: '-'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=7',
                              event: 'addOperand',
                              value: '7'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=8',
                              event: 'addOperand',
                              value: '8'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=9',
                              event: 'addOperand',
                              value: '9'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=+',
                              event: 'addOperator',
                              value: '+'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=4',
                              event: 'addOperand',
                              value: '4'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=5',
                              event: 'addOperand',
                              value: '5'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=6',
                              event: 'addOperand',
                              value: '6'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=&#46',
                              event: 'addOperand',
                              value: '.'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=0',
                              event: 'addOperand',
                              value: '0'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=1',
                              event: 'addOperand',
                              value: '1'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=2',
                              event: 'addOperand',
                              value: '2'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=3',
                              event: 'addOperand',
                              value: '3'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item col-max',
                          items: [
                            {
                              element: 'button.class=btn.type=button.content=&#61;',
                              event: 'calculate',
                              value: '='
                            }
                          ]
                        },
                      ]
                    },
                    {
                      element: 'div.class=calculator-controller',
                      items: [
                        {
                          element: 'button.class=window-control close.type=button',
                          items: [
                            {
                              element: 'span.class=blind.content=close'
                            }
                          ]
                        },
                        {
                          element: 'button.class=window-control minimize.type=button',
                          event: 'minimizeToggle',
                          items: [
                            {
                              element: 'span.class=blind.content=minimize'
                            }
                          ]
                        },
                        {
                          element: 'button.class=window-control maximize.type=button',
                          items: [
                            {
                              element: 'span.class=blind.content=maximize'
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
                {
                  element: 'button.class=minimized-button.content=계산기',
                  event: 'minimizeToggle'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
var utils = utils || {
  eventHandler: (function() {
    var eventHandler,
      eventName;

    if (Element.prototype.addEventListener) {
        eventHandler = 'addEventListener';
        eventName = 'click';
    } else {
      eventHandler = 'attachEvent';
      eventName = 'onclick';
    }

    return {
      event: eventHandler,
      name: eventName
    };
  }()),
  numberFormat: function(number) {
    var reg = /([+-]?\d+)(\d{3})/,
      num = number + '',
      n = num.split('.');

    if (num.length ===2 && num.indexOf('.') > -1) return num;
    while (reg.test(n[0])) {
      n[0] = n[0].replace(reg, '$1' + ',' + '$2');
    }
    
    if (!n[1] && num.indexOf('.') > -1) n[0] + '.';

    return n[1] ? n[0] + '.' + n[1] : n[0];
  },
  isLimit: function(number) {
    var n = (number + '').split('.')[0];

    return n.length > 9 ? true : false;
  },
  isLimitDecimalPointLength: function(number) {
    var dpn = (number + '').split('.')[1];

    return dpn ? dpn.length > 4 : false;
  },
  limitDecimalPoint: function(number) {
    var num = number + '',
      n = num.split('.');
    if (n[1]) {
      n[1] = n[1].substring(0, 5);
    }

    return n[1] ? n[0] + '.' + n[1] : n[0];
  },
  arrayIndexOf: function(array, keyword) {
    var length = array.length,
      i = 0,
      index = -1;
    if (length) {
      for (;i < length; i++) {
        if (String(array[i]).indexOf(keyword) > -1) {
          index = i;
          break;
        }
      }
    }
  
    return index;
  },
};
(function(ele, utils) {
  "use strict";
  function Calculator(containerId) {
    if (!(this instanceof Calculator)) {
      throw new Error('이 객체는 new를 사용하여 생성해야 합니다.');
    }
  
    var stack = [],
      current = [],
      result = '',
      containerId = containerId,
      frag;

    this.stack = stack;
    this.current = current;
    this.setResult = function(value) {
      result = value;
    };
    this.getResult = function() {
      return result;
    }
    this.getContainerId = function() {
      return containerId;
    }
    this.showExpression = function(element, numberFormat, value1, value2) {
      var val = value1 || value2 ? value1 + value2 : '0';
      element.innerHTML = numberFormat(val);
    }
    frag = document.createDocumentFragment();
    frag.appendChild(this.domFactory(this.elements));
  
    document.getElementById(this.getContainerId()).appendChild(frag);
  };
  
  Calculator.prototype.elements = ele;
  Calculator.prototype.utils = utils;

  Calculator.prototype.domFactory = function(elements) {
    var props = elements.element.split('.'),
      utils = this.utils,
      elementName = props[0],
      className = props[utils.arrayIndexOf(props, 'class=')],
      type = props[utils.arrayIndexOf(props, 'type=')],
      content = props[utils.arrayIndexOf(props, 'content=')],
      dom,
      items = elements.items,
      event = elements.event,
      value = elements.value,
      addEvent = this.utils.eventHandler.event,
      click = this.utils.eventHandler.name,
      i = 0,
      length = 0,
      self = this;
  
    dom = document.createElement(elementName);
    if (className) dom.className = className.split('=')[1];
    if (type) dom.setAttribute('type', type.split('=')[1]);
    if (content) dom.innerHTML = content.split('=')[1];
    if (className === 'class=expression') {
      this.showExpression = this.showExpression.curry(dom, utils.numberFormat);
      this.showExpression();
    }
    if (event) {
      dom[addEvent](click, function() {
        self[event](value);
      });
    }
    if (items) {
      for (i = 0, length = items.length; i < length; i++) {
        dom.appendChild(this.domFactory(items[i]));
      }
    }
  
    return dom;
  };
  
  Calculator.prototype.calculate = function(value) {
    var stack = this.stack,
      current = this.current;
    if (stack.length < 2 && current.length > 0) { return false; }
    if (current[0] === value) {
      stack.splice(0, 0, this.getResult());
    }
    if (current.length > 0) {
      if (current.join('') !== '=') { stack.push(current.join('')); }
      current.length = 0;
    }
    if (isNaN(stack[stack.length-1].replace(',', ''))) { stack.pop(); }

    current.push(value);
    this.setResult( utils.limitDecimalPoint(this.postfixCalculate(this.infixToPostfix(stack))) );
    this.showExpression('', this.getResult());
    while (stack.length > 2) {
      stack.shift();
    }
  };
  
  Calculator.prototype.addOperator = function(value) {
    var stack = this.stack,
      current = this.current;
    if (current.length === 0) { return false; }
    if (typeof stack[stack.length-1] === 'number' && current.length === 0) {
      stack[sLastIndex] = value;
    }
    if (utils.arrayIndexOf(current, '=') > -1) {
      stack.length = 0;
      current.length = 0;
      stack.push(this.getResult());
      stack.push(value);
    }
    if (current.join('')) {
      stack.push(current.join(''));
      stack.push(value);
      current.length = 0;
    }
    this.showExpression(stack.join(''), current.join(''));
  };
  
  Calculator.prototype.addOperand = function(value) {
    var stack = this.stack,
      current = this.current, 
      cur = current.join('');
    if (current.length === 0 && value === '0' && stack.length === 0
      || current.length === 1 && current[0] === '0' && value === '0') {
      return false;
    }
    if (current[0] === '=') {
      stack.length = 0;
      current.length = 0;
    }
    if (utils.isLimit(cur) || utils.isLimitDecimalPointLength(cur)) { return false; }
    if (utils.arrayIndexOf(current, '.') > -1 && value === '.') { return false; }
    if (current.length === 1 && current[0] === '0' && value !== '.') { current.shift(); }
    if (current.length === 0 && value === '.') {current.push('0');}

    current.push(value);
    this.showExpression(stack.join(''), current.join(''));
  };
  
  Calculator.prototype.clearExpression = function() {
    var stack = this.stack,
      current = this.current;
    stack.length = 0;
    current.length = 0;
    this.showExpression(stack.join(''), current.join(''));
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
          operatorStack.push(expression[i]);
        }
      } else {
        resultStack.push(expression[i]);
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
    var container = document.getElementById(this.getContainerId()),
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