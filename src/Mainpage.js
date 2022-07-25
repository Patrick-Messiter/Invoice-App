import React from 'react'

import {MainPageHeader} from './MainPageHeader'
import {MainPageInvoiceContainer} from './MainPageInvoiceContainer'


function MainPage (props) {
    
    
    return (
        <main>
            <MainPageHeader
                setMainSectionToggle = {props.setMainSectionToggle}
                setFormSectionToggle = {props.setFormSectionToggle}
            />
            <MainPageInvoiceContainer 
                setMainSectionToggle = {props.setMainSectionToggle}
                setInvoiceSectionToggle = {props.setInvoiceSectionToggle}
                invoiceList = {props.invoiceList}
                setSelectedInvoice = {props.setSelectedInvoice}
            />
        </main>
    )
}

export {MainPage}