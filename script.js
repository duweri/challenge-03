// Assignment code here
choiceArray = []
var passwordlength = 8;
var lowercase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["!", "?", "#", "$", "£", "%", "&", "*", ")", "(", "+", "=", ".", ",", "-", ";", ":", "/", ">", "<", "@", "[", "]", "_", "|", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = getPrompts(); //returns true or false
  var passwordText = document.querySelector("#password");
 
  if (correctPrompts) {
   var passwordNew = generatePassword();
   passwordText.value = passwordNew;
  }
 }

 // Write password to the #password input

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordlength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomLetter];

  }
  return password;
}
 

function getPrompts() {
  choiceArray = [];
  passwordlength = parseInt(prompt("How many characters in your password? (8-128 characters)", "enter number"));
  if (isNaN(passwordlength) || passwordlength<8 || passwordlength>128) {
    alert("Character length has to be between 8-128. Please try again");
    return false;
  }

 if (confirm("Do you want lowercase letters in your password?")) {
  choiceArray = choiceArray.concat(lowercase);
 }
 
 if (confirm("Do you want uppercase letters in your password?")) {
  choiceArray = choiceArray.concat(uppercase);
 }
 
 if (confirm("Do you want numbers in your password?")) {
  choiceArray = choiceArray.concat(numbers);
 }
 
 if (confirm("Do you want special characters in your password?")) {
  choiceArray = choiceArray.concat(specialChar);
 }
 return true;
}






/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */


// Password generator

// Create variables to store all options

// 1/ Ask what length of password
   // use prompt to get password length 
  // check to make sure number is between 8-128 (if statement)

// 2/ Do you want special characters?
   // use confirm

// 3/ Do you want numbers?
   // use confirm

// 4/ Do you want uppercase letters?
   // use confirm

// 5/ Do you want lowercase letters?
   // use confirm

// 6/ Generate password
   // Collect all users responses and create array that holds users preferences
   // look into Maths.random to randomise selection
   // loop to select random character from the array (loop as many times how long the password is)

// 7/ Display it on html provided