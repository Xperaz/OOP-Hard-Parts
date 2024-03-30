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

When we call `user1.jump(10)` automatically as soon as that function gets called, its execution context opens, the `this` will point the object who call this function (user1). so the function got applied for that object.

Memory flow:
![](images/img4.png?raw=true)

## This keyword and scoping issue

What if we want to organize our code inside one of our shared functions - perhaps by defining a new inner function

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

In this case we try to increment score by 1 inside inner `add1()` inner function, But it seem that doesn't work!.
As we saw above the ``this` point to object who call the function, but we don't call `add1()` by any object, user1 is calling only increment not its inner functions, => so by the `this` inside `add1()` function will refer to the `global/window` object. where it doesn't find any `score` property and we got `score = 9` as it is.

memory flow:

![](images/img5.png?raw=true)

## Solve the problem with Arrow function

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

To solve the problem above we turn `add1()` function into an arrow function.
Arrow functions don't have their own bindings to `this`, instead it binds `this` lexically. => lexical static scoping means: where I was born determines where i get called, in this case `add1()` born in `increment` where `this` refer to `user1`.

![](images/img6.png?raw=true)
