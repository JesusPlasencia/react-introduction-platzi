import React, {useContext} from 'react'
import { ToDoContext } from '../ToDoContext/ToDoContext'
import './ToDoCounter.css'

export const ToDoCounter = () => {
  
  const {
    completedTodos,
    totalTodos
  } = useContext(ToDoContext)

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