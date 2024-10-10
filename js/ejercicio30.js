//Crea una función que cuente cuántas vocales hay en una palabra.
var palabra = prompt("Ingresa una frase o palabra")

function contarVocales(palabra) {
    const vocales = 'aeiouAEIOU';
    let contador = 0;

    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
console.log("Texto: " + palabra)
console.log("Tiene : " + contarVocales(palabra) + " vocales"); 
