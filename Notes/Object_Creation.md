# Object Creation

Object allows us to implement functionality on some data in the same place, => `encapsulation`, in other words, object allows us to put appropriate functionality with the appropriate data that is related to each other and bundles them up into what we call an `Object`.

## Create First object

**suppose we're building a quiz game with users**

Some of our users

Name: Phil
Score: 4

Name: Julia
Score: 5

Functionality: Ability to increase score.

```
    const user1 = {
    name: "Phil",
    score: 4,
    increment: function() {
    user1.score++;
    }
    };

```

We can also create an empty object and assign properties to it using `dot notation`:

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

## Breaking DRY Principles

=> The problem with creating objects like this is we always need to create separate objects for each user. and our code got so repetitive so we broke `DRY Principle` "Don't repeat yourself", and also not efficient if we have a lot of users.

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

This approach fixes our `DRY` problem and also it's simple and easy to reason about!, but it comes with another downside.Each time we create a new user we make space in our computer's memory for all our data and functions. But our functions are just copies.

## Solution

see documentation [here](Nots/Prototype_&_New.md)

## Ressouces

[DRY Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

