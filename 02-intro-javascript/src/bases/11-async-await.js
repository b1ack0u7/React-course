
const getImagen = async() => {

    try {
        const apiKey = 'LQ0OVlQPbqPZXO5fzh6pjr3zmnome7N4';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        console.log(data);
    
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.appendChild(img);
    } catch (err) {
        //Manejo de error
        console.error(err);
    }
};

getImagen()

/*
const apiKey = 'LQ0OVlQPbqPZXO5fzh6pjr3zmnome7N4';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Promesas en cadena
peticion
.then( (resp) => resp.json())
.then( ({data}) => {
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.appendChild(img);
})
.catch(console.warn);
*/