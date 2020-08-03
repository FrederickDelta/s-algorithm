const RandomList = require("./RandomList");
const mergeSort = require("./mergeSort");

const randomList = new RandomList();
console.log("Random List:\n", randomList.list);
console.log("Built-in Sort:\n", randomList.sort());
console.log("Merge Sort v1:\n", mergeSort.v1(randomList.list));
console.log("Merge Sort v2:\n", mergeSort.v2(randomList.list));
