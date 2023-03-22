const operatorButton = document.querySelectorAll('.operator-button')
const numberButton = document.querySelectorAll('.number-button')
const deleteButton = document.querySelector('.delete-button')
const deleteAllButton = document.querySelector('.delete-all')
const equalsButton = document.querySelector('.equals')
const displayDiv = document.querySelector('.result')
const lastNumbers = document.querySelector('.last-digits')

let firstNumber = ''
let secondNumber = ''
let operator = null

deleteAllButton.addEventListener('click', resetAll())

numberButton.forEach((button) =>
    button.addEventListener('click', () => pressNumber(button.textContent))
)

operatorButton.forEach((button) =>
    button.addEventListener('click', () => pressOperation(button.textContent))
)

equalsButton.addEventListener('click', doOperation())
deleteButton.addEventListener('click', deleteButtonFunction())

function deleteButtonFunction(string){
    string.slice(string.length-1);
}
function resetAll() {
    displayDiv.textContent = '0'
    lastNumbers.textContent = ''
    firstNumber = ''
    secondNumber = ''
    operator = null
}

function resetScreen() {
    displayDiv.innerHTML = ''
}

function pressNumber(number) {
    if (displayDiv.textContent === '0') {
        resetScreen()
    }
    display = number;
    displayDiv.textContent += display
}

function pressOperation(operation) {
    if (operator === null) {
        firstNumber = displayDiv.textContent
        operator = operation
        lastNumbers.textContent = firstNumber+"" + operator
        resetScreen()
    }
    else if (operator != null) {
        doOperation()
    }
}

function doOperation() {
    if(operation===null){
        return;
    }
    secondNumber = displayDiv.textContent
    displayDiv.textContent= operate(operation, firstNumber, secondNumber)
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b)
        case '-': return subtract(a, b)
        case '*': return multiply(a, b)
        case '/': {
            if (b === 0) {
                return;
            }
            else {
                return divide(a, b)
            }
        }
    }
}