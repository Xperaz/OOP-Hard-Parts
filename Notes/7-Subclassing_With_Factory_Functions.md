# Subclassing with Factory Functions

> [!BASEDASH]
> Subclassing is the practice of creating a new class, known as a subclass, that inherits attributes and methods from another class, referred to as the superclass. This relationship allows for polymorphism and code reuse, where subclasses can override or extend the functionality of their superclasses.

## Factory function approach

Let's imagine a scenario where we have two type of users, normal user and paid user.
Both user will have common methods and properties, but paid user will some extra methods and properties. so the paid user is normal user but have extra functionality, so we need to design code to not make break `DRY` principle, by inheriting the normal user methods and properties to paid user. we call that `Subclassing`.

- Subclassing in our earlier solution 2

create normal user:

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

- **function paidUserCreator(name, score, balance)**: we try to create `paidUser` using `userCreator` and add balance to our `newPaidUser` object, but we get a problem!. the returned object from `userCreator` has `__Proto__` on it which has a reference to `userFunctions` but we want our paidUser to have reference to `paidUserFunctions`.

- We mutate **Proto** to refrence to `paidUserFunctions` getting help from `setPrototypeOf`, the `paidUserFunctions` also has reference to `userFunctions` => so `paidUser` has access to both methods and properties of `paidUserFunctions` and `userFunctions` as well.

### Prototype Lookup

Let's discover the journey of calling a method through and object.

- `paidUser.increaseBalance`: first of all javascript engine will check if there is any `increaseBlance` method in paidUser object itself, it will not find it so js engine will go to **Proto** that has bound to `paidUserFunctions`, which has the `increaseBlance` so js engine will stop here and execute the method.

- `paidUser.sayName`: js engine will follow same process again looking for `sayName` in `paidUser` object, again wil not find it, it will look throught **Proto** that has bound to `paidUserFunctions`, will not find it again, js don't give up and will look through `paidUserFunctions` **Proto** that has bound to `userFunctions` will find it and execute it.

=> We can call this journey **Prototype Lookup**, Its Prototypal language structure.

=> This is how `Subclassing` works under the hood.

## Call and Apply

We have another way of running a function that allow us to control the assignment of this:

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

=> The Difference Between call() and apply() is: When we should pass arguments to a method The call() method takes arguments separately. The apply() method takes arguments as an array.

- `obj.call.fn('arg1', 'arg2')`.
- `obj.apply.fn(['arg1', 'arg2'])`.

Memory flow:

![](images/img6.png?raw=true)
