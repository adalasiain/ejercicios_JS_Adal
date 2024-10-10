// Crea una función que reciba un array de números y devuelva su promedio.

const numeros = [];
for (let i = 0; i < 4; i++) {
    var numero = parseFloat(prompt("Ingresa el número " + (i + 1) + "/4 del array"));
    numeros.push(numero);
}

function promedio(array) {
    const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / array.length;
}

console.log("Array: " + numeros);
console.log("Promedio: " + promedio(numeros));
