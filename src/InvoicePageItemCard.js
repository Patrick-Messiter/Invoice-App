import React from 'react'

function InvoicePageItemCard (props) {
    return (
        <div className='InvoicePage-InvoiceListItem'>
            <p>{props.item.itemName}</p>
            <p>{props.item.itemQty}</p>
            <p>{`$${props.item.itemPrice}`}</p>
            <p><span>{`$${props.item.itemQty * props.item.itemPrice}`}</span></p>
        </div>
    )
}

export {InvoicePageItemCard}