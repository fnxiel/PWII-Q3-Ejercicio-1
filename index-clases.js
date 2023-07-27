const Cryptr = require('cryptr');
const cryptr = new Cryptr('LlaveSecretaParaEncriptar');

class Persona{

    #secreto
    #secretoEncriptado

    constructor(nombre = "No definido", apellido = "No definido", secreto){
        this.id = "id-" + nombre + "-"+ apellido[0]
        this.nombre = nombre
        this.apellido = apellido
        this.#secreto = secreto
        this.#prepararSecreto()
    }

    //Reciba una fecha y calcule un valor
    //Ejemplo: Recibir fecha de nacimiento y calcular la edad


    get nombreCompleto(){
        //Backticks
        return `${this.nombre} ${this.apellido}`
    }

    #prepararSecreto(){
        this.#secretoEncriptado = cryptr.encrypt(this.#secreto) 
    }

    get obtenerSecreto(){
        return this.#secretoEncriptado
    }

    presentarse(){
        console.log("Hola mi nombre es ", this.nombre, " ", this.apellido)
    }
}

const persona = new Persona("Luke", "Skywalker", "El Papa es Darth Vader");
//persona.id = 1

const persona2 = new Persona("Leia", "Organa", "El hermana de Luke");
//persona2.id = 2

//console.log(persona.#prepararSecreto)


persona.nombreCompleto = "Nombre nuevo"
console.log("Nombre completo de la persona 1", persona.nombreCompleto)
console.log("Este es el secreto de la persona 1", persona.obtenerSecreto)

console.log("Este es el secreto desencritpado de la persona 1", 
cryptr.decrypt(persona.obtenerSecreto))

console.log(persona)
console.log(persona2)

persona.presentarse()
persona2.presentarse()
