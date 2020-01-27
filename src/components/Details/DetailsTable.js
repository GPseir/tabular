import React from 'react';
import auth from '../../auth';
import { history } from '../Login/history'
import DetailsTableData from './DetailsTableData'
import DetailsTableHeader from './DetailsTableHeader'
import './DetailsTable.css'

const DetailsTable = () => {

    return (
        <>
            <div className='dtable' >
                <button className='goBack' onClick={() => {
                    auth.goBack(() => {
                        history.push("/table")
                    })
                }}>Go Back</button>
                <div className='dheader'>
                    <h1 id='dtitle'>User Details</h1>
                </div>


                <table id='dusers'>
                    <tbody >
                        <DetailsTableHeader />
                        <DetailsTableData />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DetailsTable 