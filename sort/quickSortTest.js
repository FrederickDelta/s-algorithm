const RandomList = require("./RandomList");
const quickSort = require("./quickSort");

const randomList = new RandomList();
console.log("Random List:\n", randomList.list);
console.log("Built-in Sort:\n", randomList.sort());
console.log("Quick Sort v1:\n", quickSort.v1(randomList.list));
