/* // Elemento de la persona
const person = document.getElementById("person");

// Tiempo para cambiar los emojis
let stages = [
    { emoji: '😢', time: 0 },  // Persona pobre
    { emoji: '🙂', time: 3000 }, // Persona en transición
    { emoji: '😎', time: 6000 }, // Persona rica
    { emoji: '😎💸', time: 8000 } // Persona millonaria
];

// Función para mover y cambiar la apariencia del personaje
function startTransformation() {
    // Iniciar movimiento de la persona
    person.style.left = "calc(100% - 100px)";

    // Cambiar la apariencia a lo largo del tiempo
    stages.forEach(stage => {
        setTimeout(() => {
            person.textContent = stage.emoji;
        }, stage.time);
    });
}

// Iniciar la animación después de cargar la página
window.onload = startTransformation;
 */

const signInBtnLink = document.querySelector('.signInBtn-link'); //selecciona la clase
const signUpBtnLink = document.querySelector('.signUpBtn-link'); //selecciona la clase
const wrapper = document.querySelector('.wrapper'); //selecciona la clase


/* para cuando haga click me lleve a sign up */
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
/* para cuando haga click me lleve a sign in */
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

/* efecto particulas */

particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 80, //la cantidad de particulas
                "density": {  //controla la densidad de las particulas
                    "enable": true, //ajusta el numero de particulas de la densidad
                    "value_area": 800 //es el area donde se distribuyen las particulas
                }
            },
            "color": {
                "value": "#ffffff" //cambiar el color a los puntos de la particula por eso lo dejaremos con #ffffff
            },
            "shape": {  //sobre la forma de las particulas
                "type": "circle",  //"circle", "triangle", "edge"
                "stroke": {  //border de las particulas
                    "width": 0, 
                    "color": "#000000"  
                },
                "polygon": {
                    "nb_sides": 5 // Define el número de lados de la partícula si es un polígono
                },
                "image": {  //usar una imagen como partícula, aunque en este caso no se está utilizando.
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": { //transparencia de las particulas
                "value": 0.5,  //la opacidad
                "random": false,  /* hacer que la opacidad sea aleatoria para 
                                     cada particula, pero como es "false" no hace eso */
                "anim": {   //Configura animaciones para el tamaño
                    "enable": false, //lineas desavilitadas
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": { // Ajusta el tamaño de las partículas.
                "value": 5,//Tamaño base de las partículas
                "random": true, //los tamanos varian
                "anim": {   //configura las animaciones para el tamano
                    "enable": false,    //lineas desavilitadas
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": { // Controla si las partículas están conectadas por líneas.
                "enable": true,  //son las lineas de conexion que estan habilitadas
                "distance": 150, //las distancia entre las conexion de particulas
                "color": "#ffffff", //color
                "opacity": 0.4, //opacidad(transparencia de las lineas)
                "width": 1 //ancho de las lineas
            },
            "move": {  //controla el movimiento de las particulas
                "enable": true,  //son las lineas de conexion que estan habilitadas
                "speed": 5,  //velocidad de movimiento de las particulas
                "direction": "none", /* direccion de movimiento, como esta en "none" 
                                        quiere decir que son movimientos aleatorios */
                "random": false, // los tamanos no varian son fijos
                "straight": false,  /* las lienas se mueven en cualquier direccion,
                                        y si fuera "true" se mueven en linea recta */
                "out_mode": "out", //Define lo que pasa cuando una partícula sale del canvas
                "attract": {   // Atrae las partículas entre sí en función de su posición
                    "enable": false, //lienas de conexion inavilitadas
                    "rotateX": 600, //hacer rotar a las particulas de forma horizontal
                    "rotateY": 1200 // hacer rotar a las particulas de forma vertical
                }
            }
        },
        "interactivity": { // Configura cómo interactúan las partículas con el usuario
            "detect_on": "canvas", //Define dónde se detectan las interacciones
            "events": {  //Configura los eventos de interacción.
                "onhover": {  //Activa la interacción cuando el usuario pasa el ratón sobre el área
                    "enable": true, //Activa o desactiva la interacción por hover.
                    "mode": "repulse" //Modo de interacción, en este caso "repulse" que hace que las partículas se repelan.
                },
                "onclick": {  //Define la interacción al hacer clic
                    "enable": true,  //Activa el efecto al hacer clic.
                    "mode": "push"  //El modo "push" añade más partículas al hacer clic
                },
                "resize": true  //Permite ajustar las partículas al redimensionar la ventana.
            },
            "modes": {  //Define los modos de interacción.
                "grab": {   //Conecta las partículas cuando el ratón se acerca a ellas.
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": { //Agranda y cambia la opacidad de las partículas cuando se acercan al puntero.
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {    //Repele las partículas al pasar el ratón sobre ellas.
                    "distance": 200
                },
                "push": {   // Añade más partículas al hacer clic.
                    "particles_nb": 4 
                },
                "remove": { //Elimina partículas al hacer clic.
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,  //Si es true, ajusta la configuración para pantallas de alta resolución.
        "config_demo": {    /* Configura la demostración,
                               como el fondo del canvas (en este caso, el color de fondo es #b61924). */
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }
);
