# Subclassing with new and call

We will use same scenario as before (normal and paid user).

**Subclassing in our earlier solution 2**:

create normal user:

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

for normal its strait forward as before, but the problem will occur when want to scale solution to create subclass.

**creating a paid user**:

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

Let's explain the first part of creating paid user:

```
function PaidUserCreator(name, score, balance) {
  UserCreator.call(this, name, score);
  this.balance = balance;
}
```

To create `paidUser` we need to use `UserCreator` constructor function because paidUser is normal user with extra functionality, but there is a problem `UserCreator` require `new` keyword to work and `new` will create an new object inside `UserCreator` constructor, so we don't gonna use `new`, but we will use `UserCreator` independent of it.

In this scenario `call` and `apply` come in handy, in this example we use `UserCreator.call(this, name, score)` => by `call` we pass the `this` that created by `PaidUserCreator` in `UserCreator` for creating a `PaidUser` => we override the auto created object by `new` using `call` method and make explicitly refer to `this` created by `PaidUserCreator` object. => we don't only change the reference of auto created object but also we assign the `name` and `score` to it inside `UserCreator`. then we add balance to that object so we get our `PaidUser` object from `PaidUserCreator`.

> [!NOTE]  
> The `apply` method can the same job as `call`.

**Next step**:
`PaidUserCreator.prototype = Object.create(UserCreator.prototype);`: We **override PaidUserCreator** using `Object.create` to reefrence bound to `UserCreator` object, so the paid users have access to normal user methods and properties.

**The final step**:

```
PaidUserCreator.prototype.incrementBalance = function () {
  this.balance++;
};
```

=> Now we add `incrementBalance` method `PaidUserCreator` prototype, to make sure only that only the users created by `PaidUserCreator` can use this method.

Memory flow:

![](images/img10.png?raw=true)
