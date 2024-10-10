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
