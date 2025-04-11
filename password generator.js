const pwEl = document.getElementById('pw');
const copyBtn = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateBtn = document.getElementById('generate');
const emojiesEl= document.getElementById('emojies')

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=<>?/{}[]";
const emojies= "😊😂🤣❤️😍👍😁💕😘👌😒🤦‍♀️👊🤘🤙🤏"

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function getemojies(){
  return emojies[Math.floor(Math.random()* emojies.length)];
}

function generateX() {
  const xs = [];
  if (upperEl.checked) xs.push(getUppercase());
  if (lowerEl.checked) xs.push(getLowercase());
  if (numberEl.checked) xs.push(getNumber());
  if (symbolEl.checked) xs.push(getSymbol());
  if (emojiesEl.checked) xs.push(getemojies());

  if (xs.length === 0) return '';
  return xs[Math.floor(Math.random() * xs.length)];
}

function generatePassword() {
  const len = parseInt(lenEl.value);
  let password = "";

  for (let i = 0; i < len; i++) {
    password += generateX();
  }

  pwEl.innerText = password || "Select at least one option!";
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  const password = pwEl.innerText;
  if (!password || password === "Select at least one option!") return;

  navigator.clipboard.writeText(password).then(() => {
    alert("Password copied to clipboard!");
  }).catch(() => {
    alert("Failed to copy password.");
  });
});




