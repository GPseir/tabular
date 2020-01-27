import React, { useContext } from 'react';
import { history } from '../Login/history'
import { MyContext } from '../DataStore';
import auth from '../../auth'

const TableData = () => {

    const [users] = useContext(MyContext)

    return users.map((user, index) => {
        const { id, name, username, email } = user
        //destructuring

        return (
            <tr key={index} onClick={() => {
                //console.log("Clicked", id)
                auth.clickItem(id, () => {
                    history.push("/details/" + id)
                })
            }}
            >
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
            </tr>

        )
    })
}

export default TableData