// Assignment Code
var characterLength = 8; //Firstly i made a variable with minimum character length which is 8 and variable characterLength
var choiceArr = [];//2)I made an empty arrary for outputs, of user's choices
var specialCharArr = ['!','"','#','$','%','&','*','(',')','+','-',',','.','/',':',';','<','>','=','?','@','[',']','{','}','@','^','_','`','~','|'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//3) I made 4 arrays with special characters, lower case, upper case and numers to concatenate with empty choicerArr array
var generateBtn = document.querySelector("#generate");//4) JS chooses id of a button named #generate

// Write password to the #password input
function writePassword() {
 
  var passwordText = document.querySelector("#password");
  var prompts1 = getPrompts(); 
  if(prompts1){//6) I created a function with queryselector id password and variable prompts1 that will pick up prompts from users. Then i aded if prompts1 correct will call a variable password that is assigned to generatePassword  and  value of passwordtext assigned to a password 
    var password = generatePassword();
    passwordText.value = password;
  }
 else {
  passwordText.value = "";//5) it will be blank when false. i added else for passworText.value to make it blank when false. There was a function prepared previously that contained a variable apssword that was assigned to generate a password and the second variable in the function was passwordText that was assigned to pick id password from html that was added in textarea"
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);// it'll hear click of a mouse on the button and will activate writePassword function 
function generatePassword(){ // i created a function generatePassword based on prompts, it is still empty
var password = "";
for(var i = 0; i < characterLength; i++){//6)create iteration that will count up about 1 
var randomIndex = Math.floor(Math.random() * choiceArr.length);//pick a random number and make it integer down and the length of choiceArr empty array to be filled up 
password = password + choiceArr[randomIndex]; 
}  
return password; //it will loop as many time as user wants and return the password 
}
function getPrompts(){//i created a function getPrompts that will be taking prompts 
  choiceArr = []; //calling array to be empty 
characterLength = parseInt(prompt("How many characters do you want in your password?(8-128)"))// i call the variable that is 8 as minimum 
if (isNaN(characterLength) || characterLength<8 || characterLength > 128)
{alert("Try again. 8-128 numbers only");
return false;
}








}




