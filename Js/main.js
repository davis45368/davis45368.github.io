// Función para agregar el contenido después de 5 segundos
setTimeout(function() {
    // Crea un nuevo elemento div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'botones'; // Añade la clase 'botones' al nuevo div

    // Crea un nuevo botón
    var nuevoBoton = document.createElement('button');
    nuevoBoton.id = '2023'; // Asigna el ID '2023' al nuevo botón
    nuevoBoton.className = 'boton'; // Añade la clase 'boton' al nuevo botón
    nuevoBoton.textContent = "2023";
    nuevoBoton.addEventListener("click", () => {
        window.location.href = "../2023.html";
        random_bg_color()
    });

    // Agrega el nuevo botón al nuevo div
    nuevoDiv.appendChild(nuevoBoton);

    // Agrega el nuevo div al cuerpo del documento
    document.body.appendChild(nuevoDiv);
}, 9000); // Espera 5 segundos antes de ejecutar la función
