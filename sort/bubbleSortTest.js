const RandomList = require("./RandomList");
const bubbleSort = require("./bubbleSort");

const randomList = new RandomList();
console.log("Random List:\n", randomList.list);
console.log("Built-in Sort:\n", randomList.sort());
console.log("Bubble Sort:\n", bubbleSort(randomList.list));
