// Assignment Code
const generateBtn = document.querySelector("#generate");
let passwordLength;
let includeLower;
let includeUpper;
let includeNumber;
let includeSpecial;
let userChoices;
//sequence for low case 
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n", "o", "p", "q", "r","s", "t","u", "v", "w", "x", "y", "z",];
// const To Upper Case
const blackUpper = [];
const toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//  const the numbers and all the special keys on the number row
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = "~!@#$%^&*?";

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Start Function
function generatePassword() {
  // prompt for password length
  passwordLength = prompt(
    "How many characters would you like your password? Choose between 8 and 128"
  );
  //prompt for what they want
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = alert("That wasn't a choice???");
  } else {
    includeLower = confirm("Include lower case letters?");
    includeUpper = confirm("Include upper case letters?");
    includeNumber = confirm("Include numbers?");
    includeSpecial = confirm("Include special characters?");
  }
  //assuming they picked everything
  if (includeLower && includeUpper && includeNumber && includeSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
  }
  // assuming that they picked three
  else if (includeLower && includeUpper && includeNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
  } else if (includeLower && includeUpper && includeSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
  } else if (includeLower && includeNumber && includeSpecial) {
    userChoices = lowerCase.concat(numbers, special);
  } else if (includeUpper && includeNumber && includeSpecial) {
    userChoices = upperCase.concat(numbers, special);
  }
  // assuming that they picked two 
  else if (includeLower && includeUpper) {
    userChoices = lowerCase.concat(upperCase);
  } else if (includeLower && includeNumber) {
    userChoices = lowerCase.concat(numbers);
  } else if (includeLower && includeSpecial) {
    userChoices = lowerCase.concat(special);
  } else if (includeUpper && includeNumber) {
    userChoices = upperCase.concat(numbers);
  } else if (includeUpper && includeSpecial) {
    userChoices = upperCase.concat(special);
  } else if (includeNumber && includeSpecial) {
    userChoices = numbers.concat(special);
  }
  // if they wanted a simple password
  else if (includeLower) {
    userChoices = lowerCase;
  } else if (includeUpper) {
    userChoices = blankUpper.concat(upperCase);
  } else if (includeNumber) {
    userChoices = numbers;
  } else if (includeSpecial) {
    userChoices = special;
  }
  const passwordBlank = [];
  // go through a loops for every decision
  for (var i = 0; i < passwordLength; i++) {
    var allChoices =
      userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
  }
  // join all and eliminate any spaces
  var password = passwordBlank.join("");
  var password = password.replace(" ", "");
  console.log(password.length);
  return password;
}