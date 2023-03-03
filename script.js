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
    if (button.id === 'clear') {
      total.textContent = ''
      firstValue = 0
      secondValue = 0
      operator = ''
      result = 0
    } else if (button.id === 'backspace') {
      total.textContent = total.textContent.slice(0, -1)
    } else if (button.id === 'equals') {
      secondValue = Number(total.textContent)
      result = operate(operator, firstValue, secondValue)
      total.textContent = result
    } else if (button.id === 'plus') {
      firstValue = Number(total.textContent)
      operator = '+'
      total.textContent = ''
    } else if (button.id === 'minus') {
      firstValue = Number(total.textContent)
      operator = '-'
      total.textContent = ''
    } else if (button.id === 'multiply') {
      firstValue = Number(total.textContent)
      operator = '*'
      total.textContent = ''
    } else if (button.id === 'divide') {
      firstValue = Number(total.textContent)
      operator = '/'
      total.textContent = ''
    } else {
      total.textContent += button.getAttribute('value').trim()
    }
  })
})
