import React from 'react'

const ToDoEmptySearch = ({ search }) => {
  return (
      <p className='paragraph'>No se encontrĂ³ el ToDo&nbsp;
          <strong>'{search}'</strong>
      </p>
  )
}

export { ToDoEmptySearch } 