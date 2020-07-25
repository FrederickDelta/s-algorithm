const bubbleSort = (list) => {
  const n = list.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
};

module.exports = bubbleSort;
