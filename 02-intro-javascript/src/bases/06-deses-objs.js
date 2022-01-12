
//Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'iron'
};

//A quien extraer : nombre de la variable
const {nombre:varname} = persona;
const {edad} = persona;

console.log(varname);
console.log(edad);

//En argumento
const useContext = ({clave, nombre, edad}) => {
    //console.log(nombre, clave, rango);
    return {
        nombreClave: clave,
        anios: edad
    }
};

const avenger = useContext(persona);

