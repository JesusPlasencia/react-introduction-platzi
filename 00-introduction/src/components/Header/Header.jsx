import React from 'react'
import { ToDoCounter } from '../ToDoCounter/ToDoCounter'
import { ToDoSearch } from '../ToDoSearch/ToDoSearch'

const Header = ({ completedTodos, totalTodos, search, setSearch }) => {
    return (
        <>
            <ToDoCounter
                completedTodos={completedTodos}
                totalTodos={totalTodos} />
            <ToDoSearch
                search={search}
                setSearch={setSearch} />
        </>
    )
}

export { Header }