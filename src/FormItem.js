import React from 'react'

function FormItem (props) {
    return (
        <div className='FormItem-Container'>
            <input
                type="text"
                className='FormPage-Input glassMinor'
                onChange={props.alterItem}
                name= "itemName"
                value={props.item.itemName}
            />
            <input
                type="number"
                className='FormPage-Input glassMinor'
                onChange={props.alterItem}
                name= "itemQty"
                value={props.item.itemQty}
            />
            <input
                type="number"
                className='FormPage-Input glassMinor'
                onChange={props.alterItem}
                name= "itemPrice"
                value={props.item.itemPrice}
            />
            <p>{props.item.itemQty && props.item.itemPrice ? props.item.itemQty * props.item.itemPrice : 0}</p>
            <p onClick={props.deleteItem}>&#128465;</p>
        </div>
    )
}

export {FormItem}