import { useState, useEffect, useReducer } from "react"

const useLocalStorage = (keyLocal, initialValue) => {

    const LOCAL_KEY = keyLocal
    // ! useReducer
    const [state, dispatch] = useReducer(reducer, initialState(initialValue))

    const {
        sincronizedItem,
        hasError,
        isFetching,
        item
    } = state

    // ! ACTION CREATORS
    const onSuccess = (parsedItem) => {
        dispatch({ type: actionTypes.SUCCESS, payload: parsedItem })
    }

    const onError = (e) => {
        dispatch({ type: actionTypes.ERROR, payload: e })
    }

    const onLoading = () => {
        dispatch({ type: actionTypes.FETCHING })
    }

    const onSincronize = () => {
        dispatch({ type: actionTypes.SINCRONIZE })
    }

    const onSave = (newItem) => {
        dispatch({ type: actionTypes.SAVE, payload: newItem })
    }

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageTodos = localStorage.getItem(LOCAL_KEY)
                let parsedTodos;

                if (!localStorageTodos) {
                    localStorage.setItem(LOCAL_KEY, JSON.stringify(initialValue))
                    parsedTodos = []
                } else {
                    parsedTodos = JSON.parse(localStorageTodos)
                }

                onSave(parsedTodos)
            } catch (e) {
                onError(e)
            } finally {
                onLoading()
            }
        }, 2000)
    }, [sincronizedItem])

    const savedTodos = (arrayTodos) => {
        try {
            localStorage.setItem(LOCAL_KEY, JSON.stringify(arrayTodos))
            onSave(arrayTodos)
        } catch (e) {
            onError(e)
        }
    }

    const sincronizeItem = () => {
        onLoading()
        onSincronize()
    }

    return {
        item,
        savedTodos,
        isFetching,
        hasError,
        sincronizeItem
    }
}

const initialState = (initialValue) => (
    {
        sincronizeItem: true,
        hasError: false,
        isFetching: true,
        item: initialValue
    }
)

const actionTypes = {
    ERROR: 'ERROR',
    FETCHING: 'FETCHING',
    SUCCESS: 'SUCCESS',
    SINCRONIZE: 'SINCRONIZE',
    SAVE: 'SAVE'
}

const reducerObject = (state, payload) => (
    {
        [actionTypes.ERROR]: {
            ...state,
            hasError: true
        },
        [actionTypes.FETCHING]: {
            ...state,
            isFetching: false
        },
        [actionTypes.SUCCESS]: {
            ...state,
            hasError: false,
            isFetching: false,
            sincronizeItem: true,
            item: payload
        },
        [actionTypes.SINCRONIZE]: {
            ...state,
            sincronizeItem: false,
            isFetching: true
        },
        [actionTypes.SAVE]: {
            ...state,
            item: payload
        }
    }
)

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage }