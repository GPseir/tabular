import React from 'react';
import auth from '../../auth';
import { history } from '../Login/history'
import TableHeader from './TableHeader';
import TableData from './TableData';
import './Table.css'

const Table = () => {

    return (
        <>
            <div className='table'>
                <div className='logged'>Logged in as:
                    <br /><span id='logged'>{auth.value}</span></div>
                <button className='logout' onClick={() => {
                    auth.logout(() => {
                        history.push("/")
                    })
                }}>Logout</button>

                <div className='table' >
                    <div className='header'>
                        <h1 id='title'>List Of Users</h1>
                    </div>


                    <table id='users'>
                        <tbody >
                            <TableHeader />
                            <TableData />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table 