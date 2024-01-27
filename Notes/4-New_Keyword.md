# Introducing the keyword that automates the hard work: new

>**Educative**: The new keyword in JavaScript is used to create an instance of an object by calling the constructor method. This means that every time you create a new instance, JavaScript calls the constructor method.

`const user1 = new CreateUser("Phil", 4)`

When we call the constructor function with new in front we automate 2 things:

1. Create a new user object
2. return the new user object

But now we need to adjust how we write the body of CreateUser - how can we:

- Refer to the auto-created object? : we can use `this`;
- Know where to put our single copies of functions?: we can use `prototype prototype inheritance`.
> more details about prototype inheritance in next sections.

## Functions are both objects and functions

> **MDN**: In JavaScript, functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.

```

function multiplyBy2(num){
 return num*2
}
multiplyBy2.stored = 5
multiplyBy2(3) // 6
multiplyBy2.stored // 5
multiplyBy2.prototype // {}

```
- function can act as object, `multiplyBy2.stored` that give access to stored value when we use dot notation that looks on its object bit, 
- but also it doesn't lose its fact that is a function `multiplyBy2()` when we use `()` it act as function again.

Now We could use the fact that all functions have a default property on their object version, `prototype`,which is itself an object - to replace our functionStore object.

## New Keyword and Share Funtions with prototype

```
function CreateUser(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
}

CreateUser.prototype.jump = function(energy) {
    this.score -= energy;
}

CreateUser.prototype.play = function(energy) {
    this.score += energy;
}

const user1 = new CreateUser('azedine', 27, 100);

console.log(user1); // { name: 'azedine', age: 27, score: 100 }
user1.jump(10);
console.log(user1); // { name: 'azedine', age: 27, score: 90 }
user1.play(20);
console.log(user1); // // { name: 'azedine', age: 27, score: 110 }

```

Memory flow of this code:

![](images/img3.png?raw=true)

Let's explain this piece of code geting help from memory flow:

> for things that writen in `blue` are the stuff that `new` keyword gifted to us under the hood.

- **CreateUser** is function + object and this object by default has `prototype` which a an Object (this object is empty in beginning). this object where we store our single versions of each function we want. so any object come from  `CreateUser` has access to those functions. 
> We need to make first letter of function Upercase to let other developer known that this function need `new` keyword to work (constructor function).

- **CreateUser.prototype.increment**: Javscript here look for  `CreateUser` object and then look for the `prototype` property of CreateUser object (function object combo) which and object and we assign `jump` function to it. and same thing for `login`.

> in code i have `jump` and `play` instead of `incrment` and `login` but its the same process.

- For `const user1 = new CreateUser('azedine', 27, 100);` :In first we just call `CreateUser` funtion so we create new `excution context` this one in left side in image above, this excution context has ton of stuff done automatically inside of it because of `new` keyword (all keyword that written in blue color). the things that `new` generate for us is:
    1- `this: {}`: **new** create an empty object in  `local memory` and we refer to that object using `this`. so we use this object to add `name` and `age` and `score` properties for each user.

    2- **__proto__**: Its hidden property that has refrence to `CreateUser.prototype`, so this property allow us to access all methods stored in `CreateUser.prototype` object (`jump` and `play` in this case).

    3- The `new` keyword auto return the object at the end of function to `user1`.

    > **local memory**: is the memory of `CreateUser` function where js engine create memory for `name`, `score`, also for `object` created by `new`.

> [!WARNING]  
> If we invoke `CreateUser` without `new` keyword it will refer to a `this` that hasn't been auto-created and it will refer to `global` or `window` object, so we will face some undfined behaviors that's why we `Upercase` the first letter of this function to let everyone know that this function need `new` to work.

=> Now we have our data and functionalities bundled together.
=> As we see `new` keyword automate lot of work for us. and that's how it work exactly under the hood.

## Ressources

[What is the new keyword in JavaScript?](https://www.educative.io/answers/what-is-the-new-keyword-in-javascript)

[JavaScript new Keyword - geeksforgeeks](https://www.geeksforgeeks.org/javascript-new-keyword/)

[Functions in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

