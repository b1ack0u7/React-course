const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'NYC',
        zip: 54354,
        lat: 14.01215,
        lng: 15.02312
    }
};

console.log(persona);

const persona2 = {...persona}; //Copy dictionary
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);