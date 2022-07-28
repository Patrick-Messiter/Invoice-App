import React from 'react'

function CustomSelect (props) {
    
    const [toggleSelect, setToggleSelect] = React.useState(false)

    function toggleOptions () {
        setToggleSelect(!toggleSelect)
    }

    const mapList = props.itemList.map((currentItem, index) => {
        return <li key = {index} onClick={() => {props.setSelectedOption(currentItem); toggleOptions()}}>{currentItem}</li>
    })
    
    return (
        <div onClick={toggleOptions} className='CustomSelect-Wrapper'>
            <div ref={props.customSelectRef}>
                {props.selectedOption ? props.selectedOption : props.default}
            </div>
            <div className='CustomSelect-Container glassMinor'>
                {toggleSelect && 
                <ul>
                    {mapList}
                </ul>}
            </div>
        </div>
    )
}

export {CustomSelect}