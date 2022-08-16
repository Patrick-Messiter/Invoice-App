import React from 'react'

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
                <p>{props.item.itemQty} x {`$${props.item.itemPrice}`}</p>
            </div>
            <p><span>{`$${props.item.itemQty * props.item.itemPrice}`}</span></p>
        </div>}
        </>
    )
}

export {InvoicePageItemCard}