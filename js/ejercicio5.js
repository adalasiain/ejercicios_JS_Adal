//Escribe un programa que compare dos números y diga cuál es mayor o si son iguales.
var num1 = parseFloat(prompt("Ingresa un número:"));
var num2 = parseFloat(prompt("Ingresa otro número:"));
console.log("Numero 1: " + num1);
console.log("Numero 2: " + num2);
if (num1 > num2){
    console.log("El numero mayor es el numero:" + num1)
} else{
    console.log("El numero mayor es el numero:" + num2)
}