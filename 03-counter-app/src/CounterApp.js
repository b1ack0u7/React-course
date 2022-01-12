import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
    //Hooks
    const [counter, setCounter] = useState( value ); //[value, function hook]
    

    //handle Add
    const handleAdd = (e) => {
        // const {type} = e;
        // console.log(type)

        setCounter(counter + 1);
        // setCounter( (c) => c + 1);
    }

    //Handle Reset
    const handleReset = (e) => setCounter( (c) => c = 10 );

    //Handle Minus
    const handleMinus = (e) => setCounter( (c) => c - 1);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            {/* <button onClick={ (e) => {handleAdd(e)} }>+1</button> */}

            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleMinus }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;