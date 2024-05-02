# Protorype and New

In the previous article, we solved the `DRY` problem but encountered another issue where functions were duplicated in every object.

To solve this problem we can use `prototype`.

## What is Prototype in Javascript?

> **MDN**: Prototypes are the mechanism by which JavaScript objects inherit features from one another.

## Solve Duplication Problem using Prototype Chain

> **MDN**: Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its prototype.

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

- The `Object.create() ` method creates a new object and allows us to specify an object that will be used as the new object's prototype. now `userFunctionStore` is a prototype of the `user1` object. => `user1` and `user2` have hidden bond up to `userFunctionCreator`.

Look at slides (19, and 20) in [PDF NOTES](https://github.com/Xperaz/OOP-Hard-Parts/blob/main/javascript-hard-parts-oop.pdf). for a better understanding.

Memory flow of this code:

![](images/img2.png?raw=true)


- In the console when we print every object we notice a lot of extra stuff, one of them is `__proto__`.
- ** __proto__ **:  exist on every object we create, in our case when we return the `newUser` object it brings with it its little hidden bond `__proto__` that has a reference link to `userFunctionStore`.

- When we try to access the `increment` function from `user1`, if this function does not exist in the `user1` object, the javascript engine looks on the `__proto__` property that has a link to `userFunctionStore` where it finds `increment`. => This mechanism by javascript is prototype nature, which means it doesn't give up when it can't find something in an object directly, but instead keeps looking in the prototype.

> [!NOTE]  
> `__proto__` and `prototype` are totally different things. `prototype` is an object and `__proto__` is reference to that object.

It's a Sophisticated solution but not standard. javascript gives some tools to make it simpler:

see [Solution 3: automation with **new** keyword](https://github.com/Xperaz/OOP-Hard-Parts/blob/main/Notes/4-New_Keyword.md)



## Ressources

[Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

[Visualized: Prototypal Inheritance](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)

[JavaScript Prototypes and Object.create - arabic darija](https://www.youtube.com/watch?v=UC7Jirtw1Bo&list=PLpXCAa5_yklf_vMBI4s4d5EhBOpyGe4br&index=44&t=4s)
