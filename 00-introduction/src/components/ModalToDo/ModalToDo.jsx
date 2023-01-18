import React from 'react'
import { createPortal } from 'react-dom'
import './ModalToDo.css'

function ModalToDo({ children }) {
    
    return createPortal(
        <div className='ModalBackground'>
            { children }
        </div>,
        document.getElementById("modal")
    )
}

export { ModalToDo }