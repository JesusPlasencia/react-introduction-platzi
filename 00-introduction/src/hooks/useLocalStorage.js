import React, { useState } from "react"

const useLocalStorage = (keyLocal, initialValue) => {
 
    const LOCAL_KEY = keyLocal

    const localStorageTodos = localStorage.getItem(LOCAL_KEY)
    let parsedTodos;

    if (!localStorageTodos) {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(initialValue))
        parsedTodos = []
    } else {
        parsedTodos = JSON.parse(localStorageTodos)
    }

    const [todos, setTodos] = useState(parsedTodos)

    const savedTodos = (arrayTodos) => {
        setTodos(arrayTodos)
        localStorage.setItem(LOCAL_KEY, JSON.stringify(arrayTodos))
    }

    return [
        todos,
        savedTodos
    ]
}

export default useLocalStorage