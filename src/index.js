
exports.min = function min(array) {
  let min;
  if (!Array.isArray(array) || array.length === 0)
    return 0;
  else {
    min = array[0];
    for (let item of array) {
      if (item < min)
        min = item;
    }
  }
  return min;
}

exports.max = function max(array) {
  let max;
  if (!Array.isArray(array) || array.length === 0)
    return 0;
  else {
    max = array[0];
    for (let item of array) {
      if (item > max)
        max = item;
    }
  }
  return max;
}

exports.avg = function avg(array) {
  let avg = 0;
  if (!Array.isArray(array) || array.length === 0)
    return 0;
  else {
    for (let item of array)
      avg += item;
  }
  return avg / array.length;
}
