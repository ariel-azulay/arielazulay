const buttons = document.querySelectorAll('.btn');
const resultDisplay = document.getElementById('result');

let currentInput = '';
let operator = '';
let firstOperand = null;

// פונקציה ללחיצה על כפתור
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      clearDisplay();
    } else if (value === '=') {
      calculateResult();
    } else if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
    } else {
      appendNumber(value);
    }
  });
});

// פונקציה להוספת מספר לתצוגה
function appendNumber(number) {
  currentInput += number;
  resultDisplay.value = currentInput;
}

// פונקציה להגדרת אופרטור
function setOperator(op) {
  if (currentInput === '') return;
  operator = op;
  firstOperand = parseFloat(currentInput);
  currentInput = '';
}

// פונקציה לחישוב התוצאה
function calculateResult() {
    if (!firstOperand || currentInput === '' || !operator) return;
  
    const secondOperand = parseFloat(currentInput);
    let result;
  
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }
  
    resultDisplay.value = result;
    currentInput = result.toString();
    operator = '';
    firstOperand = null;
  }

// פונקציה לניקוי התצוגה
function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = null;
  resultDisplay.value = '';
}