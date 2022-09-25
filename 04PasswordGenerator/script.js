const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const popup = document.querySelector(".popup");
let alphabets = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbols = "!@#$%^&*()_-+={[}]|:;\"'<,>.?";

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
        navigator.clipboard.writeText(resultEl.innerText);
        if (resultEl.innerText.length > 0) {
            popup.hidden = false;
            setTimeout(() => {
                popup.hidden = true;
            }, 3000);
        }
});

function closeAlert() {
    popup.style.display='none';
}

generateEl.addEventListener('click', () => {
   generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol, lengthEl.value); 
})

function generatePassword(lower, upper, number, symbol, length) {
    const generatedPassword = [];
    if (length >= 5 && length <=20) {
            for (let i = 0; i < length; i++) {
                generatedPassword.push(lower(), upper(), number(), symbol()); 
            }
            const password = generatedPassword.join('').slice(0, length);
            resultEl.textContent = password;
    }
    else if (length < 5) {
        resultEl.textContent = "Enter value 5 or bigger";
    } else {
        resultEl.textContent = "Enter value 20 or smaller";
    } 
}


function getRandomLower() {
if (lowercaseEl.checked) {
    const ramdomAlphabetLowerChar = alphabets[Math.floor(Math.random()*alphabets.length)].toLowerCase();
return ramdomAlphabetLowerChar;
}
}

function getRandomUpper() {
if (uppercaseEl.checked) {
    const randomAlphabetUpperChar = alphabets[Math.floor(Math.random()*alphabets.length)].toUpperCase();
    return randomAlphabetUpperChar;
}
}

function getRandomNumber() {
    if (numbersEl.checked) {
        const randomNumber = number[Math.floor(Math.random()*number.length)];
        return randomNumber;
    }
}

function getRandomSymbol() {
    if (symbolsEl.checked) {
        const randomSymbols = symbols[Math.floor(Math.random()*symbols.length)];
        return randomSymbols;
    }
}