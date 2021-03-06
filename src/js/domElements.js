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