import React from 'react'

function Navbar (props) {

    function toggleModes () {
        props.setToggleDarkMode(prevMode => !prevMode)
    }

    return (
        <nav>
            {props.toggleDarkMode ? 
            <button className='Button glassMinor' onClick={toggleModes}>Dark Mode: &#127769;</button>
            : <button className='Button glassMinor' onClick={toggleModes}>Light Mode: &#128161;</button>}
        </nav>
    )
}

export {Navbar}