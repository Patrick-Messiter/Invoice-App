import React from 'react'

function InvoicePageItemCard (props) {
    return (
        <div>
            <h5>{props.item.itemName}</h5>
            <h5>{props.item.itemQty}</h5>
            <h5>{props.item.itemPrice}</h5>
            <h5>Total: {props.item.itemQty * props.item.itemPrice}</h5>
        </div>
    )
}

export {InvoicePageItemCard}