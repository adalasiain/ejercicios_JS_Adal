document.getElementById('form').addEventListener('submit', function(event) {
    let campo1 = document.getElementById('uno').value;
    let campo2 = document.getElementById('dos').value;
    
    if (campo1 === '' || campo2 === '') {
      event.preventDefault();
      alert('Aun no llenas los campos');
    }
  });