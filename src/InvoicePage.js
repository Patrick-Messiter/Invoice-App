import React from 'react'
import {AnimatePresence} from "framer-motion"


import {InvoicePageItemCard} from './InvoicePageItemCard'
import {FormPage} from './FormPage';


function InvoicePage (props) {

    function toggleMain () {
        props.setInvoiceSectionToggle(false)
        props.setMainSectionToggle(true)
    }

    function cleanState () {
        props.setSelectedInvoice()
    }


    function toggleForm () {
        props.setFormSectionToggle(prev => !prev)
    }

    function deleteInvoice () {
        props.setInvoiceList(prevList => {
            return prevList.filter(currentItem => currentItem.id !== props.invoice.id)
        })
    }

    function payInvoice () {
        props.setSelectedInvoice(prevInvoice => {
            return {
                ...prevInvoice,
                status: "Paid"
            }
        })
        props.setInvoiceList(prevList => {
            return prevList.map(currentItem => {
                return currentItem.id === props.invoice.id ? {...currentItem, status: "Paid"} : {...currentItem}
            })
        })
    }

    const mapInvoiceItems = props.invoice.items.map(currentItem => {
        return <InvoicePageItemCard key={currentItem.id} item = {currentItem}/>
    })

    return (
        <section className='InvoicePage-Container'>
            <button className="Button glassMinor NegativeResponse backButton" onClick={() =>{cleanState();toggleMain()}}>Go back</button>
            <div className='InvoicePage-TopContainer glassMinor'>
                <p>Status: {props.invoice.status} </p>
                <div className='InvoicePage-TopContainer-ButtonsContainer'>
                    <button onClick={toggleForm} className='Button PositiveResponse glassMinor'>Edit</button>
                    <button onClick={()=>{deleteInvoice();toggleMain()}} className='Button NegativeResponse glassMinor'>Delete</button>
                    <button onClick={payInvoice} className='Button PositiveResponse glassMinor'>Mark as Paid</button>
                </div>
            </div>
            <div className='InvoicePage-MainContainer glassMinor'>
                <div className='InvoicePage-BillFromContainer'>
                    <div>
                        <h4>#{props.invoice.id}</h4>
                        <div className='InvoicePage-Dates'>
                            <p>Invoice Date: <span>{`${props.invoice.invoiceDate.day} ${props.invoice.invoiceDate.monthName} ${props.invoice.invoiceDate.year}`}</span></p>
                            <p>Payment Terms: <span>{props.invoice.paymentTerms}</span></p>
                            <p>Project Description: <span>{props.invoice.project}</span></p>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>{props.invoice.fromAddress}</li>
                            <li>{props.invoice.fromCity}</li>
                            <li>{props.invoice.fromCountry}</li>
                            <li>{props.invoice.fromPost}</li>
                        </ul>
                    </div>
                </div>
                <div className='InvoicePage-BillToContainer'>
                    <div className='InvoicePage-ClientDetails'>
                        <p>Bill To</p>
                        <ul>
                            <li>{props.invoice.toName}</li>
                            <li>{props.invoice.toAddress} {props.invoice.toCity}</li>
                            <li>{props.invoice.toCountry} {props.invoice.toPost}</li>
                        </ul>
                    </div>
                    <div className='InvoicePage-ClientEmail'>
                        <p>Sent To</p>
                        <h4>{props.invoice.toEmail}</h4>
                    </div>
                </div>
                <div className='InvoicePage-InvoiceContainer glassMinor'>
                    <div className='InvoicePage-InvoiceHeadings'>
                        <p>Item Name</p>
                        <p>Qty.</p>
                        <p>Price</p>
                        <p>Total</p>
                    </div>
                    <div className='InvoicePage-InvoiceList'>
                        {mapInvoiceItems}
                    </div>
                    <div className='InvoicePage-InvoiceTotal'>
                        <p>Total Outstanding:</p>
                        <span>{`$${props.invoice.paymentTotal}`}</span>
                    </div>
                </div>
            </div>
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
        </section>
    )
}

export {InvoicePage}