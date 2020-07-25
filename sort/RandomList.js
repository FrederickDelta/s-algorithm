class RandomList {
  constructor() {
    this.length = 10;
    this.max = 1000;
    this.list = this._buildList();
  }
  _buildList() {
    let list = new Array();
    for (let i = 0; i < this.length; i++) {
      list.push(Math.floor(Math.random() * this.max));
    }
    return list;
  }
  sort() {
    let listCopy = [...this.list];
    return listCopy.sort((a, b) => a - b);
  }
}

module.exports = RandomList;
