import React from 'react'
import './ToDoList.css'

export const ToDoList = ({children}) => {
  return (
        <section>
          <ul>
            {children}
          </ul>
        </section>
  )
}