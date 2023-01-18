import React from 'react'
import { ToDoCounter } from '../ToDoCounter/ToDoCounter'
import { ToDoSearch } from '../ToDoSearch/ToDoSearch'

const Header = ({ completedTodos, totalTodos, search, setSearch, loading }) => {
    return (
        <>
            <ToDoCounter
                completedTodos={completedTodos}
                totalTodos={totalTodos}
                loading={loading} />
            <ToDoSearch
                search={search}
                setSearch={setSearch}
                loading={loading} />
        </>
    )
}

export { Header }