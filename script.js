const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const buttons = document.querySelectorAll('.btn')
const total = document.querySelector('#total')

let firstValue = 0
let secondValue = 0
let operator = ''
let result = 0

function operate(op, a, b) {
  switch (op) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
    case '*':
      return multiply(a, b)
    case '/':
      return divide(a, b)
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    total.textContent += button.getAttribute('value').trim()
  })
})
