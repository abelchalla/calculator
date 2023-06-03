let num1 = "";
let operator = '';
let num2 = "";
let isNum1 = true;

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
    if(b == 0) return "you have no friends"
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
numBut.forEach(button => button.addEventListener('click', event => {
    if(isNum1){
        num1 += event.target.innerHTML;
        console.log(num1 + " Hi Im num1")
        console.log(event.target.innerHTML)
        mainScreen.innerHTML += event.target.innerHTML
    }
    else {
        mainScreen.innerHTML += event.target.innerHTML
        num2 += event.target.innerHTML;
        console.log(num2 + "Hi Im num2")
    }
}))

opBut.forEach(button => button.addEventListener('click', event => {
    operator = event.target.innerHTML;
    backScreen.innerHTML = mainScreen.innerHTML + " " + operator;
    mainScreen.innerHTML = ""
    isNum1 = false;
    

}))

equalBut.addEventListener('click', event => {
    mainScreen.innerHTML = operate(operator, Number(num1), Number(num2))
    num1 = mainScreen.innerHTML
    backScreen.innerHTML = ''
    num2 = ""
} )


const clear = document.getElementById('clear')
const remove = document.getElementById('delete')


clear.addEventListener('click', event => {
    num1 = "";
    operator = '';
    num2 = "";
    isNum1 = true;
    mainScreen.innerHTML = ''
    backScreen.innerHTML = ''
})


remove.addEventListener('click', event => {
    let newNum = mainScreen.innerHTML.slice(0, mainScreen.innerHTML.length - 1)
   mainScreen.innerHTML = newNum;
   num1 = newNum;
})