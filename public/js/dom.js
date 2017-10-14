var htmlElement = {
  element: 'div.class=calculator_app',
  children: [
    {
      element: 'div.class=calculator',
      children: [
        {
          element: 'h1.class=calculator_title.content=계산기',
        },
        {
          element: 'div.class=result_window',
        },
        {
          element: 'ul.class=calculator_btn_list',
          children: [
            {
              element: 'li.class=calculator_btn_item',
              children: [
                {
                  element: 'button.class=btn.type=button.content=C',
                }
              ]
            },
            {
              element: 'li.class=calculator_btn_item',
              children: [
                {
                  element: 'button.class=btn.type=button.content=&plusmn;',
                }
              ]
            }
          ]
        },
      ]
    },
    {
      element: 'button.class=minimize_button.content=계산기',
    }
  ]
};

function domFactory(domObject) {
  var props = domObject.element.split('.'),
    elementName = props[0],
    className = props[arrayIndexOf(props, 'class=')],
    type = props[arrayIndexOf(props, 'type=')],
    content = props[arrayIndexOf(props, 'content=')],
    dom,
    children = domObject.children,
    i = 0,
    length = 0;

  dom = document.createElement(elementName);
  if (className) dom.className = className.split('=')[1];
  if (type) dom.setAttribute('type', type.split('=')[1]);
  if (content) dom.innerHTML = content.split('=')[1];
  if (children) {
    for (i = 0, length = children.length; i < length; i++) {
      dom.appendChild(domFactory(children[i]));
    }
  }

  return dom;
}

function arrayIndexOf(array, keyword) {
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
}

function create() {
  var root = domFactory(frame);
  return root;
}