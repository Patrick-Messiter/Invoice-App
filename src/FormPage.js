import React from 'react'

import {generateRandomId} from './GlobalFunctions'

function FormPage (props) {
    const [formData, setFormData] = React.useState(
        {id: generateRandomId()}
    )

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

    function handleSubmit(event) {
        event.preventDefault()
        props.setInvoiceList(prevList => {
            return [
                ...prevList,
                formData
            ]
        })
    }

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
                    Street Address
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="toPost"
                        value={formData.toPost}
                    />
                </label>
                <label>
                    Street Address
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="toCountry"
                        value={formData.toCountry}
                    />
                </label>
                <label>
                    Invoice Date
                    {
                    //WORK FURTHER ON THIS add calendar think it would be custom select
                    }
                </label>
                <label>
                    Payment Terms
                    {
                        //WORK FURTHER ON THIS custom select option
                    }
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
                {
                    //WORK ON ITEM LIST COMPONENT TO ADD IT HERE
                }
                <button>Complete</button>
            </form>
            <button onClick={toggleMain}>Cancel</button>
        </div>
    )
}
export {FormPage}