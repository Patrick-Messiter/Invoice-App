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
        return <li key={index} value={index +1} className="PositiveResponse" onClick={(e)=> selectDate(e)}>{currentDay}</li>
    })
    
    return (
        <div className='Calendar-Wrapper'>
            <div className='Calendar-Top FormPage-Input glassMinor'onClick={toggleContainer}>
                <p className='Calendar-Date'>{props.windowWidth < 500 ? `${props.invoiceDate.day} / ${props.invoiceDate.month} / ${props.invoiceDate.year}`:
                `${props.invoiceDate.day} ${props.invoiceDate.monthName} ${props.invoiceDate.year}`}</p>
                <p>&#128197;</p>
            </div>
            {toggleCalendar &&
            <div className='Calendar-Bottom-Container glassMinor'>
                <div className='Calendar-Bottom-Header'>
                    <p className='Arrow-Font' onClick={(e) => {earlierMonth(); decrementYear(e)}}>&#8592;</p>
                    {calendarDates.months[props.invoiceDate.month].name}
                    <p className='Arrow-Font' onClick={(e) => {laterMonth(); incrementYear(e)}}>&#8594;</p>
                </div>
                <div className='Calendar-Bottom-ListContainer'>
                    <ul className='Calendar-Bottom-List'>
                         {mapCalendar}
                    </ul>
                </div> 
            </div>}
        </div>
    )
}

export {Calendar}