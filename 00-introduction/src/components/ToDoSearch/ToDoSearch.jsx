import React, { useState } from 'react'
import './ToDoSearch.css'

export const ToDoSearch = () => {

  const [search, setSearch] = useState("")

  const handleValueChange = (event) => {
    setSearch(event.target.value)
    console.log('Search Word:', event.target.value)
  }

  return (
    [<input
      key="keyboard-search"
      className='TodoSearch'
      placeholder='Search some task'
      onChange={handleValueChange}
    />,
    <p key="word-searched">{search}</p>]
  )
}