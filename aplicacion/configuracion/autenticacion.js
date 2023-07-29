const {ConfiguracionBaseDatos} = require('./configuracion')

function autenticar(usuario, password){
    if(usuario === ConfiguracionBaseDatos.usuario && password === ConfiguracionBaseDatos.password){
        console.log("Autenticado")
    }else{
        console.log("Error de autenticacion")
    }

}

module.exports = {autenticar}