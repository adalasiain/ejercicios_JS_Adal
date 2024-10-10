document.getElementById('agregar').addEventListener('click', function() {
    let nuevo = document.createElement('li');
     nuevo.textContent = 'Nuevo elemento';
    document.getElementById('lista').appendChild(nuevo);
  });
  