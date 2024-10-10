// Pide al usuario ingresar una palabra y determina si es un palíndromo (se lee igual al derecho y al revés).
var palabra = prompt("Ingresa una palabra")
var palabra2= palabra.split("").reverse().join("");

if (palabra === palabra2) {
    alert(palabra + " es un palíndromo.");
} else {
    alert(palabra + " no es un palíndromo.");
}
