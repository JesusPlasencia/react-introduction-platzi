import React, { useContext } from 'react'
import { ToDoContext } from '../ToDoContext/ToDoContext'
import './ToDoSearch.css'

export const ToDoSearch = () => {

  const { setSearch } = useContext(ToDoContext)

  const handleValueChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <input
      key="keyboard-search"
      className='TodoSearch'
      placeholder='Tareas...'
      onChange={handleValueChange}
    />
  )
}