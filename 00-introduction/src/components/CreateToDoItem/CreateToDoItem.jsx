import React from 'react'
import './CreateToDoItem.css'

export const CreateToDoItem = () => {

  const handleClick = () => {
    console.log('Click!')
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