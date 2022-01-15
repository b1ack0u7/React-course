import React, {useMemo, useState} from 'react'
import {useCouter} from '../../hooks/useCouter';

import '../02-useEffect/effects.css'

export default function MemoHook() {
    const {state: counter, increment} = useCouter(5000);
    const [show, setShow] = useState(true);

    const procesoPesado = (iteraciones) => {
        for(let i = 0; i<iteraciones; i++) {
            console.log("Iterando...");
        }

        return `${iteraciones} iteraciones realizadas.`;
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    //() => Funcion , si cambia el estado del counter memoriza para no re-renderizar

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: {counter}</h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                style={{marginLeft: '1rem'}}
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
