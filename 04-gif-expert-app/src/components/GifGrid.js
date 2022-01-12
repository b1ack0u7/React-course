import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {

    // const [images, setImages] = useState([]);
    const {data: imgs, loading} = useFetchGifs(category);
    
    // //Corre la primera vez de renderizado gracias a []
    // useEffect( () => {
    //     getGifs(category)
    //     .then(setImages);
    // }, [category]) //si la category cambia renderiza otra vez
    
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className='card-grid'>
                {
                    imgs.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img} //Pasa el valor uno por uno
                        />
                        //<li key={id}>{title}</li>
                    ))
                }
            </div>
        </>
    )
}