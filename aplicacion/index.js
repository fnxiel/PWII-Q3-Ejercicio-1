const {Persona} = require('./modelos/personas')
const {ConfiguracionBaseDatos} = require('./configuracion/configuracion')
const {autenticar} = require('./configuracion/autenticacion')

console.log("El usuario de base de datos es ", ConfiguracionBaseDatos.usuario)

autenticar("Usuario incorrecto", "Password incorrecto")
autenticar("UsuarioBD", "password.1234")

const persona = new Persona("Luke", "Skywalker", "El Papa es Darth Vader");
//persona.id = 1

const persona2 = new Persona("Leia", "Organa", "El hermana de Luke");
//persona2.id = 2

//console.log(persona.#prepararSecreto)


persona.nombreCompleto = "Nombre nuevo"
console.log("Nombre completo de la persona 1", persona.nombreCompleto)
console.log("Este es el secreto de la persona 1", persona.obtenerSecreto)

//console.log("Este es el secreto desencritpado de la persona 1", 
//cryptr.decrypt(persona.obtenerSecreto))

console.log(persona)
console.log(persona2)

persona.presentarse()
persona2.presentarse()