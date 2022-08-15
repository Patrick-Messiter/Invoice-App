import React from 'react'

function FormWarning (props) {
    return (
        <div className='FormWarning-Wrapper'>
            <div className='FormWarning-Container'>
                <h4>Warning!</h4>
                <div className='FormWarning-Bottom'>
                    <p>Some of this form is blank.</p>
                    <p>Please ensure, at minimum, the billing from section and client's name and email contain an entry.</p>
                    <button className='Button PositiveResponse glassMinor' onClick={()=> props.setFormWarningToggle(false)}>Okay.</button>
                </div>
            </div>
        </div>
    )
}

export {FormWarning}