function infixToPostfix(expression) {
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
}

function postfixCalculator(postfixExpression) {
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
}

describe('infix to postfix', function() {
  it('중위표기법에서 후위표기법으로 반환된다', function() {
    expect(infixToPostfix(['1', '+', '2', '*', '3'])).toEqual(['1', '2', '3', '*', '+']);
    expect(infixToPostfix(['1', '+', '2', '-', '3'])).toEqual(['1', '2', '+', '3', '-']);
    expect(infixToPostfix(['1', '+', '2', '-', '3', '*', '4'])).toEqual(['1', '2', '+', '3', '4', '*', '-']);
    expect(infixToPostfix(['1', '/', '2', '-', '3', '*', '4'])).toEqual(['1', '2', '/', '3', '4', '*', '-']);
    expect(infixToPostfix(['4', '/', '2', '*', '3', '+', '4', '*', '5'])).toEqual(['4', '2', '/', '3', '*', '4', '5', '*', '+']);
  });
});


describe('calculate', function() {
  it('후위표기법으로 된 수식을 계산한다', function() {
    expect(postfixCalculator(infixToPostfix(['1', '+', '2', '*', '3']))).toEqual(7);
    expect(postfixCalculator(infixToPostfix(['4', '/', '2', '*', '3', '+', '4', '*', '5']))).toEqual(26);
  });
});