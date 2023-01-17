import React, { useContext } from 'react'
import { ToDoContext } from '../ToDoContext/ToDoContext'
import './CreateToDoItem.css'

export const CreateToDoItem = () => {

  const { openModal, setOpenModal } = useContext(ToDoContext)

  const handleClick = () => {
    setOpenModal(!openModal)
  }

  return (
    <button
      className="CreateTodoButton"
      onClick={handleClick}
    >
      +
    </button>
  )
}