import React, {useState} from 'react'
import {useCouter} from '../../hooks/useCouter';
import {Small} from './Small';

import '../02-useEffect/effects.css'

export default function Memorize() {
    const {state: counter, increment} = useCouter(10);
    const [show, setShow] = useState(true);
    console.log(counter);

    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />

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
