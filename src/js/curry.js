if (!Function.prototype.curry) {
  Function.prototype.curry = function() {
    var args = [].slice.apply(arguments);
    var self = this;
    return function() {
      return self.apply(null, args.concat([].slice.apply(arguments)));
    };
  };
}