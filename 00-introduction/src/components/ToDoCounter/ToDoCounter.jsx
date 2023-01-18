import React from 'react'
import './ToDoCounter.css'

export const ToDoCounter = ({
    completedTodos,
    totalTodos,
    loading
  } ) => {

  let customClass = loading ?
    "TodoCounter TodoCounter--loading" :
    "TodoCounter"
  let title = (completedTodos <= 0 && totalTodos <= 0)
    ?
    "Bienvenido a la ToDo App!!!"
    :
    `Has completado ${completedTodos} de ${totalTodos} ToDos`

  return (
    <h2 className={customClass}>
      { title }
    </h2>
  )
}