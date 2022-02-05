import React from 'react'
import '../../style/button.scss'

export default function Buttons(props) {
    // console.log("props",props)
    return (

        <div className='pkg-button'>
            <button style={{borderColor:props.color}} className='button-text px-5' >
                {props.text}
            </button>
        </div>

        
    )
}
