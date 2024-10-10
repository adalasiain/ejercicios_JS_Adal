document.getElementById('eliminar').addEventListener('click', function() {
    let lista = document.getElementById('lista');
    lista.removeChild(lista.lastElementChild);
  });