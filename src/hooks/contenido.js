const electronicos = "Electronicos";
const infoElectronicos = "¡Bienvenidos a la revolución tecnológica! Sumérgete en un mundo de posibilidades con nuestros increíbles artículos electrónicos diseñados para tu vida, mantenerte conectado y llevar tu entretenimiento al siguiente nivel.";
const joyeria = "Joyeria";
const infoJoyeria = "En el corazón de cada joya hay una historia esperando ser contada. Aqui encontrarás piezas únicas que capturan la esencia de la belleza y la emoción. Desde diamantes que brillan como estrellas hasta perlas que susurran secretos, nuestras joyas son más que objetos preciosos; son tesoros que atesoran los momentos más especiales de tu vida.";
const ropa = "Ropa de damas y caballeros";
const infoRopa = "Tu destino de moda para cada estilo, cada ocasión. Celebremos la individualidad y la autoexpresión a través de la moda. Nuestra colección cuidadosamente seleccionada de ropa para hombres y mujeres ofrece una amplia gama de estilos, desde clásicos atemporales hasta las últimas tendencias, para que puedas encontrar las piezas perfectas que se adapten a tu gusto único y a cada faceta de tu vida.";
const smartwatches = "Smartwatches";
const infoSmartwatches = "Tu compañero inteligente para un estilo de vida conectado. Te presentamos la última generación de smartwatches: dispositivos que combinan estilo, funcionalidad y tecnología de vanguardia para tu vida y mantenerte conectado en todo momento.";
const mas = "Descubra más";
const masInfo = "Sabemos que tienes un gusto único y que siempre estás buscando algo especial. Por eso, hemos creado una experiencia de compra que te invita a explorar y descubrir tesoros que te encantarán, sumergete en la busqueda de ese producto que tanto anhelas.";
let pantallaNueva = {};

export const contenido = (val) => {
    if (val == "1") {
        pantallaNueva = {imagenFondo:"./../assets/images/electronica.jpg", imagenTipo: "./../assets/images/electronica.jpg", titulo:electronicos, info:infoElectronicos};
    }
    else if (val == "2") {
        pantallaNueva = ({imagenFondo: "./../../assets/images/fondo-joyeria.jpg", imagenTipo: "./../../assets/images/joyeria.jpg", titulo:joyeria, info:infoJoyeria});
    }
    else if (val == "3") {
        pantallaNueva = ({imagenFondo: "./../../assets/images/fondo-ropa.jpg", imagenTipo: "./../../assets/images/ropa.jpg", titulo:ropa, info:infoRopa});
    }
    else if (val == "4") {
        pantallaNueva = ({imagenFondo: "./../../assets/images/fondo-smartwatch.jpg", imagenTipo: "./../../assets/images/smartwatch.jpg", titulo:smartwatches, info:infoSmartwatches});
    }
    else if (val == "5") {
        pantallaNueva = ({imagenFondo: "./../../assets/images/mas.jpg", imagenTipo: "./../../assets/images/mas.jpg", titulo:mas, info:masInfo});
    };

    return pantallaNueva;
}

export const contenidoDark = (val) => {
    if (val == "1") {
        pantallaNueva = {imagenFondo:"./../assets/images/dark-electronica.jpg", imagenTipo: "./../assets/images/dark-electronica.jpg", titulo:electronicos, info:infoElectronicos};
    }
    else if (val == "2") {
        pantallaNueva = ({imagenFondo: "./../../assets/images/dark-joyeria.jpg", imagenTipo: "./../../assets/images/dark-joyeria.jpg", titulo:joyeria, info:infoJoyeria});
    }
    else if (val == "3") {
        pantallaNueva = ({imagenFondo: "./../../assets/images/dark-fondo-ropa.jpg", imagenTipo: "./../../assets/images/dark-ropa.jpg", titulo:ropa, info:infoRopa});
    }
    else if (val == "4") {
        pantallaNueva = ({imagenFondo: "./../../assets/images/dark-fondo-smartwatch.jpg", imagenTipo: "./../../assets/images/dark-smartwatch.jpg", titulo:smartwatches, info:infoSmartwatches});
    }
    else if (val == "5") {
        pantallaNueva = ({imagenFondo: "./../../assets/images/dark-fondo-mas.jpg", imagenTipo: "./../../assets/images/dark-mas.jpg", titulo:mas, info:masInfo});
    };

    return pantallaNueva;
};