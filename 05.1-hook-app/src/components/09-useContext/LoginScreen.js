import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const {user, setUser} = useContext(UserContext)

    const handleClick = (val) => {
        setUser(val);
        console.log("Data added");
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => handleClick({id: 1214, name:'Axel'})}
            >
                Login
            </button>
        </div>
    )
}
