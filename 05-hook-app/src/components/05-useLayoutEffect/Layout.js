import React, {useState, useLayoutEffect, useRef} from 'react';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

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

export default function Layout() {
    const {counter, increment} = useOwnCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0]; 
    //Si existe la data (!!data) entonces (&&) extrae la data posicion 0

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={pTag}
                >{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente frase
            </button>

        </div>
    )
}
