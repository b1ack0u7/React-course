
//Funciones
/* Esta mal
function saludar(nombre) {
    return `Hola ${nombre}`;
};*/

//Funcion normal con asig
const saludar = function(nombre) {
    return `Hola ${nombre}`;
};

//Funcion flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

//Funcion flecha mas rapida
const saludar3 = (nombre) => `Hola ${nombre}`;

//Funcion flecha sin parametros
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Axel'));
console.log(saludar2('Max'));
console.log(saludar4());

//Retorno de objeto implicito ({})
const getUser = () => ({
    uid: "ABC123",
    username: "El_perro"
});

console.log(getUser());


//Tarea
/*
function getUsuarioActivo (nombre) {
    return {
        uid: "ABC589",
        username: nombre
    }
};
*/

//Res
const getUsuarioActivo = (nombre) => ({
    uid: "ABC589",
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Axel');
console.log(usuarioActivo);