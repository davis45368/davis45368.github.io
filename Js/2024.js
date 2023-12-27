// Cargar color al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    random_bg_color();
    random_bg_color_Border();
    cambiarMensaje();
})

// Array de URLs de imágenes
const imagenes = ["../img/imagen06.jpg", "../img/imagen07.jpg", "../img/imagen08.jpg", "../img/imagen09.jpg", "../img/imagen10.jpg"];
const mensajes = ["Espero alcanzar nuevas alturas y aventurarnos en territorios inexplorados. Vamos a trazar un camino lleno de logros y experiencias significativas que fortalezcan nuestra conexión y nos acerquen aún más.", 
                "Trabajaremos juntos para establecer las bases de una vida llena de alegría, crecimiento y prosperidad. Cada paso que demos será una piedra que forme el camino de nuestra historia compartida", 
                "Planeamos explorar lugares desconocidos, probar cosas nuevas y celebrar los éxitos, grandes o pequeños, que encontremos en nuestro camino. ", 
                "Sabemos que la vida puede presentar obstáculos, pero confiamos en nuestra capacidad para superarlos juntos. Queremos construir una relación que se fortalezca ante la adversidad, recordándonos siempre que el amor es la fuerza que nos impulsa hacia adelante.",
                "Quiero que recuerdes que este 2024 es de muchas metsas y objetivos juntos que quiero compartir a tu lado y espero que se cumplan todos por que cada segundo a tu lado es el mejor regalo de la vida."
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

