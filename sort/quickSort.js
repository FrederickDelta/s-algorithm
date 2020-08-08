module.exports.v1 = (list) => {
  if (list.length <= 1) return list;

  let left = [];
  let right = [];
  let pivot = list.pop();

  for (let i = 0; i < list.length; i++) {
    list[i] < pivot ? left.push(list[i]) : right.push(list[i]);
  }
  return this.v1(left).concat([pivot], this.v1(right));
};
