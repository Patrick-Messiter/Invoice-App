import React from 'react'
import {CustomSelect} from './CustomSelect'

function MainPageHeader (props) {

    function toggleForm () {
        props.setFormSectionToggle(true)
    }

    return (
        <header className='MainPage-Header-Container'>
            <div>
                <h1>Invoices</h1>
                <p>There are currently {props.invoiceList.length} invoices</p>
            </div>
            <CustomSelect itemList = {[]} default={"Filter by status"} />
            <button onClick={toggleForm}>New Invoice</button>
        </header>
    )
}

export {MainPageHeader}