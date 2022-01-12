import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({setCategories}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();    //Previene recarga de navegacion al enter

        if(inputValue.trim().length > 2) {
            console.log("Se agrega");
            setCategories(resp => [inputValue, ...resp]);
            setInputValue('');
        }
        else {
            console.log("No se agrega");
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
