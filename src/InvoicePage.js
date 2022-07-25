import React from 'react'

import {InvoicePageItemCard} from './InvoicePageItemCard'

function InvoicePage (props) {

    function toggleMain () {
        props.setInvoiceSectionToggle(false)
        props.setMainSectionToggle(true)
    }

    const mapInvoiceItems = props.invoice.items.map(currentItem => {
        return <InvoicePageItemCard key={currentItem.id} item = {currentItem}/>
    })

    function invoiceTotal () {
        let total = 0;
        props.invoice.items.map(currentItem => {
            total += Number(currentItem.itemQty) * Number(currentItem.itemPrice)
        })
        return total
    }

    return (
        <section>
            <button onClick={toggleMain}>Go back</button>
            <div className='InvoicePage-TopContainer'>

            </div>
            <div className='InvoicePage-MainContainer'>
                <div className='InvoicePage-BillFromContainer'>
                    <div>
                        <h4>{props.invoice.id}</h4>
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
                    <div className='InvoicePage-Dates'>
                        <p>Invoice Date</p>
                        <p>Payment Terms</p>
                    </div>
                    <div className='InvoicePage-ClientDetails'>
                        <p>Bill To</p>
                        <ul>
                            <li>{props.invoice.toName}</li>
                            <li>{props.invoice.toAddress}</li>
                            <li>{props.invoice.toCity}</li>
                            <li>{props.invoice.toCountry}</li>
                            <li>{props.invoice.toPost}</li>
                        </ul>
                    </div>
                    <div className='InvoicePage-ClientEmail'>
                        <p>Sent To</p>
                        <h4>{props.invoice.toEmail}</h4>
                    </div>
                </div>
                <div className='InvoicePage-InvoiceContainer'>
                    <div className='InvoicePage-InvoiceList'>
                        {mapInvoiceItems}
                    </div>
                    <div className='InvoicePage-InvoiceTotal'>
                        <p>Billings:</p>
                        <h3>{invoiceTotal()}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {InvoicePage}