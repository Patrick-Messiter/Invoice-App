import React from 'react'
import {motion} from "framer-motion"

import {generateRandomId, generateCurrentDate} from './GlobalFunctions'
import { Calendar } from './Calendar'
import {FormItem} from './FormItem'
import { CustomSelect } from './CustomSelect'
import { FormWarning } from './FormWarning'

const animation = {
    key: "form",
    initial: {x:"-100%"},
    animate: {x: 0, scale: 1},
    transition: {duration: 0.5},
    exit: {x:"-100%", scale: 0},
}


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

    //State for confirming form validation before handling submit
    const [formValidation, setFormValidation] = React.useState(false)
    const [formWarningToggle, setFormWarningToggle] = React.useState(false)


    //State change if editing a current invoice rather than creating a new invoice

    React.useEffect (()=> {
        if (props.invoice) {
            setFormData(props.invoice)
            setPaymentTerms(props.invoice.paymentTerms)
            setInvoiceDate(props.invoice.invoiceDate)
            setItemList(props.invoice.items)
        }
    }, [])

    function toggleForm () {
        props.setFormSectionToggle(false)
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
                paymentTotal: invoiceTotal(),
                paymentTerms: paymentTerms,
                invoiceDate: invoiceDate,
                status: "Outstanding",
            }
        })
    }, [itemList, paymentTerms, invoiceDate])

    function invoiceTotal () {
        let total = 0;
        if (itemList.length > 0 && itemList[0].itemQty && itemList[0].itemPrice) {
            itemList.map(currentItem => {
                total += Number(currentItem.itemQty) * Number(currentItem.itemPrice)
            })
        }
        return total
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

    //Form Submission section

    function formValidationCheck () {
        console.log(formData)
        if (formData.fromAddress && formData.fromCity &&
            formData.fromCountry && formData.fromPost &&
            formData.toName && formData.toEmail){
                setFormValidation(true)
        }
        console.log(formValidation)
    }

    React.useEffect(()=> {
        formValidationCheck()
    }, [formData])
    
    function handleSubmit(event) {
        event.preventDefault()

        if (!formValidation) {
            setFormWarningToggle(true)
        }

        if (formValidation) {
            props.setInvoiceList(prevList => {
                return prevList.filter(currentItem => currentItem.id !== formData.id)
            })
    
            props.setInvoiceList(prevList => {
                return [
                    ...prevList,
                    formData
                ]
            })
            toggleForm()
        }
    }

    return (
    <motion.div {...animation} className='FormPage-Wrapper glassMinor'>
        <div className='FormPage-Container'>
            <h2>New {formData.id}</h2>
            <form className='Form' onSubmit={handleSubmit}>
                <h4>Bill From</h4>
                <div className='FormPage-FromContainer'>
                    <div className='FormPage-From-StreetAddress-Container'>
                        <label>Street Address</label>
                        <input
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="fromAddress"
                            value={formData.fromAddress}
                        />
                    </div>
                    <label>
                        City
                        <input
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="fromCity"
                            value={formData.fromCity}
                        />
                    </label>
                    <label>
                        Post Code
                        <input 
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="fromPost"
                            value={formData.fromPost}
                        />
                    </label>
                    <label>
                        Country
                        <input 
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="fromCountry"
                            value={formData.fromCountry}
                        />
                    </label>
                </div>
                <h4>Bill To</h4>
                <div className='FormPage-ToContainer'>
                    <label className='FormPage-ToName'>
                        Client's Name
                        <input
                            className='FormPage-Input glassMinor' 
                            type="text"
                            onChange={handleChange}
                            name="toName"
                            value={formData.toName}
                        />
                    </label>
                    <label className='FormPage-ToEmail'>
                        Client's Email
                        <input
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="toEmail"
                            value={formData.toEmail}
                        />
                    </label>
                    <label className='FormPage-ToAddress'>
                        Street Address
                        <input
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="toAddress"
                            value={formData.toAddress}
                        />
                    </label>
                    <label className='FormPage-ToCity'>
                        City
                        <input 
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="toCity"
                            value={formData.toCity}
                        />
                    </label>
                    <label>
                        Post Code
                        <input 
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="toPost"
                            value={formData.toPost}
                        />
                    </label>
                    <label>
                        Country
                        <input 
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="toCountry"
                            value={formData.toCountry}
                        />
                    </label>
                </div>
                <div className='FormPage-To-Invoice-Container'>
                    <div className='Formpage-Calender-Container'>
                        <label>Invoice Date
                            <Calendar 
                                invoiceDate = {invoiceDate}
                                setInvoiceDate = {setInvoiceDate}
                            />
                        </label>
                    </div>
                    <div className='FormPage-CustomSelect-Container'>
                        <label>Payment Terms
                            <CustomSelect 
                                itemList = {["Net 7 days", "Net 14 days", "Net 30 days", "Net 90 days"]}
                                selectedOption = {paymentTerms}
                                setSelectedOption = {setPaymentTerms}
                                default = {"Select an option"}
                            />
                        </label>
                    </div>
                    <label className='FormPage-Project'>
                        Project Description
                        <input
                            className='FormPage-Input glassMinor'
                            type="text"
                            onChange={handleChange}
                            name="project"
                            value={formData.project}
                        />
                    </label>
                </div>
                <h4>Item List</h4>
                <div className='FormPage-ItemContainer'>
                    <div className='FormPage-Item-LabelContainer'>
                        <label>Item Name</label>
                        <label>Qty.</label>
                        <label>Price</label>
                        <label>Total</label>
                    </div>
                    {mappedItems}
                    <button type='button' className='FormPage-ItemContainer-Button glassMinor PositiveResponse' onClick={addFormItem}>Add New Item</button>
                </div>
                <div className='FormPage-Bottom'>
                    <button type='button' onClick={toggleForm} className="Button NegativeResponse glassMinor">Cancel</button>
                    <button className='Button PositiveResponse glassMinor'>Complete</button>
                </div>
            </form>
        </div>
        {formWarningToggle && <FormWarning
        setFormWarningToggle = {setFormWarningToggle}
        />}
    </motion.div>
    )
}
export {FormPage}