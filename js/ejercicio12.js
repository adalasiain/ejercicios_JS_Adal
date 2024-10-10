//Pide al usuario su edad y muestra un mensaje dependiendo de si es mayor o menor de edad.
var edad = prompt("Ingresa tu edad");

if (isNaN(edad)) {
    edad = prompt("Ingresa un número válido para tu edad");
} else {
    edad = parseInt(edad); 
    if (edad >= 18) {  
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}
