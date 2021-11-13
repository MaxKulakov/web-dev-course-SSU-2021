const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function checkPassword(password) {
    var correctPasswordLength;
    if (password.length >= 6 && password.length <= 20) {
        correctPasswordLength = true;
    } 
    else {
        correctPasswordLength = false;
    }

    var alphabetLower = alphabet.substr(26, 26);
    var correctLowerCase;

    var alphabetUpper = alphabet.substr(0, 26);;
    var correctUpperCase;

    var alphabetDigit = alphabet.substr(52, 10);;
    var correctDigit;
   
    password.forEach(word => {
        if (alphabetLower.includes(word)) correctLowerCase = true;
        if (alphabetUpper.includes(word)) correctUpperCase = true;
        if (alphabetDigit.includes(word)) correctDigit = true;
    });

    if (correctPasswordLength == true && correctLowerCase == true && correctUpperCase == true && correctDigit == true) {
        return true;
    }
    return false;
}


function passGen() {
    var passwordLength = getRandomInt(6, 21);
    var password = [];
    for (var i = 0; i < passwordLength; i++) {
        password.push(alphabet[getRandomInt(0, alphabet.length)]);
    }

    if (checkPassword(password)) {
        return password.join('');
    }
    else {
        passGen();
    }
}


function passwordGenerator() {
    var password = passGen();
    if (password == undefined) {
        passwordGenerator();
      }
    else {
        document.getElementsByClassName("results")[0].innerHTML = `${password} <br/>`;
    }
}