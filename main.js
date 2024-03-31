const obj = {
  num: 3,
};
obj.num; // 3
obj.hasOwnProperty("num"); // ? Where's this method?
Object.prototype; // {hasOwnProperty: FUNCTION}

console.log(obj.hasOwnProperty("num")); // true
console.log(obj.hasOwnProperty("age")); // false
