import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import { ToDoContext } from '../ToDoContext/ToDoContext'
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