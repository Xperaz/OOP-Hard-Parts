# This and scope

In this section, we will discover problems related to `this` and `scope` also using class for the first time.

## Calling a Prototype Methods

```
function CreateUser(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
}

CreateUser.prototype.jump = function(energy) {
    this.score -= energy;
}

const user1 = new CreateUser('azedine', 27, 100);

user1.jump(10);

```

When we call `user1.jump(10)` automatically as soon as that function gets called, its execution context opens, and the `this` will point to the object that calls this function (user1). so the function was applied for that object.

Memory flow:
![](images/img4.png?raw=true)

## This keyword and scoping issue

What if we want to organize our code inside one of our shared functions - perhaps by defining a new inner function, This technique is useful when we have a large amount of code in a single function and need to divide it into smaller parts.

```
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}
UserCreator.prototype.increment = function () {
  function add1() {
    this.score++;
  }
  // const add1 = function(){this.score++;}
  add1();
};
UserCreator.prototype.login = function () {
  console.log("login");
};
const user1 = new UserCreator("Eva", 9);
user1.increment();
console.log(user1.score); // 9

```

In this case, we try to increment the score by 1 inside the `add1()` inner function, But it seems that doesn't work!
As we saw above the `this` points to the object who calls the function, but we don't call `add1()` by any object, user1 is calling only increment not its inner functions, => so by using the `this` inside `add1()` function will refer to the `global/window` object. where it doesn't find any `score` property and we got `score = 9` as it is.

memory flow:

![](images/img5.png?raw=true)

## Solve the problem with the Arrow function

```
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}
UserCreator.prototype.increment = function () {
  const add1 = () => {
    this.score++;
  };

  add1();
};
UserCreator.prototype.login = function () {
  console.log("login");
};
const user1 = new UserCreator("Eva", 9);
user1.increment();
console.log(user1.score); // 10
```

To solve the problem above we turn the `add1()` function into an arrow function.
Arrow functions don't have their own bindings to `this`, instead it binds `this` lexically. => lexical static scoping means: where I was born determines where I get called, in this case, `add1()` born in `increment` where `this` refers to `user1`.

![](images/img6.png?raw=true)

## Class Keyword

We’re writing our shared methods separately from our object ‘constructor’ itself (off in the `User.prototype` object) Other languages let us do this all in one place.
ES2015 lets us do so too.

The class `syntactic sugar` :

```
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("login");
  }
}
const user1 = new UserCreator("Eva", 9);
user1.increment(); // 10

```

The class lets us bundle constructors and methods in one place.
Javascript (ES06) allows us to rename function object combo with a prototype property to a `class`. and JavaScript will take care of putting them in prototype objects. That's why we call `class` syntactic sugar because javascript masks the truth of using the prototype under the hood when it comes to `OOP` it's just a prototype under the hood to make our life easier.

![](images/img7.png?raw=true)

When we call `const user1 = new UserCreator("Eva", 9);` javascript engine calls `constructor` first, then looks through methods in the class and attaches them to the `prototype` object like in solution 3. => the two solutions are absolutely identical under the hood.
