import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {

    const {
        item,
        savedTodos,
        isFetching,
        hasError,
        sincronizeItem: sincronizeTodos
    } = useLocalStorage("TODOS_V1", [])

    const [search, setSearch] = useState("")
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = item.filter(el => el.isCompleted).length
    const totalTodos = item.length

    let searchedTodos = []

    if (!search.length >= 1) {
        searchedTodos = item
    } else {
        searchedTodos = item.filter(task =>
            task.text.toLowerCase().includes(search.toLowerCase()))
    }

    const addTodo = (text) => {
        let idGen = 0;
        let newTodos = [...item];
        if (item.length === 0) {
            idGen = 1;
        } else {
            const lastItem = item.sort((a, b) => a - b)
            idGen = lastItem[item.length - 1].id + 1;
        }
        newTodos.push({
            id: idGen,
            text: text,
            isCompleted: false
        });
        savedTodos(newTodos);
    }

    const completeTodo = (text) => {
        const todoIndex = item.findIndex(todo => todo.text === text)
        let currentState = item[todoIndex].isCompleted
        let newTodos = [...item];
        newTodos[todoIndex].isCompleted = !currentState
        savedTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const todoIndex = item.findIndex(todo => todo.text === text)
        let newTodos = [...item]
        newTodos.splice(todoIndex, 1);
        savedTodos(newTodos)
    }

    return {
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
        setOpenModal,
        sincronizeTodos
    }
}

export { useTodos }