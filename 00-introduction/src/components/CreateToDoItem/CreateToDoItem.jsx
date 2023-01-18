import React from 'react'
import './CreateToDoItem.css'

export const CreateToDoItem = ({ openModal, setOpenModal }) => {

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