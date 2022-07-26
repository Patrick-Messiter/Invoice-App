import React from 'react'

import {calendarDates} from './GlobalFunctions'

function Calendar (props) {
    
    const [toggleCalendar, setToggleCalendar] = React.useState(false)

    function toggleContainer () {
        setToggleCalendar(!toggleCalendar)
    }

    function earlierMonth () {
        if (props.invoiceDate.month > 0) {
            props.setInvoiceDate(prevInvoice => {
                return {
                    ...prevInvoice,
                    month: prevInvoice.month - 1 
                }
            })
        }
    }

    function laterMonth () {
        if (props.invoiceDate.month < 11) {
            props.setInvoiceDate(prevInvoice => {
                return {
                    ...prevInvoice,
                    month: prevInvoice.month + 1
                }
            })
        }
    }

    function incrementYear (event) {
        if (event && props.invoiceDate.month === 11) {
            props.setInvoiceDate(prevInvoice => {
                return {
                    ...prevInvoice,
                    month: 0,
                    year: prevInvoice.year + 1
                }
            })
        }
    }

    function decrementYear (event) {
        if (event && props.invoiceDate.month === 0) {
            props.setInvoiceDate(prevInvoice => {
                return {
                    ...prevInvoice,
                    month: 11,
                    year: prevInvoice.year - 1
                }
            })
        }
    }

    function selectDate (event) {
        props.setInvoiceDate(prevInvoice => {
            return {
                ...prevInvoice,
                day: event.target.value,
                monthName: calendarDates.months[prevInvoice.month].name
            }
        })
    }
    
    const mapCalendar = calendarDates.months[props.invoiceDate.month].days.map((currentDay, index) => {
        return <li key={index} value={index +1} onClick={(e)=> selectDate(e)}>{currentDay}</li>
    })
    
    return (
        <div className='Calendar-Wrapper'>
            <div className='Calendar-Container'>
                <div onClick={toggleContainer}>
                    <p>{`${props.invoiceDate.day} ${props.invoiceDate.monthName} ${props.invoiceDate.year}`}</p>
                </div>
                {toggleCalendar &&
                <div>
                    <p onClick={(e) => {earlierMonth(); decrementYear(e)}}>left</p>
                    {calendarDates.months[props.invoiceDate.month].name}
                    <p onClick={(e) => {laterMonth(); incrementYear(e)}}>right</p> 
                    <ul>
                        {mapCalendar}
                    </ul>
                </div>}
            </div>
            
        </div>
    )
}

export {Calendar}