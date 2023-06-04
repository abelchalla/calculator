let num1 = "";
let operator = '';
let num2 = "";
let isNum1 = true;
let isEqual = false;
let isOperator = false
let isDecimal = false

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
    if(b == 0) return "Siri: 'you have no friends'"
    return a / b
}

function operate(operator, num1 , num2) {
    if(operator == '+') return add(num1, num2)
    else if(operator === '-') return subtract(num1, num2)
    else if(operator === '*') return multiply(num1,num2)
    else if(operator === '/') return divide(num1, num2)
}

let mainScreen = document.getElementById('mainScreen')
let backScreen = document.getElementById('backScreen')
const numBut = document.querySelectorAll('.num')
const opBut = document.querySelectorAll('.op')
const equalBut = document.querySelector('.equal')
const decBut = document.getElementById('dec')
numBut.forEach(button => button.addEventListener('click', event => {
    isOperator = false
    isDecimal = false
    if(isEqual) {
        num1 = ''
        mainScreen.innerHTML = ''
        isEqual = false
    }
    if(isNum1){
        num1 += event.target.innerHTML;
        console.log(num1 + " Hi Im num1")
        mainScreen.innerHTML += event.target.innerHTML
    }
    else {
        mainScreen.innerHTML += event.target.innerHTML
        num2 += event.target.innerHTML;
        console.log(num2 + " Hi Im num2")
    }
}))

opBut.forEach(button => button.addEventListener('click', event => {
    if(!isOperator) {
        if (!isNum1) {
            mainScreen.innerHTML = operate(operator, Number(num1), Number(num2))
            num1 = mainScreen.innerHTML
            backScreen.innerHTML = ''
            num2 = ""
        }
        operator = event.target.innerHTML;
        backScreen.innerHTML = mainScreen.innerHTML + " " + operator;
        mainScreen.innerHTML = ""
        isNum1 = false;
        isOperator = true;
        isEqual = false
        isDecimal = false;
    } 
}))

equalBut.addEventListener('click', event => {
    if(mainScreen.innerHTML != '' && num2 != '' ){
        console.log(operator, num1 , num2)
        mainScreen.innerHTML = operate(operator, Number(num1), Number(num2))
        num1 = mainScreen.innerHTML
        console.log(num1)
        backScreen.innerHTML = ''
        num2 = ""
        isNum1 = true;
        isEqual = true;
        isOperator = false;
        isDecimal = false;
    }
} )

decBut.addEventListener('click', event => {
    if(!mainScreen.innerHTML.includes('.'))
    {
        isOperator = false
        if(isEqual) {
            num1 = ''
            mainScreen.innerHTML = ''
            isEqual = false
        }
        if(isNum1){
            num1 += event.target.innerHTML;
            console.log(num1 + " Hi Im num1")
            mainScreen.innerHTML += event.target.innerHTML
        }
        else {
            mainScreen.innerHTML += event.target.innerHTML
            num2 += event.target.innerHTML;
            console.log(num2 + " Hi Im num2")
        }
    }
    isDecimal = true;

})

const clear = document.getElementById('clear')
const remove = document.getElementById('delete')


clear.addEventListener('click', event => {
    num1 = "";
    operator = '';
    num2 = "";
    isNum1 = true;
    isEqual = false;
    isOperator = false
    isDecimal = false
    mainScreen.innerHTML = ''
    backScreen.innerHTML = ''
})


remove.addEventListener('click', event => {
    let newNum = mainScreen.innerHTML.slice(0, mainScreen.innerHTML.length - 1)
   mainScreen.innerHTML = newNum;
   num1 = newNum;
})