//Arrays for random selection. 
//Due to numbers being a smaller array, It's been duplicated for a better chance of hitting when lower password lengths are chosen  
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";",
	"<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Link the html button id 
var generateBtn = document.querySelector("#generate");

//All in one function for prompts, validation, and random password generator. 
function generatePassword() {
	//Ask the user for a password length 
	var passLength = prompt(
		"How may characters long do you want your password to be? (Between 8 and 128)"
		);
	if (!passLength) {
		alert("Character length is required, please try again ");
		return;
	} else if (passLength < 8 || passLength > 128) {
		alert("Please enter in a vale between 8 and 128");
		generatePassword();
	} else {
		//Ask the user for what options they would like to have
		lowerCase = confirm( "Would you like your password to include lowercase letters?");
		upperCase = confirm("Would you like your password to include any uppercase letters?");
		numbers = confirm("Would you like your password to include numbers?");
		specChar = confirm("Would you like special characters?");
		//Validate the user's options and generate a password based on those options. 
		
		//If no options are chosen restart the function.
		if (!lowerCase && !upperCase && !numbers && !specChar) {
			alert("Please select at least one option.");
			generatePassword();
		}
		//4 Options
		else if (lowerCase && upperCase && numbers && specChar) {
			userOptions = char.concat(charUpper, number, specialChar );
		}
		//3 Options
		else if (lowerCase && upperCase && numbers) {
			userOptions = char.concat(charUpper, number);
		}
		else if (lowerCase && upperCase && specChar) {
			userOptions = char.concat(charUpper, specialChar);
		}
		else if (lowerCase && numbers && specChar) {
			userOptions = char.concat(number, specialChar);
		}
		else if (upperCase && numbers && specChar) {
			userOptions = charUpper.concat(number, specialChar);
		}
		//2 Options
		else if (lowerCase && upperCase) {
			userOptions = char.concat(charUpper);
		}
		else if (lowerCase && numbers) {
			userOptions = char.concat(number);
		}
		else if (lowerCase && specChar) {
			userOptions = char.concat(specialChar);
		}
		else if (upperCase && numbers) {
			userOptions = charUpper.concat(number);
		}
		else if (upperCase && specChar) {
			userOptions = charUpper.concat(specialChar);
		}
		else if (numbers && specChar) {
			userOptions = number.concat(specialChar);
		}
		//1 Option
		else if (numbers) {
			userOptions = number;
		}
		else if (specChar) {
			userOptions = specialChar;
		}
		else if (lowerCase) {
			userOptions = char;
		}
		else if (upperCase) {
			userOptions = charUpper;
		}
	}
	//Using random selections from the joined arrays, join them together to make a password.   
	var passArray = [];
	for (var i = 0; i < passLength; i++) {
	  genPass = userOptions[Math.floor(Math.random() * userOptions.length)];
		passArray.push(genPass);
	}
	var password = passArray.join('');
return password;
};

//Display the password to the user. 
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
