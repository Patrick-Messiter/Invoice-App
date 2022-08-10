import React from 'react'
import {CustomSelect} from './CustomSelect'

function MainPageHeader (props) {

    function toggleForm () {
        props.setFormSectionToggle(true)
    }

    return (
        <header className='MainPage-Header-Container'>
            <div className='MainPage-Title-Container'>
                <h1>Invoices</h1>
                <p>{props.invoiceList.length} invoices</p>
            </div>
            <div className='MainPage-Filter-Container'>
                <p>Filter By:</p>
                <CustomSelect 
                    itemList = {["Greater than $100", "Less than $100", "Paid", "Outstanding", "Overdue", "None"]}
                    default={"Choose a filter:"}
                    selectedOption = {props.filteredListChoice}
                    setSelectedOption = {props.setFilteredListChoice}
                />
            </div>
            <div className='MainPage-Sort-Container'>
                <p>Sort By:</p>
                <CustomSelect 
                    itemList = {["Total Value", "Status", "Due Date"]}
                    default={"Choose a filter:"}
                    selectedOption = {props.sortedListChoice}
                    setSelectedOption = {props.setSortedListChoice}
                />
            </div>
            <button className= "Button glassMinor PositiveResponse" onClick={toggleForm}>New Invoice</button>
        </header>
    )
}

export {MainPageHeader}