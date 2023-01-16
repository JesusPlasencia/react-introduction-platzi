import React from 'react'
import './ToDoItem.css'

export const ToDoItem = ({ id, text, isCompleted }) => {
  const customText = (isCompleted ? " ✅" : " ❌")
  return (
      <li className='to-do-list-item'>
        <span>{text}</span>
        <span>{customText}</span>
      </li>
  )
}