const obj = {
  num: 3,
  increment: function () {
    this.num++;
  },
};
const otherObj = {
  num: 10,
};
obj.increment(); // obj.num now 4
obj.increment.call(otherObj); // otherObj.num now 11
// obj.increment.apply(otherObj);
