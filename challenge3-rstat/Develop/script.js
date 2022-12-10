// Assignment Code
var characterLength = 8; //Firstly i made a variable with minimum character length which is 8 and variable characterLength
var choiceArr = [];//2)I made an empty arrary for outputs, of user's choices
var specialCharArr = ['!','"','#','$','%','&','*','(',')','+','-',',','.','/',':',';','<','>','=','?','@','[',']','{','}','@','^','_','`','~','|'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//3) I made 4 arrays with special characters, lower case, upper case and numers to concatenate with empty choicerArr array
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
