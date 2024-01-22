# Introducing the keyword that automates the hard work: new

>**Educative**: The new keyword in JavaScript is used to create an instance of an object by calling the constructor method. This means that every time you create a new instance, JavaScript calls the constructor method.

`const user1 = new userCreator("Phil", 4)`

When we call the constructor function with new in front we automate 2 things:

1. Create a new user object
2. return the new user object

But now we need to adjust how we write the body of userCreator - how can we:

- Refer to the auto-created object? : we can use `this`;
- Know where to put our single copies of functions?: we can use `prototype prototype inheritance`.
> more details about prototype inheritance in next sections.

## The new keyword automates a lot of our manual work


```
function userCreator(name, score) {
    this.name = name;
    this.score = score;
};

userCreator.prototype // {};
userCreator.prototype.increment = function(){
 this.score++;
}
let user1 = new userCreator("Phil", 4);
console.log(user1);

```


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

## Ressources

[What is the new keyword in JavaScript?](https://www.educative.io/answers/what-is-the-new-keyword-in-javascript)

[Functions in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

