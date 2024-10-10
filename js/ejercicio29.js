// Escribe una función que encuentre el valor más grande y el más pequeño en un array de números.
const numeros = [];
for (let i = 0; i < 4; i++) {
    var numero = parseFloat(prompt("Ingresa el número " + (i + 1) + "/4 del array"));
    numeros.push(numero);
}

function sacarMaxMin(array) {
    const maximo = Math.max(...array);
    const minimo = Math.min(...array);
    return { maximo, minimo }; 
}

const resultados = sacarMaxMin(numeros);
console.log("Máximo: " + resultados.maximo); 
console.log("Mínimo: " + resultados.minimo); 

