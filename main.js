const user1 = {
    name: "Phil",
    score: 4,
    increment: function() {
    user1.score++;
    }
    };

const user3 = Object.create(user1);
    // user3.name = "Eva";
    // user3.score = 9;
    // user3.increment = function() {
    // user3.score++;
    // };

    console.log(user3);