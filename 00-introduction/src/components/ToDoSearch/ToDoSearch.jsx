import React from 'react'
import './ToDoSearch.css'

export const ToDoSearch = ({ setSearch }) => {

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