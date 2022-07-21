import React from 'react'
import {CustomSelect} from './CustomSelect'

function MainPageHeader (props) {

    function toggleForm () {
        props.setMainSectionToggle(false)
        props.setFormSectionToggle(true)
    }

    return (
        <header>
            <h1>Invoices</h1>
            <CustomSelect />
            <button onClick={toggleForm}>New Invoice</button>
        </header>
    )
}

export {MainPageHeader}