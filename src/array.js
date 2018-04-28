function QuickSort(a, from, to) {
  if (from >= to) {
    return;
  }
  var third_index = 0;
  if (to - from <= 10) {
    InsertionSort(a, from, to);
    return;
  }
  if (to - from > 1000) {
    third_index = GetThirdIndex(a, from, to);
  } else {
    third_index = from + ((to - from) >> 1);
  }
  var v0 = a[from],
    v1 = a[third_index],
    v2 = a[to - 1],
    tmp;
  var c01 = comparefn(v0, v1);
  if (c01 > 0) {
    tmp = v0;
    v0 = v1;
    v1 = tmp;
  }
  var c12 = comparefn(v1, v2);
  if (c12 > 0) {
    tmp = v1;
    v1 = v2;
    v2 = tmp;
  }
  c01 = comparefn(v0, v1);
  if (c01 > 0) {
    tmp = v0;
    v0 = v1;
    v1 = tmp;
  }
  a[from] = v0;
  a[third_index] = v1;
  a[to - 1] = v2;
  var pviot = a[third_index];
  var low_end = from + 1,
    high_start = to - 1;
  tmp = a[low_end];
  a[low_end] = pviot;
  a[third_index] = tmp;
  for (var i = low_end + 1; i < high_start; i++) {
    var element = a[i];
    var order = comparefn(element, pviot);
    if (order <= 0) {
      a[low_end] = element;
      low_end++;
    } else {
      do {
        high_start--;
        if (high_start === low_end) break;
        var top_elem = a[high_start];
        var order = comparefn(top_elem, pviot);
      } while (order > 0);
      a[high_start] = element;
      a[i] = top_elem;
      a[low_end] = a[i];
      low_end++;
    }
    if (high_start === low_end) break;
  }
  a[i] = pviot;
  QuickSort(a, 0, low_end);
  QuickSort(a, high_start, to);
  return a;
}
function InsertionSort(a, from, to) {
  for (var i = from + 1; i < to; i++) {
    var element = a[i];
    for (var j = i - 1; j >= from; j--) {
      var tmp = a[j];
      var order = comparefn(tmp, element);
      if (order > 0) {
        a[j + 1] = tmp;
      } else {
        break;
      }
    }
    a[j + 1] = element;
  }
}

function comparefn(a, b) {
  return a - b;
}

function customArray() {
  var l = 0;
  if (arguments.length === 1 && typeof arguments[0] === 'number') {
    l = arguments[0];
    this[l - 1] = null;
  } else {
    l = arguments.length;
    for (var i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }
  this.length = l;
}
customArray.prototype = new Array();
customArray.prototype.sort = function() {
  QuickSort(this, 0, this.length);
  return this;
};
customArray.prototype.indexOf = function() {};

module.exports = customArray;
