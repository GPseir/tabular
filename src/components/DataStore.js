import React, { useState, useEffect } from "react";
import axios from 'axios';

export const MyContext = React.createContext()

function DataStore({ children }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(
            `https://jsonplaceholder.typicode.com/users`
        ).then(res => {
            console.log(res)
            setUsers(res.data)
        })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <MyContext.Provider value={[users, setUsers]}>
            {children}
        </MyContext.Provider>
    );

}

export default DataStore;