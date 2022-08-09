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

    function mappingInvoices () {
        if (props.filteredListChoice && props.filteredListChoice !== "None") {
            return props.filteredList.map(currentInv => {
                return (
                    <MainPageInvoiceCard 
                        invoice={currentInv} 
                        key={currentInv.id} 
                        toggleDarkMode={props.toggleDarkMode}
                        toggleToSelectedInvoice={() => toggleToSelectedInvoice(currentInv.id)}
                    />
                )
            })
        }
        return props.invoiceList.map(currentInv => {
            return (
                <MainPageInvoiceCard 
                    invoice={currentInv} 
                    key={currentInv.id} 
                    toggleDarkMode={props.toggleDarkMode}
                    toggleToSelectedInvoice={() => toggleToSelectedInvoice(currentInv.id)}
                />
            )
        })
    }

    return (
        <div className='MainPage-Invoice-Container'>
            {mappingInvoices()}
        </div>
    )
}

export {MainPageInvoiceContainer}