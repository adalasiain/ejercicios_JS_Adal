//Crea una función que reciba un callback. Usa el callback para imprimir un mensaje en la consola.

function callback(callback) {
    callback("Adal Emmanuel Asiain gomez");
}

callback(function (nombre) {
    console.log(nombre);
});
