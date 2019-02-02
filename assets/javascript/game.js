
var movieTitles= ["one", "two", "tree"];

var empty = [];
var gameCount = 9;
var win = 0;
var losses = 0;
var guesses = 0;

// Crete function that writes how many gusses left to the html 

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