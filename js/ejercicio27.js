// Escribe una función que calcule el factorial de un número.
var numero = prompt("Ingresaun numero para sacar el factorial ")

function factorial(n) {
    if (n < 0) return "Error, numero negativo"; 
    if (n === 0 || n === 1) return "El factorial de "+ n+ "es: 1";
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return "El factorial de "+ n+ "es: " + resultado;
}

console.log(factorial(numero)); 
 