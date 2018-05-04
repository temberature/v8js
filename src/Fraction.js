function makeRat(n, d) {
  return {
    x: n,
    y: d
  };
}
function numer(x) {
  return x.x;
}
function denom(x) {
  return x.y;
}

function addRat() {
  var as = arguments;
  if (as.length > 2) {
    var args = Array.prototype.splice.call(as);
    return addRat(as[0], addRat.apply(null, args));
  } else {
    var x = as[0], y = as[1];
    var n = numer(x) * denom(y) + numer(y) * denom(x);
    var d = denom(x) * denom(y);
  }

  return makeRat(n, d);
}



module.exports = {
  makeRat: makeRat,
  addRat: addRat
};
