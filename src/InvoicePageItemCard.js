import React from 'react'
import { formatNumber } from './GlobalFunctions'

function InvoicePageItemCard (props) {
    return (
        <>
        {props.windowWidth > 500 ? 
        <div className='InvoicePage-InvoiceListItem'>
            <p>{props.item.itemName}</p>
            <p>{props.item.itemQty}</p>
            <p>{`$${props.item.itemPrice}`}</p>
            <p><span>{`$${props.item.itemQty * props.item.itemPrice}`}</span></p>
        </div>: 
        <div className='InvoicePage-InvoiceListItem'>
            <div>
                <p><span>{props.item.itemName}</span></p>
                <p>{props.item.itemQty} x {`$${formatNumber(props.item.itemPrice)}`}</p>
            </div>
            <p><span>{`$${formatNumber(props.item.itemQty * props.item.itemPrice)}`}</span></p>
        </div>}
        </>
    )
}

export {InvoicePageItemCard}