//Crea un programa que sume todos los números de un array.
const numeros = [1, 2, 3, 4, 5];
var suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); 
