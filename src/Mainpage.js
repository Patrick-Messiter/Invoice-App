import React from 'react'
import {AnimatePresence} from "framer-motion"

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
                sortedListChoice = {props.sortedListChoice}
                setSortedListChoice = {props.setSortedListChoice}
                filteredListChoice = {props.filteredListChoice}
                setFilteredListChoice = {props.setFilteredListChoice}
            />
            <MainPageInvoiceContainer 
                setMainSectionToggle = {props.setMainSectionToggle}
                setInvoiceSectionToggle = {props.setInvoiceSectionToggle}
                invoiceList = {props.invoiceList}
                toggleDarkMode = {props.toggleDarkMode}
                setSelectedInvoice = {props.setSelectedInvoice}
                sortedListChoice = {props.sortedListChoice}
                filteredList = {props.filteredList}
                filteredListChoice = {props.filteredListChoice}
            />
            <AnimatePresence>
                {props.formSectionToggle && 
                <FormPage 
                    setInvoiceList = {props.setInvoiceList}
                    invoice = {props.invoice}
                    formSectionToggle = {props.formSectionToggle}
                    setFormSectionToggle = {props.setFormSectionToggle}
                />
                }
            </AnimatePresence>
        </main>
    )
}

export {MainPage}