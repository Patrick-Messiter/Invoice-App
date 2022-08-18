import React from 'react'

function FormItem (props) {
    return (
        <div className='FormItem-Container'>
            <input
                type="text"
                maxLength={20}
                className='FormPage-Input glassMinor'
                onChange={props.alterItem}
                name= "itemName"
                value={props.item.itemName}
            />
            <input
                type="number"
                max="999"
                defaultValue={0}
                className='FormPage-Input glassMinor'
                onChange={props.alterItem}
                name= "itemQty"
                value={props.item.itemQty}
            />
            <input
                type="number"
                step="0.1"
                max="999999"
                defaultValue={0}
                className='FormPage-Input glassMinor'
                onChange={props.alterItem}
                name= "itemPrice"
                value={props.item.itemPrice}
            />
            <p>{props.item.itemQty && props.item.itemPrice ? props.item.itemQty * props.item.itemPrice : 0}</p>
            <p className='Trash-Icon' onClick={props.deleteItem}>&#128465;</p>
        </div>
    )
}

export {FormItem}