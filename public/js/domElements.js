var domElements = domElements || {
  element: 'div.class=wrapper',
  children: [
    {
      element: 'div.class=application-wrapper',
      children: [
        {
          element: 'div.class=application-content',
          children: [
            {
              element: 'div.class=calculator-app',
              children: [
                {
                  element: 'div.class=calculator',
                  children: [
                    {
                      element: 'h1.class=calculator-title.content=계산기',
                    },
                    {
                      element: 'div.class=result-window',
                      children: [
                        {
                          element: 'p.class=expression',
                        }
                      ]
                    },
                    {
                      element: 'ul.class=calculator-btn-list',
                      children: [
                        {
                          element: 'li.class=calculator-btn-item m-l-0',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=C',
                              event: 'clearExpression'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=&divide;',
                              event: 'addOperator',
                              value: '/'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=&times;',
                              event: 'addOperator',
                              value: '*'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=-',
                              event: 'addOperator',
                              value: '-'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item m-l-0',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=7',
                              event: 'addOperand',
                              value: '7'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=8',
                              event: 'addOperand',
                              value: '8'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=9',
                              event: 'addOperand',
                              value: '9'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=+',
                              event: 'addOperator',
                              value: '+'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item m-l-0',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=4',
                              event: 'addOperand',
                              value: '4'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=5',
                              event: 'addOperand',
                              value: '5'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=6',
                              event: 'addOperand',
                              value: '6'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=&#46',
                              event: 'addOperand',
                              value: '.'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item m-l-0',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=0',
                              event: 'addOperand',
                              value: '0'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=1',
                              event: 'addOperand',
                              value: '1'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=2',
                              event: 'addOperand',
                              value: '2'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item',
                          children: [
                            {
                              element: 'button.class=btn.type=button.content=3',
                              event: 'addOperand',
                              value: '3'
                            }
                          ]
                        },
                        {
                          element: 'li.class=calculator-btn-item m-l-0 col-max',
                          children: [
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
                      children: [
                        {
                          element: 'button.class=window-control close.type=button',
                          event: 'close',
                          children: [
                            {
                              element: 'span.class=blind.content=close'
                            }
                          ]
                        },
                        {
                          element: 'button.class=window-control minimize.type=button',
                          event: 'minimize',
                          children: [
                            {
                              element: 'span.class=blind.content=minimize'
                            }
                          ]
                        },
                        {
                          element: 'button.class=window-control maximize.type=button',
                          children: [
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
                  element: 'button.class=minimize_button blind.content=계산기',
                }
              ]
            }
          ]
        }
      ]
    }
  ],
};