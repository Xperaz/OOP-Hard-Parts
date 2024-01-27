
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

