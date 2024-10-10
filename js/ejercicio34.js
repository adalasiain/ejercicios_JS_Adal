// Crea una clase Persona con propiedades nombre y edad , y un método que salude con el nombre de la persona.
var nomb = prompt("Ingresa tu nombre")
var años = prompt("Ingresa tu edad")


class alumno {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola ${this.nombre} tienes ${this.edad} años`);
    }
}

const persona = new alumno(nomb, años);
persona.saludar(); 
