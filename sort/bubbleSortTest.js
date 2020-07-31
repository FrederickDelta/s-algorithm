const RandomList = require("./RandomList");
const bubbleSort = require("./bubbleSort");

const randomList = new RandomList();
console.log("Random List:\n", randomList.list);
console.log("Built-in Sort:\n", randomList.sort());
console.log("Bubble Sort v1:\n", bubbleSort.v1(randomList.list));
console.log("Bubble Sort v2:\n", bubbleSort.v2(randomList.list));
console.log("Bubble Sort v3:\n", bubbleSort.v3(randomList.list));
