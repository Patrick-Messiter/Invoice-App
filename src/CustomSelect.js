import React from 'react'

function CustomSelect (props) {
    
    const [toggleSelect, setToggleSelect] = React.useState(false)

    function toggleOptions () {
        setToggleSelect(!toggleSelect)
    }

    const mapList = props.itemList.map((currentItem, index) => {
        return <li key = {index} className="PositiveResponse" onClick={() => {props.setSelectedOption(currentItem); toggleOptions()}}>{currentItem}</li>
    })
    
    return (
        <div onClick={toggleOptions} className='CustomSelect-Wrapper glassMinor FormPage-Input'>
            <div ref={props.customSelectRef}>
                {props.selectedOption ? props.selectedOption : props.default}
            </div>
            <div className='CustomSelect-Container'>
                {toggleSelect && 
                <ul>
                    {mapList}
                </ul>}
            </div>
        </div>
    )
}

export {CustomSelect}