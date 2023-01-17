import React from 'react'
import './ToDoItem.css'

export const ToDoItem = (props) => {

  const handleOnComplete = () => {
    console.log('You\'ve done this task.')
  }

  const handleOnDelete = () => {
    console.log('You\'ve deleted this task.')
  }


  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${props.isCompleted && 'Icon-check--active'}`}
        onClick={handleOnComplete}
      >
        ☑
      </span>
      <p className={`TodoItem-p ${props.isCompleted && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={handleOnDelete}
      >
        ❌
      </span>
    </li>
  )
}