import React from 'react'

import {MainPageInvoiceCard} from './MainPageInvoiceCard'


function MainPageInvoiceContainer (props) {

    //Function to toggle to selected InvoicePage onClick
    function toggleToSelectedInvoice (id) {
        return props.invoiceList.map(currentInv => {
            if (currentInv.id === id) {
                props.setSelectedInvoice(currentInv);
                props.setMainSectionToggle(false);
                props.setInvoiceSectionToggle(true)
            }
        })
    }

    const mapInvoices = props.invoiceList.map(currentInv => {
        return <MainPageInvoiceCard items={currentInv} key={currentInv.id} toggleToSelectedInvoice={() => toggleToSelectedInvoice(currentInv.id)} />
    })

    return (
        <div>
            {mapInvoices}
        </div>
    )
}

export {MainPageInvoiceContainer}