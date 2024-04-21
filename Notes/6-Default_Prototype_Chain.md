## Object Default **Proto**

JavaScript uses this proto link to give objects, functions, and arrays a bunch of bonus functionality. All objects by
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

- With `Object.create` we override the default **proto** reference to `Object.prototype` and replace it with `functionStore`.
- But functionStore is an object so it has a **proto** reference to `Object.prototype` - we just intercede in the chain. => so we benefit from all object built-in functionalities besides our methods.

## Function.prototype and Array. prototype

When javascript loads we get a lot of stuff for free => another function object combo, this function has `prototype object` => that object has in it a whole bunch of functions (toSting, call, bind...). let's see some examples:

```
function multiplyBy2(num){
 return num*2
}
multiplyBy2.toString() //Where is this method?
Function.prototype // {toString : FUNCTION, call : FUNCTION, bind : FUNCTION}
multiplyBy2.hasOwnProperty("score") // Where's this function?
Function.prototype.__proto__ // Object.prototype {hasOwnProperty: FUNCTION}
```

memory flow:

![](images/img6.png?raw=true)

When `multiplyBy2.toString()` got executed the javascript engine checks `multiplyBy2` if there is any method called `toString` => can't find it => js engine will check `__Proto__` => since `toString` is specified for functions and not object => `__Proto__` will reference to `Function prototype` => we found `toString` and the journey is done.

And for `multiplyBy2.hasOwnProperty("score")` => the js engine follows the same process but this time `hasOwnProperty("score")` is a specific method for the object => It doesn't exist in `Function Prototype` but js engine doesn't give up and continue looking to Function prototype `__Proto__` this **Proto** has reference to `Prototype Object` which has the method `hasOwnProperty` and other built-in object methods.
That's what we call Prototype chain, js engine keeps looking into `__Proto__` until **Proto** points to `null` then the chain end.

> [!WARNING]  
> **proto** is considered outdated and somewhat deprecated. The modern methods to get/set a prototype are: Object. getPrototypeOf(obj) – returns the [[Prototype]] of obj .

## Ressources

[OOP Code Smith](https://csx.codesmith.io/units/object-oriented-programming)
[JavaScript: What’s **proto**?](https://medium.com/dev-proto/understanding-proto-in-javascript-c5a42647f04)
