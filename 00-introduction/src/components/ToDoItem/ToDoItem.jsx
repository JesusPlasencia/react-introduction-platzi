import React from 'react'
import './ToDoItem.css'

export const ToDoItem = ({ text, isCompleted, onComplete, onDelete }) => {

  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${isCompleted && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        ☑
      </span>
      <p className={`TodoItem-p ${isCompleted && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        ✖
      </span>
    </li>
  )
}