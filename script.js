const cambiarColorBtn = document.getElementById('cambiarColorBtn');
let fondoActual = '#d8d8d8d5'; // Color de fondo inicial del body

cambiarColorBtn.addEventListener('click', function() {
    // Verificar el color de fondo actual
    if (fondoActual === '#d8d8d8d5') {
        // Cambiar a rgb(99, 99, 99)
        document.body.style.backgroundColor = 'rgb(99, 99, 99)';
        cambiarColorBtn.style.backgroundColor = '#d8d8d8d5'; // Cambiar el color de fondo del botón
        cambiarColorBtn.style.color = 'rgb(99, 99, 99)'; // Cambiar el color del texto del botón
        fondoActual = 'rgb(99, 99, 99)';
    } else {
        // Cambiar a #d8d8d8d5
        document.body.style.backgroundColor = '#d8d8d8d5';
        cambiarColorBtn.style.backgroundColor = 'rgb(99, 99, 99)'; // Cambiar el color de fondo del botón al color original
        cambiarColorBtn.style.color = 'white'; // Cambiar el color del texto del botón al color original
        fondoActual = '#d8d8d8d5';
    }
});