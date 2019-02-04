
//Grab reference from DOM Elements ($element)

var $newGameButton = document.getElementById("new-game-btn");
var $placeholders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $newGameButton = document.getElementById("wins");
var $newGameButton = document.getElementById("losses");

// Create variables for game

var wordBank = ["pittura infamante","upside-down", "self-sacrifice", "traitor", "punishment", "Odin", "Judas",
"execution", "gallow", "st peter", "Tau cross", "fylfot cross", "nimbus", "martyr"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var IncorrectLetterBank = [];


//Create NewGame function to reset

function NewGame () {

    gameRunning = true;
    guessesLeft = 9;
    guessedLetterBank = [];
    IncorrectLetterBank = [];
    pickedWordPlaceholderArr = [];

//pick new word

    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//create place holder out of the new pick word

    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === " ") {
            pickedWordPlaceholderArr.push(' ');
        } else {
            pickedWordPlaceholderArr.push('_');
        }
    }

//write all new info to DOM

    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedWordPlaceholderArr.join("");
    $guessedLetters.textContent = IncorrectLetterBank;
}
//LetterGuess function, takes in the letter you pressed and sees if its in the selected word

function LetterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {

        //run game logic
        guessedLetterBank.push(letter);

        //check if guessed letter is in my picked word
        for (var i = 0; i < pickedWord.length; i++) {

            //conver both calues to lower case so i can compare them correctly
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                //if a match , swap out that character in the placeholder with the actual letter
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }

    }

    $placeholders.textContent = pickedWordPlaceholderArr.join("");
    //pass letter into our checkIncorrect function
    CheckIncorrect(letter);

}

//CheckIncorrect

function CheckIncorrect(letter) {
    if (
    pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 &&
    pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1)   {
    //decrement guesses
    guessesLeft--;
    //add incorrect letter to incorrectLetterBank
    IncorrectLetterBank.push(letter);
    //write new bank of incorrect letters guessed to Dom
    $guessedLetters.textContent = IncorrectLetterBank.join('');
    //Write new amount of guesses left to 
    $guessesLeft.textContent = guessesLeft;
    }
    CheckLoss();
}

//CheckLoss

function CheckLoss(); {
    if (guessesLeft ===0) {
        losses++;
        gameRunning = false;
        $losses.textContent = losses;
    }
    CheckWin();d
}

//CheckWin

function CheckWin() {
    if (pickedWord.toLocaleLowerCase() === pickedWordPlaceholderArr.join("").toLowerCase())
    {
        wins++;
        gameRunning = false;
        $wins.textContent = wins;
    }
}

//add event listener for new game button

$newGameButton.addEventListener("click", NewGame);


//add onkeyup avent to trigger LetterGuess

document.onkeyup = function (event) {
    if (event.keyCode >=65 && event.keyCode <= 90) {
        LetterGuess(event.key);

    }
}


// Crete function that writes how many gusses left to the html 

//

// create function that resets the game 

