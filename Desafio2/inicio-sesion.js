const user = 'admin';
const pass = 1234;

const userIngresado = prompt('Ingrese su usuario:');
const passIngresada = prompt('Ingresa su contraseña:');

if(userIngresado == user && passIngresada == pass){
    alert('¡ACCESO VALIDO!');
} else {
    alert('¡ACCESO DENEGADO!');
}