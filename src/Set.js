if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

var _size = 0;
function CustomSet() {
  var vs = arguments[0],
    l = vs && vs.length;
  this.entries = {};
  if (l && vs[l - 1]) {
    for (var i = 0; i < l; i++) {
      this.add(vs[i]);
    }
  }
}
CustomSet.prototype = {
  constructor: CustomSet,
  valueOf: function () {
    var s = '{ ';
    for (var i = 0; i < this.size; i++) {
      s += this.entries[i];
    }
    return s + ' }';
  },
  add: function(value) {
    var a = this.entries;
    var r = false;
    for (var j in a) {
      if (value === a[j]) {
        r = true;
        break;
      }
    }
    if (!r) {
      a[value] = value;
      _size++;
    }
  },
  clear: function() {},
  delete: function() {},
  entries: function() {},
  forEach: function() {},
  has: function(value) {
    return this.entries.hasOwnProperty(value);
  },
  keys: function() {},
  values: function() {}
};
Object.defineProperties(CustomSet.prototype, {
  size: {
    get: function() {
      return _size;
    },
    set: function() {
      return _size;
    }
  }
});

module.exports = CustomSet;
