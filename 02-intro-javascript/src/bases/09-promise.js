
const promesa = new Promise( (resolve,reject) => {
    setTimeout( () => {
        console.log('2 Segundos despues');
        const myval = {hero:'soy una variable'}
        //resolve(myval);  //Notifica del estado
        reject();
    }, 2000)
});

promesa
.then( (myval) => {
    console.log('Then de la promesa');
    console.log(`myval ${myval.hero}`)
})
.catch( err => {
    console.warn('Error');
});

