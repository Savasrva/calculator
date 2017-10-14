function C() {
  // var C_WRAPPER = document.createElement('div');
  var self = this;
  // var arithmetic = {
  //   stack: [],
  //   operator: '',
  //   temp: 0,
  //   result: 0,
  //   viwer: document.createElement('div'),
  //   setViwer: function() {
  //     var t = document.createElement('div');
  //     t.textContent = this
  //     this.viwer .appendChild();
  //   }
  // };
  var stack = [];
  // var conf = {
  //   buttons: [
  //     {title: '1', type: 'number'},
  //     {title: '2', type: 'number'},
  //     {title: '3', type: 'number'},
  //     {title: '+', type: 'operator', role: 'addition'},
  //     {title: '-', type: 'operator', role: 'addition'},
  //     {title: '/', type: 'operator', role: 'addition'},
  //     {title: '*', type: 'operator', role: 'addition'},
  //     {title: '=', type: 'excutation', role: 'excutation'},
  //   ],
  // };

  C_WRAPPER.appendChild(arithmetic.viwer);
  
  for(var i = 0, length = conf.buttons.length; i < length; i++) {
    C_WRAPPER.appendChild(this.button(conf.buttons[i], stack));
  }

  return C_WRAPPER;
}

C.prototype.setView = function() {

}

C.prototype.excutation = function(self, stack) {
  console.log(stack);
  console.log(stack.reverse());
};

C.prototype.addition = function(self, stack) {
  console.log(self);
  console.log(stack);
};

C.prototype.button = function(prop, stack) {
  var self = this,
    element = document.createElement('button');
  element.textContent = prop.title;

  element.addEventListener('click', function(e) {
    stack.push(e.target.textContent);
    if (prop.type === 'operator') {
      self[prop.role](self, stack);
    }
  });
  return element;
};

function add() {
  var wrapperElement = document.createElement('div'),
    element = document.createElement('button');
  wrapperElement.id = 'wrapper';
  element.textContent = 'create';

  element.addEventListener('click', function() {
    document.getElementById('wrapper').appendChild(new C());
  });

  document.body.appendChild(element);
  document.body.appendChild(wrapperElement);
}

add();