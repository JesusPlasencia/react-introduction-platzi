import React from 'react'
import './ToDoCounter.css'

export const ToDoCounter = ({
    completedTodos,
    totalTodos
  } ) => {

  let title = (completedTodos <= 0 && totalTodos <= 0)
    ?
    "Bienvenido a la ToDo App!!!"
    :
    `Has completado ${completedTodos} de ${totalTodos} ToDos`

  return (
    <h2 className='TodoCounter'>
      { title }
    </h2>
  )
}