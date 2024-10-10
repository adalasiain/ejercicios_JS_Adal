var numero = parseFloat(prompt("Ingresa un número:"));
var tipo;
if (numero > 0 ){
    tipo = "Positivo"
} else if (numero < 0){
    tipo = "Negativo"
} else {
    tipo = "Cero"
}
 console.log("El numero es : " + numero);
 console.log("Por lo tanto es: " + tipo);