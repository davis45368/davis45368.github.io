// Cargar color al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    random_bg_color();
    random_bg_color_Border();
    cambiarMensaje();
})

// Array de URLs de imágenes
const imagenes = ["../img/Imagen1.jpg", "../img/imgen02.jpeg", "../img/imagen03.jpg", "../img/imagen04.jpg", "../img/imagen05.jpg"];
const mensajes = ["Al mirar al pasado nos hemos cuenta que a pesar de todas las complejidades, todos los fallos y promesas rotas, las hemos afrontado y aprendido de nuestros errores lo cual nos  ha llevado a ver el gran amor que nos tenemos.", 
                "Ese dia nos dimos cuenta que el amor no se mide por la cantidad de días que hemos estado juntos, sino por la calidad de esos días. Hemos descubierto que nuestras sonrisas se complementan, nuestras lágrimas se consuelan y nuestros sueños se entrelazan de una manera única y especial", 
                "En este año que ha sido como un cuento de hadas, tú y yo hemos vivido momentos tan especiales que han llenado nuestros corazones de alegría y amor. Descubrimos que cada día juntos es una nueva aventura, llena de risas, complicidad y apoyo mutuo. ", 
                "Mi niña nos dimos cuenta de que nuestra conexión va más allá de lo cotidiano. Hemos aprendido a entendernos con una sola mirada, a sentirnos acompañados incluso en la distancia y a celebrar las pequeñas victorias de la vida juntos.",
                "Cada obstáculo nos unió más, y cada logro nos recordó que somos un equipo fuerte y apasionado. La representación de  una promesa de que la distancia que tenemos va llegar el dia que no va a ser un problema si no una bendición y el tiempo dejara de correr"
            ];

let indiceImagenActual = 0;
let indiceMensajeActual = 0;

// Función para cambiar la imagen al hacer clic en el botón
function cambiarImagen() {
    // Incrementa el índice de la imagen actual
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    
    // Obtiene el elemento de imagen y actualiza su src
    const imagen = document.getElementById('imagenMostrada');
    imagen.src = imagenes[indiceImagenActual];
    random_bg_color();
    random_bg_color_Border();
}         


function cambiarMensaje() {
    indiceMensajeActual = (indiceMensajeActual + 1) % mensajes.length;

    const mensaje = document.getElementById('mensaje');
    const bCambiar = document.getElementById('boton-cambiar');
    mensaje.textContent = mensajes[indiceMensajeActual];
    mensaje.classList.add('slideInUp');

    setTimeout(() => {
        mensaje.classList.remove('slideInUp');
    }, 2000)

    if (indiceMensajeActual === 0) {
        setTimeout(() => {
            var nuevoDiv = document.createElement('div');
            nuevoDiv.className = 'botones';
            var b2024 = document.createElement('button');
            b2024.id = '2023';
            b2024.className = 'boton'; // Añade la clase 'boton' al nuevo botón
            b2024.textContent = "2024";
            // Agrega el nuevo botón al nuevo div
            nuevoDiv.appendChild(b2024);
    
            // Agrega el nuevo div al cuerpo del documento
            document.body.appendChild(nuevoDiv);
    
            b2024.addEventListener("click", () => {
                window.location.href = "../2024.html";
                random_bg_color()
            });
        }, 7000)
        bCambiar.remove();
    } else {

    }
}


function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() *14);
            let y = hex[x];
            a += y;
        }
        return a;
    }

    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient
}

function random_bg_color_Border(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() *14);
            let y = hex[x];
            a += y;
        }
        return a;
    }

    let Color1 = populate('#');

    const img = document.getElementById('imagenMostrada');
    const botonCambiar = document.getElementById('boton-cambiar')
    img.style.border = "10px solid " + Color1;
    botonCambiar.style.border = "5px solid " + Color1;
}

