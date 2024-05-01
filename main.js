class userCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  incrementScore() {
    this.score++;
  }

  sayName() {
    console.log("hello", this.name);
  }
}

// const user1 = new userCreator("azedine", 10);
// user1.sayName();
// user1.incrementScore();
// console.log(user1.name);

// paidUser

class paidUserCreator extends userCreator {
  constructor(paidName, score, accountBalance) {
    super(paidName, score);
    this.accountBalance = accountBalance;
  }

  incrementBalance() {
    this.accountBalance++;
  }
}

const paidUser1 = new paidUserCreator("xperaz", 100, 250);
paidUser1.sayName();
paidUser1.incrementScore();
paidUser1.incrementBalance();

console.log(paidUser1);
