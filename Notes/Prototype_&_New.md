# Protorype and New

In previous article we solve `DRY` problem but we got another probel, wich duplicate functions in every object.

To solve this problem we can use `prototype`.

## What is Prototype in javascript?

> **MDN**: Prototypes are the mechanism by which JavaScript objects inherit features from one another.

## The prototype chain ?

> **MDN**: Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

## Solve Duplication Problem using Prototype Chain

```
    function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
    };
    const userFunctionStore = {
    increment: function(){this.score++;},
    login: function(){console.log("You're loggedin");}
    };
    const user1 = userCreator("Phil", 4);
    const user2 = userCreator("Julia", 5);
    user1.increment();

```

The `Object.create() ` method creates a new object and allows us to specify an object that will be used as the new object's prototype. now `userFunctionStore` is prototype to `user1` object. => `user1` and `user2` have hidden bond up to `userFunctionCreator`.

Look at slide (19, 20) in [PDF](../javascript-hard-parts-oop.pdf). for better understanding.

Memory flow of this code:

![](images/img2.png?raw=true)

## Ressources

[Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
