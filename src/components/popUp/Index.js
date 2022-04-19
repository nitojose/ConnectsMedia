import React from 'react'
import { Modal } from 'react-bootstrap'

export default function Index(props) {
    console.log("popup");
  return (
    <>

                <div>
                    <Modal.Dialog className='modal-msg'>
                            <Modal.Header >
                                <Modal.Title style={{color:props.color}}> {props.msg} </Modal.Title>
                               
                            </Modal.Header>

                            <Modal.Body>
                                <p></p>
                              
                            </Modal.Body>

                            <Modal.Footer>

                                
                                <button></button>
                                
                            </Modal.Footer>
                    </Modal.Dialog>
                </div>
                    
    </>
  )
}
