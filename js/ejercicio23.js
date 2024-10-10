//Escribe un programa que busque un valor en un array ymuestre su posición.
const numeros = [10, 20, 30, 40, 50];
const buscar = 30;
const posicion = numeros.indexOf(buscar);

if (posicion !== -1) {
    console.log(`El numero ${buscar} se encuentra en la posición: ${posicion}`); 
} 

