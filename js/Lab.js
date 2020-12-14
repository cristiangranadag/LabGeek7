var usuario;

function Capturar(){

class Persona{
    constructor(nombre,apellidos,edad,nacimiento,direccion,ciudad,telefono,correo){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.nacimiento = nacimiento;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.correo = correo
    }
}

    var nombreRegistro = document.getElementById('nombre').value;
    var apellidosRegistro = document.getElementById('apellidos').value;
    var edadRegistro = document.getElementById('edad').value;
    var nacimientoRegistro = document.getElementById('nacimiento').value;
    var direccionRegistro = document.getElementById('direccion').value;
    var ciudadRegistro = document.getElementById('ciudad').value;
    var telefonoRegistro = document.getElementById('telefono').value;
    var correoRegistro = document.getElementById('correo').value;

        usuario = new Persona(nombreRegistro, apellidosRegistro, edadRegistro, nacimientoRegistro, direccionRegistro,
            ciudadRegistro, telefonoRegistro, correoRegistro)
    RegistrarUsuario(usuario);
    EliminarUsuario(usuario);
}

var Personas = [];

function RegistrarUsuario(usuario) {
    Personas.push(usuario)
    console.log(Personas);

    document.getElementById('tabla').innerHTML +=  '<tbody><td>' + usuario.nombre + '</td><td>' + usuario.apellidos +
    '</td><td>' + usuario.edad + '</td><td>' + usuario.nacimiento + '</td><td>' + usuario.direccion + '</td><td>' + 
    usuario.ciudad + '</td><td>' + usuario.telefono +'</td><td>' + usuario.correo + '</td><td>' + 
    '<button class="btn btn-warning">Recuperar</button>' + '</td><td>' + 
    '<button class="btn btn-danger">Eliminar</button>' + '</td></tbody>'
    // '<a href="#" class="btn btn-danger" name"delete">Eliminar</a>' +usuario.EliminarUsuario+ '</td></tbody>'
}   

function EliminarUsuario(usuario) {
    Personas.pop(usuario)
    


}

function Recuperar(usuario) {
        
}
