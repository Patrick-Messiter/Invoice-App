import React from 'react'

import {MainPageHeader} from './MainPageHeader'
import {MainInvoiceCard} from './MainInvoiceCard'
import {MainInvoiceContainer} from './MainInvoiceContainer'


function MainPage (props) {
    
    function testButton () {
        props.setInvoiceList(prevState => {
            return (
                [...prevState, 
                {
                    id: "#VZ8465",
                    username: "Delilah Ridings",
                    value: 312,
                    status: "pending",
                }]
            )
        })
    }

    const mapInvoices = props.invoiceList.map(currentInv => {
        return <MainInvoiceCard items={currentInv} />
    })
    
    return (
        <main>
            <MainPageHeader
                setMainSectionToggle = {props.setMainSectionToggle}
                setFormSectionToggle = {props.setFormSectionToggle}
            />
            <button onClick={testButton}>Click for Invoice!</button>
            <MainInvoiceContainer mapInvoices ={mapInvoices} />
        </main>
    )
}

export {MainPage}