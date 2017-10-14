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
    var reg = /(^[+-]?\d+)(\d{3})/,
      n = number + '';    
  
    while (reg.test(n)) {
      n = n.replace(reg, '$1' + ',' + '$2');
    }
    
    return n;
  },
  isLimit: function(number) {
    var n = (number + '').split('.')[0];

    return n.length > 10 ? true : false;
  },
  isLimitDecimalPointLength: function(number) {
    var dpn = (number + '').split('.')[1];

    return dpn ? dpn.length > 5 : false;
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