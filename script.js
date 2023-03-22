const operatorButton= document.querySelector('.operator-button');
const numberButton= document.querySelector('.number-button');
const deleteButton= document.querySelector('.delete-button');
const deleteAllButton= document.querySelector('.delete-all');
const equalsButton= document.querySelector('.equals');
const display=document.querySelector('.result');
const lastNumbers=document.querySelector('.last-digits')


let firstNumber = '';
let secondNumber = '';
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b)
        case '-': return subtract(a, b)
        case '*': return multiply(a, b)
        case '/': return divide(a, b)
    }
}