//Arrays for random selection. 
//Due to numbers being a smaller array, It's been duplicated for a better chance of hitting when lower password lengths are chosen  
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";",
	"<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Link the html button id 
var generateBtn = document.querySelector("#generate");

//Global variables for the functions to utilize 
var passLength = 0;
var userOptions = [];
var password = [];

function promptUser() {
	//Ask the user for a password length 
	passLength = prompt(
		"How may characters long do you want your password to be? (Between 8 and 128)"
		);
	if (!passLength) {
		alert("Character length is required, please try again ");
	} else if (passLength < 8 || passLength > 128) {
		alert("Please enter in a vale between 8 and 128");
		promptUser();
	} else {
		//Ask the user for what options they would like to have
		lowerCase = confirm( "Would you like your password to include lowercase letters?");
		upperCase = confirm("Would you like your password to include any uppercase letters?");
		numbers = confirm("Would you like your password to include numbers?");
		specChar = confirm("Would you like special characters?");
		
		//If no options are chosen restart the function.
		if (!lowerCase && !upperCase && !numbers && !specChar) {
			alert("Please select at least one option.");
			promptUser();
		} else {
			validateData();
		}
	}
};

//Validate the user's options and 
function validateData() {
	//Clear the array if ran more than once. 
	userOptions =[];
	//If the option exists add it to the array
	if(lowerCase){
		userOptions = userOptions.concat(char);
	}
	if(upperCase){
		userOptions = userOptions.concat(charUpper);
	}
	if(numbers){
		userOptions = userOptions.concat(number);
	}
	if(specChar){
		userOptions = userOptions.concat(specialChar);
	}
	generatePassword();
};

//Generate a password based on those options. 
function generatePassword() {
	//Using random selections from the joined arrays, join them together to make a password.   
	var passArray = [];
	for (var i = 0; i < passLength; i++) {
		genPass = userOptions[Math.floor(Math.random() * userOptions.length)];
		passArray.push(genPass);
	}
	password = passArray.join('');
	writePassword();
};

//Display the password to the user. 
function writePassword() {
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);
