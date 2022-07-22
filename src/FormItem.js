import React from 'react'

function FormItem (props) {
    return (
        <div>
            <p>{props.id}</p>
            <input
                type="text"
                onChange={props.alterItem}
                name= "itemName"
                value={props.item.itemName}
            />
            <input
                type="number"
                onChange={props.alterItem}
                name= "itemQty"
                value={props.item.itemQty}
            />
            <input
                type="number"
                onChange={props.alterItem}
                name= "itemPrice"
                value={props.item.itemPrice}
            />
            <p>{props.item.itemQty && props.item.itemPrice ? props.item.itemQty * props.item.itemPrice : 0}</p>
            <p onClick={props.deleteItem}>Trash/Delete item</p>
        </div>
    )
}

export {FormItem}