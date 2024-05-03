# Subclassing with new and call

We will use the same scenario as before (normal and paid user).

**create a normal user:**

```
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.sayName = function () {
  console.log("Hi", this.name);
};

UserCreator.prototype.incrementScore = function () {
  this.score++;
};

const user1 = new UserCreator("azedine", 10);
user1.sayName(); // Hi azedine
user1.incrementScore();
console.log(user1); // { name: 'azedine', score: 11 }
```

We will see how tough this solution would be, Even if it appears functional in small use cases.

## Create PaidUser Subclass using our earlier solution 2

```
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.sayName = function () {
  console.log("Hi", this.name);
};

UserCreator.prototype.incrementScore = function () {
  this.score++;
};

// creating a Paid user

function PaidUserCreator(name, score, balance) {
  UserCreator.call(this, name, score);
  this.balance = balance;
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype);

PaidUserCreator.prototype.incrementBalance = function () {
  this.balance++;
};


const paidUser = new PaidUserCreator("xperaz", 20, 150);
paidUser.sayName(); // Hi xperaz
paidUser.incrementScore();

console.log(paidUser); // { name: 'xperaz', score: 21, balance: 150 }
```

Let's explain the first part of creating a paid user:

```
function PaidUserCreator(name, score, balance) {
  UserCreator.call(this, name, score);
  this.balance = balance;
}
```

To create a `paidUser`, we need to utilize the `UserCreator` constructor function. This is because a `paidUser` is essentially a regular user with additional functionality. However, there is a problem using `UserCreator` because it requires using the `new` keyword, which creates a new object within the `UserCreator` constructor. Therefore, we cannot use `new`, but we can still utilize `UserCreator` independently from it.

In this scenario, the `call` and `apply` methods come in handy. In the given example, we use `UserCreator.call(this, name, score)` to create a `PaidUser`. By using the `call` method, we pass the `this` object created by `PaidUserCreator` to `UserCreator`. This allows us to override the auto-created object using the `new` keyword and explicitly refer to the `this` object created by `PaidUserCreator`. We not only change the reference of the auto-created object, but we also assign the `name` and `score` to it inside `UserCreator`. Then, we add balance to that object to get our `PaidUser` object from `PaidUserCreator`.

<br/>

> [!NOTE]  
> The `apply` method can do the same job as `call`.

**Next step:**

- `PaidUserCreator.prototype = Object.create(UserCreator.prototype);`: first we create a new object that inherits from the `UserCreator.prototype` object using `Object.create(UserCreator.prototype)`. then we set the prototype of `PaidUserCreator` to be this new object. so the paid users have access to normal user methods and properties.

- `PaidUserCreator.prototype.incrementBalance` is a method added to the `PaidUserCreator`’s prototype. It’s only available on objects created with `new PaidUserCreator`.

**Finally**
- A new `PaidUserCreator` object is created with `name: xperaz`, `score: 20`, and `balance: 150`. The `incrementScore` method is called on this object, increasing its score by 1.
- The automation of `new` makes it a little bit difficult, but the solution works well.
  
Memory flow:

![](images/img10.png?raw=true)
