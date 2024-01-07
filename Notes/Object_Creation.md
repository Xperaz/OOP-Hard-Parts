# Object Creation

Object allow us to implement functionalty on some data in same place, => `encapsulation`, in another word object allow us to put appropriate functionality with the apprpriate data that related to each other and bundel them up into what we call and `Object`.

## First object

**Let's suppose we're building a quiz game with users**

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

We can also create empty object and assign properties to it using `dot notation`:

```
    const user2 = {}; //create an empty object
    user2.name = "Julia"; //assign properties to that object
    user2.score = 5;
    user2.increment = function() {
    user2.score++;

    };
```

## Creat Object using Object.create

**Object.create**: is a built in method that whenever we pass through it, it will create an empty object always even we give another object as argument.

```
    const user3 = Object.create(null);
    user3.name = "Eva";
    user3.score = 9;
    user3.increment = function() {
    user3.score++;
    };

```

## Breaking DRY Principles

=> The problem with creating object like this is we always need to create sperate object for each user. and our code got so repetitive so we break `DRY Principle` "Don't repeat yourself", and also not effecient if we have lot of users.

[DRY Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

## Creating Objects with Functions

Our first solution for the problem above is create object using `Funtion`:

How things work inside javascript excution context:

![](images/img1.png?raw=true)

This approach fix our DRY problem and also it's simple and easy to reason about!, but it comes with another downside.
Each time we create a new user we make space in our
computer's memory for all our data and functions. But
our functions are just copies
Is there a better way?
