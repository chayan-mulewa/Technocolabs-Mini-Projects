const getUserChoice = (userInput)=>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }else {
        console.log("Error: Please choose 'rock', 'paper', or 'scissors'.");
    }
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber===0){
        return "rock";
    }else if(randomNumber===1){
        return "paper";
    }else{
        return "scissors"
    }
}

function determineWinner (userChoice,computerChoice){
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    } 
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    } 
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    }
    if (userChoice === 'bomb') {
        return 'You win!(Cheat Code Activeted)';
    }
}

function playGame(){
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();

    console.log('User Choice: ' + userChoice);
    console.log('Computer Choice: ' + computerChoice);

    if (userChoice === 'bomb') {
        console.log('You win! (Cheat code activated)');
    } else {
        console.log(determineWinner(userChoice, computerChoice));
    }
}

playGame();