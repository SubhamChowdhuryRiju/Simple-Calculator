let currentNumber = '0';
let firstNumber = null;
let operator = null;
const display = document.getElementById("display");

function updateDisplay() {
  display.value = currentNumber;
}

function addNumber(num){
    if (currentNumber === '0' && num !== '.') {
        currentNumber = num;
    } else {
        if (num === '.' && currentNumber.includes('.')) return;
        currentNumber += num;
    }
    updateDisplay();
}

function appendOperator(op){
    if (operator !== null) calculate();

    firstNumber = currentNumber;
    operator = op;
    currentNumber = '0';
}

function calculate(){
    if (operator === null || firstNumber === null) return;

    let result;
    const prev = parseFloat(firstNumber);
    const current = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operator = null;
    firstNumber = null;
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '0';
    firstNumber = null;
    operator = null;
    updateDisplay();
}

updateDisplay();