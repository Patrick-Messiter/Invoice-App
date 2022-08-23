import React from 'react'
import { formatNumber } from './GlobalFunctions'

function FormItem (props) {
    return (
        <div className='FormItem-Container'>
            {props.windowWidth < 500 ? 
            <label className='FormItem-Item'>
                Item
                <input
                    type="text"
                    maxLength={20}
                    className='FormPage-Input glassMinor'
                    onChange={props.alterItem}
                    name= "itemName"
                    value={props.item.itemName}
                />
            </label> :
            <input
                type="text"
                maxLength={20}
                className='FormPage-Input glassMinor'
                onChange={props.alterItem}
                name= "itemName"
                value={props.item.itemName}
            />}
            {props.windowWidth < 500 ? 
            <label className='FormItem-Qty'>
                Qty
                <input
                    type="number"
                    max="999"
                    defaultValue={0}
                    className='FormPage-Input glassMinor'
                    onChange={props.alterItem}
                    name= "itemQty"
                    value={props.item.itemQty}
                />
            </label> :
            <input
                type="number"
                max="999"
                defaultValue={0}
                className='FormPage-Input glassMinor'
                onChange={props.alterItem}
                name= "itemQty"
                value={props.item.itemQty}
            />}
            {props.windowWidth < 500 ? 
            <label className='FormItem-Price'>
                Price
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
            </label> :
            <input
                type="number"
                step="0.1"
                max="999999"
                defaultValue={0}
                className='FormPage-Input glassMinor'
                onChange={props.alterItem}
                name= "itemPrice"
                value={props.item.itemPrice}
            />}
            {props.windowWidth < 500 ? 
            <p className='FormItem-Total'>Total: ${props.item.itemQty && props.item.itemPrice ? formatNumber(props.item.itemQty * props.item.itemPrice) : 0}</p>:
            <p className='FormItem-Total'>${props.item.itemQty && props.item.itemPrice ? formatNumber(props.item.itemQty * props.item.itemPrice) : 0}</p>}
            <p className='Trash-Icon' onClick={props.deleteItem}>&#128465;</p>
        </div>
    )
}

export {FormItem}