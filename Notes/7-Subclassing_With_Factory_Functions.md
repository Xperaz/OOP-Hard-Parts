# Subclassing with Factory Functions

> [!BASEDASH]
> Subclassing is the practice of creating a new class, known as a subclass, that inherits attributes and methods from another class, referred to as the superclass. This relationship allows for polymorphism and code reuse, where subclasses can override or extend the functionality of their superclasses.

## Factory function approach

Let's consider a situation where we have two types of users, namely normal users and paid users. Both types of users will have common methods and properties, but paid users will have some additional methods and properties. Hence, paid users are similar to normal users but with extra functionality. To avoid repeating code and maintaining the `Don't Repeat Yourself` principle, we need to design the code in such a way that the paid user class inherits the methods and properties of the normal user class. This process is called `subclassing`.

 **Subclassing in our earlier solution 2**:

create a normal user:

```
function userCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctions = {
  sayName: function () {
    console.log("Hi, ", this.name);
  },

  increaseScore: function () {
    this.score++;
  },
};

normalUser.sayName(); // Hi,  azedine
console.log(normalUser); // { name: 'azedine', score: 10 }

```

create paidUser:

```
function paidUserCreator(name, score, balance) {
  const newPaidUser = userCreator(name, score);
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  newPaidUser.balance = balance;
  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: function () {
    this.balance++;
  },
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser = paidUserCreator("xperaz", 10, 150);
paidUser.increaseScore();
paidUser.increaseBalance();

console.log(paidUser); // { name: 'xperaz', score: 11, balance: 151 }
```

- `Object.setPrototypeOf(paidUserFunctions, userFunctions)`: we use `setPrototypeOf` to bound `__Proto__` to `userFunctions` so **paidUsers** has access to **normalUser** methods and properties and also has access to its specific ones.

- **function paidUserCreator(name, score, balance)**: we try to create `paidUser` using `userCreator` and add balance to our `newPaidUser` object, but we get a problem! the returned object from `userCreator` has `__Proto__` on it which has a reference to `userFunctions` but we want our paidUser to have a reference to `paidUserFunctions`.

- We mutate **Proto** to refer to `paidUserFunctions` getting help from `setPrototypeOf`, the `paidUserFunctions` also has reference to `userFunctions` => so `paidUser` has access to both methods and properties of `paidUserFunctions` and `userFunctions` as well.

### Prototype Lookup

Let's discover the journey of calling a method through an object.

- When the `paidUser.increaseBalance` method is called, the JavaScript engine first checks if this method is present in the `paidUser` object itself. Since it is not found, the engine looks up the prototype chain (or **Proto**) bound to the `paidUserFunctions`. Here, the `increaseBalance` method is found and executed by the JavaScript engine.

- `paidUser.sayName`: When the JavaScript engine searches for the `sayName` function in the `paidUser` object, it first looks at the object itself. If it cannot find the function there, it will search through the prototype chain. The prototype it checks is `paidUserFunctions`, but if the function isn't found there, it will continue searching through the prototype chain until it finds the function in `userFunctions`. Once the function is found, it will be executed.

=> We can call this journey **Prototype Lookup**, Its Prototypal language structure.

=> This is how `Subclassing` works behind the scenes.

## Call and Apply

We have another way of running a function that allows us to control the assignment of this:

```
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

```

=> `this` always refers to the object to the left of the dot on which the function (method) is being called - unless we override that by running the function using .call() or .apply() which lets us set the value of this inside of the increment function.

=> The Difference Between call() and apply() is that when we should pass arguments to a method The call() method takes arguments separately. The apply() method takes arguments as an array.

- `obj.call.fn('arg1', 'arg2')`.
- `obj.apply.fn(['arg1', 'arg2'])`.

Memory flow:

![](images/img9.png?raw=true)

## Ressources
[Subclassing in javascript](https://www.basedash.com/blog/how-to-create-a-subclass-in-javascript) <br />
[call, apply, and bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
