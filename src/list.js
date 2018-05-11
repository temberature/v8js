function cons(n, d) {
  return [n, d];
}
function car(x) {
  return x[0];
}
function cdr(x) {
  return x[1];
}

function list() {
  if (arguments.length === 1) {
    return arguments[0];
  } else if (arguments.length > 1) {
    return cons(arguments[0], Array.)
  }
}
