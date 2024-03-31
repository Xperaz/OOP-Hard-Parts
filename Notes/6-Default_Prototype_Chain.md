## Object Default **Proto**

JavaScript uses this proto link to give objects, functions and arrays a bunch of bonus functionality. All objects by
default have **proto** :

```
const obj = {
  num: 3,
};
obj.num; // 3
obj.hasOwnProperty("num"); // ? Where's this method?
Object.prototype; // {hasOwnProperty: FUNCTION}

console.log(obj.hasOwnProperty("num")); // true
console.log(obj.hasOwnProperty("age")); // false
```

- With Object.create we override the default **proto** reference to Object.prototype and replace with functionStore.
- But functionStore is an object so it has a **proto** reference to Object.prototype - we just intercede in the chain. => so we benefit from all object built-in functionalities beside our own methods.
