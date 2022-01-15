import React, {useState} from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

export default function RealExampleRef() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-4"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hidde
            </button>
        </div>
    )
}
