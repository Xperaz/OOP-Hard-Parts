const user1 = {
  name: "Phil",
  score: 4,
  // increment functionality to increase the score
  increment: function () {
    user1.score++;
  },
};

console.log(user1); // { name: 'Phil', score: 4, increment: [Function: increment] }
