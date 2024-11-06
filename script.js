var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter A Number Between 1 to 100");
    }
    else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1
        if (user_guess < answer) {
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed number are: " + guessed_nums;
        }
        else if (user_guess > answer) {
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No. of guesses:" + no_of_guesses;
            msg3.textContent = "Guessed number are:" + guessed_nums;
        }
        else if (user_guess == answer) {
            msg1.textContent = "Yippie You Win!!";
            msg2.textContent = "The Number Was:" + answer;
            msg3.textContent = "You Guessed it in:" + no_of_guesses + " Guesses";

            document.getElementById("my_btn").disabled = true;
            fireworkEffect()
        }
    }
}





function fireworkEffect() {
    const numSparks = 70; // Number of sparks per firework
    const colors = ["#ff4c4c", "#ffcc00", "#66ff66", "#66ccff", "#ff99cc"]; // Array of colors for variety

    for (let i = 0; i < numSparks; i++) {
        const spark = document.createElement("div");
        spark.classList.add("firework");
        document.body.appendChild(spark);

        // Randomize spark color
        const color = colors[Math.floor(Math.random() * colors.length)];
        spark.style.backgroundColor = color;

        // Randomize position within the viewport
        spark.style.left = Math.random() * window.innerWidth + "px";
        spark.style.top = Math.random() * window.innerHeight + "px";

        // Randomize size for each spark
        const size = Math.random() * 12 + 5; // Size between 5px and 17px
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;

        // Remove the spark after animation
        setTimeout(() => {
            spark.remove();
        }, 1200); // Match the CSS animation duration
    }
}