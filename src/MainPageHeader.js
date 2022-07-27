import React from 'react'
import {CustomSelect} from './CustomSelect'

function MainPageHeader (props) {

    function toggleForm () {
        props.setMainSectionToggle(false)
        props.setFormSectionToggle(true)
    }

    return (
        <header className='MainPage-Header-Container'>
            <div>
                <h1>Invoices</h1>
                <p>There are currently {props.invoiceList.length} invoices</p>
            </div>
            <CustomSelect itemList = {[]} />
            <button onClick={toggleForm}>New Invoice</button>
        </header>
    )
}

export {MainPageHeader}