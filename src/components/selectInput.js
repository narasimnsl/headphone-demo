import React from 'react';
import selArrow from '../images/iconmonstr-arrow-65.svg'
/* Function component to handle Select Dropdown List Render*/
const selectInput = (props) => {
    let styledselect = { 
        background: `url(${selArrow})`,
        backgroundPosition: 'right 10px center',
        backgroundRepeat: 'no-repeat'
        
    }

    function renderOptions(list,key) {
        return (
            <option key= {key} value={list}>{list}</option>
        );
    }

    return(
        <div>
            <div className ={props.clName}>
                <label className='label' htmlFor='colour'>
                    Colors
                </label>
                <select className="styled-select" style={ styledselect }id='sel-input-1' onChange={props.changed}>
                    {props.selectOptions.map(renderOptions)}
                </select>
            </div>
        </div>
    )
}

export default selectInput;