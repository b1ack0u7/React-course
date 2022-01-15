import React, {useState} from 'react';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effects.css';

export const useOwnCounter = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}

export default function MultipleCustomHooks() {
    const {counter, increment} = useOwnCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0]; 
    //Si existe la data (!!data) entonces (&&) extrae la data posicion 0

    // console.log(data);
    // console.log(loading);

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr />

            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer" style={{paddingTop: "1rem"}}>{author}</footer>
                        </blockquote>
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente frase
            </button>

        </div>
    )
}
