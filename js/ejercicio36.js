// Crea un objeto que represente una calculadora con métodos para sumar, restar, multiplicar y dividir.
var num1 = parseFloat(prompt("Ingresa un numero"))
var num2 = parseFloat(prompt("Ingresa otro numero"))

const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b,
};

console.log(calculadora.sumar(num1, num2)); 
console.log(calculadora.restar(num1, num2)); 
console.log(calculadora.multiplicar(num1, num2)); 
console.log(calculadora.dividir(num1, num2)); 
