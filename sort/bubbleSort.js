module.exports.v1 = (list) => {
  let listT = [...list];
  const n = listT.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (listT[j] > listT[j + 1]) {
        let temp = listT[j];
        listT[j] = listT[j + 1];
        listT[j + 1] = temp;
      }
    }
  }
  return listT;
};

module.exports.v2 = (list) => {
  let listT = [...list];
  const n = listT.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (listT[j] > listT[j + 1]) {
        let temp = listT[j];
        listT[j] = listT[j + 1];
        listT[j + 1] = temp;
      }
    }
  }
  return listT;
};

module.exports.v3 = (list) => {
  let listT = [...list];
  const n = listT.length - 1;
  for (let i = 0; i < n; i++) {
    let sortComplete = true;
    for (let j = 0; j < n - i; j++) {
      if (listT[j] > listT[j + 1]) {
        let temp = listT[j];
        listT[j] = listT[j + 1];
        listT[j + 1] = temp;
        sortComplete = false;
      }
    }
    if (sortComplete) break;
  }
  return listT;
};
