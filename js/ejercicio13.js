//Escribe un programa que pida un número al usuario y diga si es par o impar.
var numero = prompt("Ingresa un numero");
if (isNaN(numero)) {
    numero = prompt("Ingresa un número válido ");
} else {
    numero = parseInt(numero); 
    if(numero % 2 == 0){
        alert("Es par")
    } else {
        alert("Es impar")

    }
}
