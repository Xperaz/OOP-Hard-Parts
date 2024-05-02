# Object Creation

The object allows us to implement functionality on some data in the same place, this is what `encapsulation` is, in other words, an object will enable us to put appropriate functionality with the applicable data that is related to each other and bundle them together.

## Create First object

**Suppose we're building a quiz game that will have multiple users.**

```
const user1 = {
  name: "Phil",
  score: 4,
  // increment functionality to increase the score
  increment: function () {
    user1.score++;
  },
};

console.log(user1); // { name: 'Phil', score: 4, increment: [Function: increment] }
```

We can create an empty object and add properties and functionality to it as well.` dot notation `:

```
    const user2 = {}; //create an empty object
    user2.name = "Julia"; //assign properties to that object
    user2.score = 5;
    user2.increment = function() {
    user2.score++;

    };
```

## Create Object using Object.create

**Object.create**: is a built-in method that whenever we pass through it, will always create an empty object even if we give it another object as argument.

```
    const user3 = Object.create(null);
    user3.name = "Eva";
    user3.score = 9;
    user3.increment = function() {
    user3.score++;
    };

```

## Breaking DRY Principle

=> The problem with creating objects like this is we always need to create separate objects for each user. and our code got so repetitive that we broke the `DRY Principle` "Don't repeat yourself", and also not efficient if we have a lot of users.

## Creating Objects with Functions

Our first solution for the problem above is to create an object using `Function`:

```
    function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
    newUser.score++;
    };
    return newUser;
    };
    const user1 = userCreator("Phil", 4);
    const user2 = userCreator("Julia", 5);
    user1.increment()
```

How things work inside the javascript execution context:

![](images/img1.png?raw=true)

> **Memory**: stands for global memory (store variables and objects...) of global Scope, and **local memory** stands for (variables and objects ...) that are available only within a specific local context (scope).


This approach fixes our `DRY` problem and also it's simple and easy to reason about!, but it comes with another downside. Each time we create a new user we make space in our computer's memory for all our data and functions. But our functions are just copies.

## Solution

see documentation [here](https://github.com/Xperaz/OOP-Hard-Parts/blob/main/Notes/3-Prototype_%26_New.md)

## Ressouces

[DRY Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

