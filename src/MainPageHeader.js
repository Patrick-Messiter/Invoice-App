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
            <div>
                <p>Filter By:</p>
                <CustomSelect 
                    itemList = {["Greater than $100", "Less than $100", "Paid", "Outstanding", "Overdue", "None"]}
                    default={"Choose a filter to filter by:"}
                    selectedOption = {props.filteredListChoice}
                    setSelectedOption = {props.setFilteredListChoice}
                />
            </div>
            <div>
                <p>Sort By:</p>
                <CustomSelect 
                    itemList = {["Total Value", "Status", "Due Date"]}
                    default={"Choose a filter to sort by:"}
                    selectedOption = {props.sortedListChoice}
                    setSelectedOption = {props.setSortedListChoice}
                />
            </div>
            <button className= "Button glassMinor PositiveResponse" onClick={toggleForm}>New Invoice</button>
        </header>
    )
}

export {MainPageHeader}