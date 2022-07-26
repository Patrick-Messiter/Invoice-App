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
        <div className='CustomSelect-Wrapper'>
            <div className='CustomSelect-Container'>
                <div onClick={toggleOptions}>
                    {props.selectedOption ? props.selectedOption : props.default}
                </div>
                {toggleSelect && 
                <ul>
                    {mapList}
                </ul>}
            </div>
        </div>
    )
}

export {CustomSelect}