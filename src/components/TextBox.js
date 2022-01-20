import React from 'react'
import Form from 'react-bootstrap/Form'
import '../style/main.scss'

export default function TextBox(props) {
    return (
        <Form.Control
            type={props.type}
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder={props.placeholder}
            className='textbox my-3'
        />
    )
}





