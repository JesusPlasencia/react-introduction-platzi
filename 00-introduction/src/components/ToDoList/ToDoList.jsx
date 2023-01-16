import React from 'react'
import './ToDoList.css'

export const ToDoList = ({children}) => {
  return (
        <ul className='to-do-list'>
            { children }
        </ul>
  )
}