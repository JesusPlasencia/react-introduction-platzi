import React from 'react'
import './ToDoSearch.css'
import { ReactComponent as Logo } from '../../assets/search.svg'

export const ToDoSearch = () => {
  return (
    <section className='to-do-search-container'>
      <input className='to-do-search-container-input' placeholder='Search some task' />
      <Logo className='to-do-search-container-logo' width={30} height={30} />
    </section>
  )
}