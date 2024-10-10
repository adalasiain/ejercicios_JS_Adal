// Escribe una función flecha que reciba un array de números y devuelva un array con los números multiplicados por 2.
var array = [1, 2, 3, 4];
const mult = (array) => {
    return array.map(num => num * 2);
};

console.log(mult(array)); 
