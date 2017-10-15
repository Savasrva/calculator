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