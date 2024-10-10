// Herencia: Crea una clase Estudiante que herede de Persona y agregue la propiedad grado . Agrega un método para imprimir el grado.

var nombre = prompt("Ingresa tu nombre:");
var  edad = prompt("Ingresa tu edad:");
var grado =  prompt("Ingresa tu grado:");


class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    imprimirGrado() {
        console.log(`Vas en el grado: ${this.grado}`);
    }
}

const estudiante = new Estudiante(nombre, edad,  grado);
estudiante.imprimirGrado(); 
