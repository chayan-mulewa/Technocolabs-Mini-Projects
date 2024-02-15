//  Create a variable named userName

let userName = "Chayan Mulewa";

// Ternary expression to decide the greeting based on whether the user entered a name or not

userName !== "" ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Create a variable named userQuestion

let userQuestion = "What is my future?";

// Log the user's question

console.log(`${userName !== "" ? userName + " asks" : "Someone asks"}: ${userQuestion}`);

// Create a variable named randomNumber and generate a random number between 0 and 7

let randomNumber = Math.floor(Math.random() * 8);

// Create a variable named eightBall and set it to an empty string

let eightBall = "";

// Control flow to assign a Magic Eight Ball reply based on the randomNumber

if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else {
    eightBall = 'Signs point to yes';
}

// Log the Magic Eight Ball's answer
console.log(`Magic Eight Ball says: ${eightBall}`);
