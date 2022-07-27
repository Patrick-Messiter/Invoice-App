import React from 'react'

function Navbar (props) {

    function toggleModes () {
        props.setToggleDarkMode(prevMode => !prevMode)
    }

    return (
        <nav>
            <h2>This is the navbar</h2>
            <p onClick={toggleModes}>Click me!</p>
        </nav>
    )
}

export {Navbar}