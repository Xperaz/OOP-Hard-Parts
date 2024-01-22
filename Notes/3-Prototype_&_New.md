# Protorype and New

In previous article we solve `DRY` problem but we got another problem, wich duplicate functions in every object.

To solve this problem we can use `prototype`.

## What is Prototype in javascript?

> **MDN**: Prototypes are the mechanism by which JavaScript objects inherit features from one another.

## Solve Duplication Problem using Prototype Chain

> **MDN**: Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

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

- The `Object.create() ` method creates a new object and allows us to specify an object that will be used as the new object's prototype. now `userFunctionStore` is prototype to `user1` object. => `user1` and `user2` have hidden bond up to `userFunctionCreator`.

Look at slide (19, 20) in [PDF](javascript-hard-parts-oop.pdf). for better understanding.

Memory flow of this code:

![](images/img2.png?raw=true)


- In the console when we print every object we notice lot of extra stuff, one of them is `__proto__`.
- ** __proto__ **:  exist on every object we create, in our case when we return `newUser` object it brings with it its little hidden bond `__proto__` that have refrence link to `userFunctionStore`.

- When we try to access `increment` function from `user1`, if this function not exist in `user1` object, javascript engine look on `__proto__` property that have link to `userFunctionStore` where it find `increment`. => this mecanism by javascript is prototype nature (feature), means it don't give up when it can't find something in an object directly, but instead looking elsewhere.

> [!NOTE]  
> `__proto__` and `prototype` are totally different things.

It' Sophisticated solution but not standard. javascript gives some tools to make it more simpler:

see [Solution 3 autmation keyword new](4-New_Keyword.md)



## Ressources

[Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

[Visualized: Prototypal Inheritance](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)
