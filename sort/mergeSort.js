// Top-down
module.exports.v1 = (list) => {
  if (list.length <= 1) return list;

  let left = [];
  let right = [];
  let middle = list.length / 2;
  left = list.slice(0, middle);
  right = list.slice(middle);

  return mergeV1(this.v1(left), this.v1(right));
};

const mergeV1 = (left, right) => {
  let result = [];

  // length != 0;
  while (left.length || right.length) {
    if (left.length && right.length) {
      result.push(left[0] < right[0] ? left.shift() : right.shift());
    } else if (left.length) {
      result.push(left.shift());
    } else if (right.length) {
      result.push(right.shift());
    }
  }
  return result;
};

// Top-down
module.exports.v2 = (list) => {
  if (list.length <= 1) return list;

  let left = [];
  let right = [];
  let middle = list.length / 2;
  left = list.slice(0, middle);
  right = list.slice(middle);

  return mergeV2(this.v2(left), this.v2(right));
};

const mergeV2 = (left, right) => {
  let result = [];

  // length != 0;
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  // either left or right is empty
  return result.concat(left, right);
};
