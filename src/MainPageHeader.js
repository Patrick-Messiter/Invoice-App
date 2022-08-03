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
            <CustomSelect 
                itemList = {["Total Value", "Status"]}
                default={"Choose a filter to sort by:"}
                selectedOption = {props.filteredListChoice}
                setSelectedOption = {props.setFilteredListChoice}
            />
            <button onClick={toggleForm}>New Invoice</button>
        </header>
    )
}

export {MainPageHeader}