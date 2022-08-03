import React from 'react'
import {AnimatePresence} from "framer-motion"

import {MainPageHeader} from './MainPageHeader'
import {MainPageInvoiceContainer} from './MainPageInvoiceContainer'
import {FormPage} from './FormPage';


function MainPage (props) {
    
    //Used to filter through the Invoices on the Mainpage container
    const [filteredListChoice, setFilteredListChoice] = React.useState()

    function filteringList () {
        /*if (filteredListChoice === "Status") {
            WORK SOMETHING OUT FOR THIS AS CURRENTLY JUST PUSHING AN OBJECT  OBJECT
            const filteredItems = props.invoiceList.filter(currentItem => currentItem.status !== "Outstanding")
            console.log(`These are the ${filteredItems}`)
            props.setInvoiceList(prevList => {
                return [
                    ...prevList,
                    prevList.push(filteredItems)
                ]
            })
        } */
        if (filteredListChoice === "Total Value") {
            props.setInvoiceList(prevList => prevList.sort((a,b) => a.paymentTotal - b.paymentTotal))
        }
    }

    React.useEffect(()=> {
        filteringList()
    }, [filteredListChoice])
    
    return (
        <main className='MainPage-Container'>
            <MainPageHeader
                setMainSectionToggle = {props.setMainSectionToggle}
                setFormSectionToggle = {props.setFormSectionToggle}
                invoiceList = {props.invoiceList}
                filteredListChoice = {filteredListChoice}
                setFilteredListChoice = {setFilteredListChoice}
            />
            <MainPageInvoiceContainer 
                setMainSectionToggle = {props.setMainSectionToggle}
                setInvoiceSectionToggle = {props.setInvoiceSectionToggle}
                invoiceList = {props.invoiceList}
                toggleDarkMode = {props.toggleDarkMode}
                setSelectedInvoice = {props.setSelectedInvoice}
                filteredListChoice = {filteredListChoice}
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