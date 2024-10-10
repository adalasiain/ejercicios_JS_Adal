// Pide al usuario que ingrese un número y verifica si es realmente un número. Si no lo es, muestra un mensaje de error.
var numero = prompt("Ingresa un numero");
if (isNaN(numero)) {
    alert("Ingresaste un número inválido ");
} 