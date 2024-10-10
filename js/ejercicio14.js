//Crea un programa que convierta grados Celsius a Fahrenheit.
var numero = prompt("Ingresa los grados Celcius");
if (isNaN(numero)) {
    numero = prompt("Ingresa un número válido ");
} else {
    numero = parseInt(numero); 
    numero = (numero *9/5)+32
    alert("Los grados Fahrenheit son:" + numero)
}
