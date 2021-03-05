var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";",
	"<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function charCap (x) {
	return x.toUpperCase();
};
var charUpper = char.map(charCap);

// console.log(char);
// console.log(charUpper);

var numbers;
var specChar;
var lowerCase;
var upperCase;
var userOptions;

var generateBtn = document.querySelector("#generate");

function generatePassword() {
	var passLength = prompt("How may characters long do you want your password to be?");
	if (!passLength) {
		alert("Please Enter a value.");
		writePassword();
	} else if (passLength < 8 || passLength > 128) {
		alert("Please enter in a vale between 8 and 128");
		writePassword();
	} else {
			// console.log(passLength);
			numbers = confirm("Would you like your password to include numbers?");
			specChar = confirm("Would you like special characters?");
			lowerCase = confirm( "Would you like your password to include lowercase letters?");
			upperCase = confirm("Would you like your password to include any uppercase letters?");

		//Validation
		if (!numbers && !specChar && !lowerCase && ! upperCase) {
			alert("Please select at least one option.");
			writePassword();
		}
		else if (numbers && specChar && lowerCase && upperCase) {
			userOptions = number.concat(specialChar, char, charUpper);
		}
		else if (numbers && specChar && lowerCase ) {
			userOptions = number.concat(specialChar, char);
		}
		else if (numbers && lowerCase && upperCase ) {
			userOptions = number.concat(char, charUpper);
		}
		else if (specChar && lowerCase && upperCase ) {
			userOptions = specialChar.concat(char, charUpper);
		}
		else if (numbers && specChar ) {
			userOptions = number.concat(specialChar);
		}
		else if (numbers && lowerCase ) {
			userOptions = number.concat(char);
		}
		else if (numbers && upperCase ) {
			userOptions = number.concat(charUpper);
		}
		else if (specChar && lowerCase ) {
			userOptions = specialChar.concat(char);
		}
		else if (specChar && upperCase ) {
			userOptions = specialChar.concat(charUpper);
		}
		else if (lowerCase && upperCase ) {
			userOptions = char.concat(charUpper);
		}
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
		console.log(userOptions);
	}
	var passArray = [];
	for (var i = 0; i < passLength; i++) {
	  genPass = userOptions[Math.floor(Math.random() * userOptions.length)];
		passArray.push(genPass);
	}
	var password = passArray.join('');
	console.log(password.length);
	console.log(password);
return password;
};

function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
