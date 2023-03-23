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
let resetScreen = false

numberButton.forEach((button) => {
    button.addEventListener('click', () => pressNum(button.textContent))
})

operatorButton.forEach((button) => {
    button.addEventListener('click', () => pressOperator(button.textContent))
})

equalsButton.addEventListener('click', doOperation)
deleteAllButton.addEventListener('click', clearAll)
deleteButton.addEventListener('click', deleteLast)

function reset() {
    displayDiv.textContent = ''
    resetScreen = false
}

function clearAll() {
    displayDiv.textContent = '0'
    lastNumbers = '0'
    firstNumber = ''
    secondNumber = ''
    operator = null
}

function pressNum(string) {
    if (displayDiv.textContent === '0' || resetScreen) {
        reset()
    }
    displayDiv.textContent += string
}

function pressOperator(string) {
    if (operator !== null) doOperation()
    resetScreen = true
    firstNumber = displayDiv.textContent
    operator = string
    lastNumbers.textContent = `${firstNumber} ${operator}`
}

function deleteLast() {
    displayDiv.textContent = displayDiv.textContent.toString().slice(0, -1)
}

function doOperation() {
    if (resetScreen || operator === null) return
    secondNumber = displayDiv.textContent
    displayDiv.textContent = Math.floor() operate(operator, firstNumber, secondNumber)
    lastNumbers.textContent = `${firstNumber}${operator}${secondNumber}`
    operator = null
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
        case '×': return multiply(a, b)
        case '÷': {
            if (b === 0) {
                return alert("Diving by 0!");
            }
            else {
                return divide(a, b)
            }
        }
    }
}