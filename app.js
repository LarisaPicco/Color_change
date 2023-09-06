const boton = document.getElementById('boton-color')
const color= document.getElementById('color')

function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i=0; i<6; i++) {
        let indiceAleatorio = Math.floor(Math.random()*16) /*el método Math.random me arroja combinaciones al azar, 
        y el método Math.floor me los arroja enteros */;
        colorHex += digitos [indiceAleatorio];

    }
    return colorHex;
}

boton.addEventListener('click', function() {  /*hacemos esta segunda funcion tambien porque necesitamos actualizar 
estos valores y propiedades en el DOM)*/


    let colorAleatorio = generarColorHexAleatorio();
    /*Actualizar el texto*/
    color.textContent = colorAleatorio;
    /*Actualizar el color de fondo*/
    document.body.style.backgroundColor = colorAleatorio; /*hacer otro proyecto con eventListener con cambio de imagen */
}
)
