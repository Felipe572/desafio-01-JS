let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('A soma é: ' + sum)
alert('A subtração é: ' + sub)
alert('A mutiplicação é: ' + multi)
alert('A divisão é: ' + div)
alert('O resto da Divisão é: ' + restDiv)

if (sum % 2 === 0 ) {
    alert(`A soma dos números é par: ${sum}`)
} else {
    alert(`A soma dos números é ímpar: ${sum}`)
}

if (firstNumber === secondNumber) {
    alert(`Os números inseridos são iguais`)
} else {
    alert(`Os números inseridos são diferentes`)
}