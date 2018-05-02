function profile(f1, f2, label) {
  if (!isFunction(f1) || !isFunction(f2) || typeof label !== 'string') {
    throw new Error('arguments invalid');
  }
  var times = 1;
  console.time(label + '1');
  for (var i = 0; i < times; i++) {
    f1();
  }
  console.timeEnd(label + '1');

  console.time(label + '2');
  for (var i = 0; i < times; i++) {
    f2();
  }
  console.timeEnd(label + '2');
}

function isFunction(v) {
  return Object.prototype.toString.call(v) === '[object Function]';
}
module.exports = {
  profile: profile
};
