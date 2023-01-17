import React, { createContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const ToDoContext = createContext();

function TodoProvider(props) {

    const { todos, savedTodos, isFetching, hasError } = useLocalStorage("TODOS_V1", [])

    const [search, setSearch] = useState("")
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(item => item.isCompleted).length
    const totalTodos = todos.length

    let searchedTodos = []

    if (!search.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(task =>
            task.text.toLowerCase().includes(search.toLowerCase()))
    }

    const addTodo = (text) => {
        let idGen = 0;
        let newTodos = [...todos];
        if (todos.length === 0) {
            idGen = 1;
        } else {
            const lastItem = todos.sort((a, b) => a - b)
            idGen = lastItem[todos.length - 1].id + 1;
        }
        newTodos.push({
            id: idGen,
            text: text,
            isCompleted: false
        });
        savedTodos(newTodos);
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        let currentState = todos[todoIndex].isCompleted
        let newTodos = [...todos];
        newTodos[todoIndex].isCompleted = !currentState
        savedTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        let newTodos = [...todos]
        newTodos.splice(todoIndex, 1);
        savedTodos(newTodos)
    }

    return (
        <ToDoContext.Provider value={{ 
            isFetching,
            hasError,
            completedTodos,
            searchedTodos,
            totalTodos,
            search,
            setSearch,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
         }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, TodoProvider }