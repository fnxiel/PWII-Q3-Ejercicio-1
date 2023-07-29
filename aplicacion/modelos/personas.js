const Cryptr = require('cryptr');

const {ConfiguracionCrypto} = require('../configuracion/configuracion')

const cryptr = new Cryptr(ConfiguracionCrypto.llaveSecreta);

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

module.exports = {Persona}