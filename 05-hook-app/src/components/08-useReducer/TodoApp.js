import React, {useReducer, useEffect} from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';


const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender react',
    //     done: false
    // }];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const [{description}, handleInputChange] = useForm({
        description: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
    
        const action = {
            type: 'add',
            payload: newTodo
        }
    
        dispatch(action);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoID) => {
        const action = {
            type: 'delete',
            payload: todoID
        }

        dispatch(action);
    }

    const handleToggle = (todoID) => {
        dispatch({
            type: 'toggle',
            payload: todoID
        });
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className='col-7'>
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, idx) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"  
                                >
                                    <p 
                                        onClick={() => handleToggle(todo.id)}
                                        className={`${todo.done && 'complete'}`}
                                    >
                                        {idx + 1}. {todo.desc}
                                    </p>

                                    <button
                                        onClick={() => handleDelete(todo.id)}
                                        className="btn btn-danger"
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='col-5'>
                    <h4>Agregar TO-do</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text'
                            name='description'
                            className='form-control'
                            placeholder='Aprender ...'
                            autoComplete='off'
                            value={description}
                            onChange={handleInputChange}
                        />

                        <button
                            type='submit'
                            className='btn btn-outline-primary w-100 mt-1'
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
