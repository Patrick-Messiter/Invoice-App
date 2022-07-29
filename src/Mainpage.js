import React from 'react'

import {MainPageHeader} from './MainPageHeader'
import {MainPageInvoiceContainer} from './MainPageInvoiceContainer'
import {FormPage} from './FormPage';


function MainPage (props) {
    
    
    return (
        <main className='MainPage-Container'>
            <MainPageHeader
                setMainSectionToggle = {props.setMainSectionToggle}
                setFormSectionToggle = {props.setFormSectionToggle}
                invoiceList = {props.invoiceList}
            />
            <MainPageInvoiceContainer 
                setMainSectionToggle = {props.setMainSectionToggle}
                setInvoiceSectionToggle = {props.setInvoiceSectionToggle}
                invoiceList = {props.invoiceList}
                toggleDarkMode = {props.toggleDarkMode}
                setSelectedInvoice = {props.setSelectedInvoice}
            />
            {props.formSectionToggle && 
            <FormPage 
                setInvoiceList = {props.setInvoiceList}
                formSectionToggle = {props.formSectionToggle}
                setFormSectionToggle = {props.setFormSectionToggle}
            />
            }
        </main>
    )
}

export {MainPage}