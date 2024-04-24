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

PaidUserCreator.prototype.incrementBalance = function () {
  this.balance++;
};

PaidUserCreator.prototype = Object.create(UserCreator.prototype);

const paidUser = new PaidUserCreator("xperaz", 20, 150);
paidUser.sayName(); // Hi xperaz
paidUser.incrementScore();

console.log(paidUser); // { name: 'xperaz', score: 21, balance: 150 }
