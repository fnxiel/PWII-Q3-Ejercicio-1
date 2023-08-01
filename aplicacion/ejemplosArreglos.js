const {Persona} = require('./modelos/personas')

function ejemplosArreglos(){
    //Arreglos de valores
    const notas = [1, 23, 4, 567, 7]
    const texto = "Hola mundo"
    //Arreglo mixto
    const cosasImportantes = ["Hacer cena", 25, true, new Date(), "Hace prueba el viernes"]
    //Arreglo objetos
    let listadoClase = [
        {
            id: 1,
            nombre: "Luke",
            apellido: "Skywalker",
            identidad: "1234-5633-52333"
        },
        {
            id: 2,
            nombre: "Leia",
            apellido: "Organa",
            identidad: "1234563352333"
        },
        {
            id: 3,
            nombre: "Darth",
            apellido: "Vader",
            identidad: "1234563352333"
        },
        {
            id: 4,
            nombre: "Anakin",
            apellido: "Skywalker",
            identidad: "1234563352333"
        }
    ]

    //Indice 0
    console.log(notas[3])
    console.log(texto[3])
    console.log(notas[30])
    console.log(cosasImportantes[2])
    console.log(listadoClase)
    console.log(listadoClase[1])

    //Adicionar a un arreglo
    notas.push(777)
    console.log("Nuevo listado de notas", notas)

    //Adicionar un objeto a un arreglo
    const nuevaPersona = {
        id: 5,
        nombre: "Han",
        apellido: "Solo",
        identidad: "3234234231"
    }

    listadoClase.push(nuevaPersona)
    listadoClase.push({
        id: 6,
        nombre: "C3P0",
        apellido: "Skywalker",
        identidad: "3253242675",
    })

    console.log("Listado completo", listadoClase)

    //Ejemplos de funciones
    //Funcion Tradicional
    function buscarPersonaPorId(persona){
        return persona.id === 1
    }

    const buscarPersonaPorIdFFR = (persona) => {
        return persona.id === 1
    }

    const buscarPersonaPorIdFF = (persona) => persona.id === 1

    //Funcion definida dentro del find
    const personaEncontrada = listadoClase.find((persona) => persona.id === 2)

    //Utilizando una funcion definida en otra parte
    const personaEncontrada2 = listadoClase.find(buscarPersonaPorIdFF)
    
    console.log("Persona encontrada", personaEncontrada)
    console.log("Persona encontrada 2", personaEncontrada2)

    //Devuelve un arreglo de todas las personas con apellido skywalker
    const personasConApellidoSkywalker = 
        listadoClase.filter((persona) => persona.apellido === "Skywalker")
    //RETO: Filter utilice expresiones regulares para buscar las personas que no tienen numero de identidad valido.

    console.log("La familia skywalker es la siguiente", personasConApellidoSkywalker)

    //Devuelve un arreglo de un objeto
    console.log(listadoClase.filter((persona) => persona.id === 1))
    
    //Modificar
    //Shallow Copy - Copia superficial
    const personaModificar = listadoClase.find((persona) => persona.id === 2)
    personaModificar.apellido = "Skywalker"
    
    console.log("Listado modificado", listadoClase)

    //Eliminar
    listadoClase = listadoClase.filter((persona) => persona.id !== 5)
    console.log("Listado sin persona con id 5", listadoClase)

    //utilizando clases
    const persona1 = new Persona("Luke", "Skywalker", "Secreto")
    const persona2 = new Persona("Leia", "Organa", "Secreto")
    const persona3 = new Persona("Darth", "Vader", "Secreto")
    const persona4 = new Persona("Anakin", "Skywalker", "Secreto")

    let elencoStarWars = [persona1, persona2]

    elencoStarWars.push(persona3)
    elencoStarWars.push(persona4)

    console.log(elencoStarWars)
    //Modificar
    //Find
    //Filter
    //Delete

}

module.exports = {ejemplosArreglos}

