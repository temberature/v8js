function assign(t, s) {
  for (var key in s) {
    if (s[key] !== t[key]) {
      t[key] = s[key];
    }
  }
  return t;
}

function create(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
module.exports = {
  assign: assign,
  create: create
};
