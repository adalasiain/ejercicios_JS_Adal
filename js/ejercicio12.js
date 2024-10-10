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
