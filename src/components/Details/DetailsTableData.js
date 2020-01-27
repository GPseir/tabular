import React, { useContext } from 'react';
import { MyContext } from '../DataStore';
import auth from '../../auth'


const DetailsTableData = () => {

    const [users] = useContext(MyContext)

    const { id, name, username, email, address, phone, website, company
    } = users[auth.id]  //destructuring

    return (
        <tr key={id}
        >
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{address.city}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td>{company.name}</td>
        </tr>

    )

}

export default DetailsTableData