
exports.min = function min (array) {
  return (!array || array.length < 1) ? 0 : Math.min(...array);
}

exports.max = function max (array) {
  return (!array || array.length < 1) ? 0 : Math.max(...array);;
}

exports.avg = function avg (array) {
  if (!array || array.length < 1) {
    return 0;
  }
  const sum = array.reduce((acc, item) => acc += item, 0);
  return sum / array.length;
}
