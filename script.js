const operatorButton = document.querySelectorAll('.operator-button')
const numberButton = document.querySelectorAll('.number-button')
const deleteButton = document.querySelector('.delete-button')
const deleteAllButton = document.querySelector('.delete-all')
const equalsButton = document.querySelector('.equals')
const displayDiv = document.querySelector('.result')
const lastNumbers = document.querySelector('.last-digits')
const pointButton = document.querySelector('.point-button')


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

window.addEventListener('keydown', pressKey)
equalsButton.addEventListener('click', doOperation)
deleteAllButton.addEventListener('click', clearAll)
deleteButton.addEventListener('click', deleteLast)
pointButton.addEventListener('click', useComma)

function reset() {
    displayDiv.textContent = ''
    resetScreen = false
}

function clearAll() {
    displayDiv.textContent = '0'
    lastNumbers.textContent = ''
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
    lastNumbers.textContent = `${firstNumber}${operator}`
}

function deleteLast() {
    displayDiv.textContent = displayDiv.textContent.toString().slice(0, -1)
}

function useComma() {
    if (resetScreen) reset()
    if (displayDiv.textContent === '') displayDiv.textContent = '0'
    if (displayDiv.textContent.includes('.')) return
    displayDiv.textContent += '.'
}

function doOperation() {
    if (resetScreen || operator === null) return
    secondNumber = displayDiv.textContent
    displayDiv.textContent = Math.round(operate(operator, firstNumber, secondNumber) * 1000) / 1000
    lastNumbers.textContent = `${firstNumber}${operator}${secondNumber}`
    operator = null
}

function pressKey(e){
    if(e.key>=0&&e.key<=9) pressNum(e.key)
    if(e.key=='.') useComma()
    if(e.key=='/') pressOperator('÷')
    if(e.key=='*') pressOperator('×')
    if(e.key=='+') pressOperator('+')
    if(e.key=='-') pressOperator('–')
    if(e.key=='backspace') deleteLast()
    if(e.key=='escape') deleteAllButton()
    if(e.key=='='||e.key=='Enter') doOperation()
}

function add(a, b) {
    return Number(a) + Number(b)
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
        case '–': return subtract(a, b)
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