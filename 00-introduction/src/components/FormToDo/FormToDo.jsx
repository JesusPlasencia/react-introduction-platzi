import React, { useContext, useState } from 'react'
import { ToDoContext } from '../ToDoContext/ToDoContext'
import './FormToDo.css'

const FormToDo = () => {

    const { openModal, setOpenModal, addTodo } = useContext(ToDoContext)
    const [text, setText] = useState("")

    const onCancel = () => {
        setOpenModal(!openModal)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(text);
        setOpenModal(!openModal)
    }

    const onChange = (event) => {
        setText(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value={text}
                onChange={onChange}
                placeholder="Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { FormToDo }