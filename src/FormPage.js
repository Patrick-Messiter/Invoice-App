import React from 'react'

import {generateRandomId, generateCurrentDate} from './GlobalFunctions'
import { Calendar } from './Calendar'
import {FormItem} from './FormItem'
import { CustomSelect } from './CustomSelect'


function FormPage (props) {
    const [formData, setFormData] = React.useState(
        {id: generateRandomId()}
    )

    //State for Payment Option custom select
    const [paymentTerms, setPaymentTerms] = React.useState()

    //State for Invoice Date component
    const [invoiceDate, setInvoiceDate] = React.useState(generateCurrentDate())

    //State for handling addition or subtraction of items in form
    const [itemList, setItemList] = React.useState([])

    function toggleMain () {
        props.setFormSectionToggle(false)
        props.setMainSectionToggle(true)
    }

    function handleChange(event) {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    React.useEffect(()=> {
        setFormData(prevData => {
            return {
                ...prevData,
                items: itemList,
                paymentTerms: paymentTerms,
                invoiceDate: invoiceDate
            }
        })
    }, [itemList, paymentTerms, invoiceDate])

    
    function handleSubmit(event) {
        event.preventDefault()
        props.setInvoiceList(prevList => {
            return [
                ...prevList,
                formData
            ]
        })
        toggleMain()
    }

    // Section for handling item components in form

    function addFormItem (event) {
        event.preventDefault()
        setItemList(prevList => {
            return (
                [...prevList,
                    {
                        id: generateRandomId(),
                        [event.target.name]: event.target.value
                    }
                ]
            )
        })
    }

    function alterItem (id, event) {
        setItemList(prevList => {
            return prevList.map(currentItem => {
                if (currentItem.id === id) {
                    return {
                        ...currentItem,
                        [event.target.name]: event.target.value
                    }
                }
                else {
                    return {...currentItem}
                }
            })
        })
    }

    function deleteItem (id) {
        setItemList(prevList => {
            return prevList.filter(currentItem => currentItem.id !== id)
        })
    }

    const mappedItems = itemList.map((currentItem) => {
        return (
            <FormItem
                item = {currentItem}
                id = {currentItem.id}
                key = {currentItem.id}
                alterItem = {(event) => alterItem(currentItem.id, event)}
                deleteItem = {() => deleteItem(currentItem.id)} 
            />
        )
    })

    return (
        <div>
            <h2>New {formData.id}</h2>
            <form onSubmit={handleSubmit}>
                <h4>Bill From</h4>
                <label>
                    Street Address
                    <input
                        type="text"
                        onChange={handleChange}
                        name="fromAddress"
                        value={formData.fromAddress}
                    />
                </label>
                <label>
                    City
                    <input
                        type="text"
                        onChange={handleChange}
                        name="fromCity"
                        value={formData.fromCity}
                    />
                </label>
                <label>
                    Post Code
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="fromPost"
                        value={formData.fromPost}
                    />
                </label>
                <label>
                    Country
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="fromCountry"
                        value={formData.fromCountry}
                    />
                </label>
                <h4>Bill To</h4>
                <label>
                    Client's Name
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="toName"
                        value={formData.toName}
                    />
                </label>
                <label>
                    Client's Email
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="toEmail"
                        value={formData.toEmail}
                    />
                </label>
                <label>
                    Street Address
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="toAddress"
                        value={formData.toAddress}
                    />
                </label>
                <label>
                    City
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="toCity"
                        value={formData.toCity}
                    />
                </label>
                <label>
                    Post Code
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="toPost"
                        value={formData.toPost}
                    />
                </label>
                <label>
                    Country
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="toCountry"
                        value={formData.toCountry}
                    />
                </label>
                <label>
                    Invoice Date
                    <Calendar 
                        invoiceDate = {invoiceDate}
                        setInvoiceDate = {setInvoiceDate}
                    />
                </label>
                <label>
                    Payment Terms
                    <CustomSelect 
                        itemList = {["Net 7 days", "Net 14 days", "Net 30 days", "Net 90 days"]}
                        selectedOption = {paymentTerms}
                        setSelectedOption = {setPaymentTerms}
                        default = {"Select an option"}
                    />
                </label>
                <label>
                    Project Description
                    <input
                        type="text"
                        onChange={handleChange}
                        name="project"
                        value={formData.project}
                    />
                </label>
                <div>
                    <h4>Item List</h4>
                    <label>Item Name</label>
                    <label>Qty.</label>
                    <label>Price</label>
                    <label>Total</label>
                    {mappedItems}
                    <button type='button' onClick={addFormItem}>Add New Item</button>
                </div>
                <button>Complete</button>
            </form>
            <button onClick={toggleMain}>Cancel</button>
        </div>
    )
}
export {FormPage}