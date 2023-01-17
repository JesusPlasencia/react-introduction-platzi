import React from 'react'
import { ToDoContext } from '../ToDoContext/ToDoContext'
import { CreateToDoItem } from '../CreateToDoItem/CreateToDoItem'
import { ToDoCounter } from '../ToDoCounter/ToDoCounter'
import { ToDoItem } from '../ToDoItem/ToDoItem'
import { ToDoList } from '../ToDoList/ToDoList'
import { ToDoSearch } from '../ToDoSearch/ToDoSearch'
import { useContext } from 'react'
import { ModalToDo } from '../ModalToDo/ModalToDo'
import './UI.css'
import { FormToDo } from '../FormToDo/FormToDo'

function UI() {

    const {
        isFetching,
        hasError,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = useContext(ToDoContext)

    return (
        <>
            <ToDoCounter />
            <ToDoSearch />
            <ToDoList>
                {isFetching && <p className='paragraph'>Cargando...</p>}
                {hasError && <p className='paragraph'>Error obteniendo la información!</p>}
                {(!isFetching && ! searchedTodos) && <p>Crea tu Primer ToDo !!!</p>}
                {
                    searchedTodos.map(item => {
                        const { id, isCompleted, text } = item
                        return (
                            <ToDoItem
                                key={id}
                                id={id}
                                text={text}
                                isCompleted={isCompleted}
                                onComplete={() => completeTodo(text)}
                                onDelete={() => deleteTodo(text)} />
                        )
                    })
                }
            </ToDoList>
            
            {openModal && (
                <ModalToDo>
                    <FormToDo/>
                </ModalToDo>
            )}

            <CreateToDoItem />
        </>
    )
}

export { UI }