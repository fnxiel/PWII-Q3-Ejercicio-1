var colors = require('colors')


function sumar(n1, n2, color){
    const resultado = n1 + n2
    console.log(resultado.toString()[color])
}

sumar(5, 2, "green")
sumar(2, 1, "red")
sumar(70, 242, "rainbow")

//Crear una aplicacion que permita mostrar colores dependiendo de la nota de un estudiante
//Si es menor a 65, mostrar color rojo, si entre 66 y 80, en amarillo y de 80 a a 100 en color verde.

// console.log("Inicio de aplicacion en modo de desarrollo".blue)
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass