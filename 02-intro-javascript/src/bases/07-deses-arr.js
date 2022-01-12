
const personajes = ['Goku','Vegetta','Trunks'];

console.log(personajes[0]);

const [ , ,p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const myvar = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, setNombre] = myvar('Goku');

console.log(nombre);
setNombre();