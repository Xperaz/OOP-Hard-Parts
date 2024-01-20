const userFuntionStore = {
    increment: function(){
        this.score++;
    },
    decrement: function(){
        this.score--;
    }
}

function createUser(name, score) {
    const newUser = Object.create(userFuntionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const user1 = createUser('azedine', 5);
const user2 = createUser('xperaz', 10);

console.log(user1);
user1.increment();
console.log(user1);
user1.decrement();
console.log(user1);



