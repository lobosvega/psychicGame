
//Grab reference from DOM Elements


// Create variables for game


//Create NewGame function to reset, pick word and creat placeholders

//LetterGuess function, takes in the letter you pressed and sees if its in the selected word

//CheckIncorrect

//CheckLose

//CheckWin


// Crete function that writes how many gusses left to the html 

//

var movieTitles= ["one", "two", "tree"];

// create function that picks a word be gussed 
movieTitles[Math.floor(Math.random() * movieTitles.length)];
 
// create function that resets the game 
var reset = function(){
    console.log("reset");
}

// check the letter

document.onkeydown = function(event){
// 



}

var i = 0, strLength = movieTitles[0].length;

 var random;

for(i; i < strLength; i++) {

    random = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    
 random = random.replace(" ","_");
 console.log(random);
 


 // if statement saying what happens if gameCount = 0; 
 if (gameCount === 0){
     reset();
}