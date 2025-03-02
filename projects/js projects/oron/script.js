// ------css-part-------------------------
const divDad =document.getElementById('gameInCenter');




divDad.style.backgroundColor="green";
divDad.style.textAlign="center";




// ------js-part-------------------------
const select = document.querySelector("select");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");

console.log(select);

// function updateOption() {
//   console.log(select.value);
// }

select.addEventListener("change", () => {
  console.log(select.value); // קל בינוני קשה
  switch (select.value) {
    case "קל":
      getEasyLevelNumbers();
      break;
    case "בינוני":
      getMediumLevelNumbers();
      break;
    case "קשה":
      getHardLevelNumbers();
      break;
    default:
      "קל";
  }
});

const getEasyLevelNumbers = () => {
  number1.innerText = generateRandomNumber(1, 10);
  number2.innerText = generateRandomNumber(1, 10);
};

function getMediumLevelNumbers() {
  number1.innerText = generateRandomNumber(10, 100);
  number2.innerText = generateRandomNumber(10, 100);
}

function getHardLevelNumbers() {
  number1.innerText = generateRandomNumber(100, 1000);
  number2.innerText = generateRandomNumber(100, 1000);
}

// number1.innerText = Math.ceil(Math.random() * 10);
// number2.innerText = Math.ceil(Math.random() * 10);

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(10, 100));
console.log(generateRandomNumber(100, 1000));

function checkAnswer() {
  console.log(result.value);

  if (
    Number(number1.innerText) + Number(number2.textContent) ===
    Number(result.value)
  ) {
    console.log("true");
  } else {
    console.log("try again...");
  }
}


