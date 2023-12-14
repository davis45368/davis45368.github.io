// Cargar color al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    random_bg_color();
    random_bg_color_Border();
    cambiarMensaje();
})

// Array de URLs de imágenes
const imagenes = ["../img/imagen06.jpg", "../img/imagen07.jpg", "../img/imagen08.jpg", "../img/imagen09.jpg", "../img/imagen10.jpg"];
const mensajes = ["Tu amor es mi inspiración diaria, mi cielo en la tierra. Gracias por ser mi todo.", 
                "En tus ojos encuentro un universo donde perderme, y en tu abrazo, mi hogar verdadero.", 
                "Contigo, cada día es un capítulo de amor que quiero leer una y otra vez.", 
                "Eres el sueño que nunca quiero despertar, mi felicidad eterna.",
                "A tu lado, la vida es más hermosa, y cada momento contigo es un regalo."
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

