import './App.css'
import { ToDoCounter } from '../components/ToDoCounter/ToDoCounter'
import { ToDoSearch } from '../components/ToDoSearch/ToDoSearch'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDoItem } from '../components/ToDoItem/ToDoItem'
import { CreateToDoItem } from '../components/CreateToDoItem/CreateToDoItem'
import { useState } from 'react'

const ToDos = [
  {
    id: 1,
    text: "Cortar Cebolla",
    isCompleted: false
  },
  {
    id: 2,
    text: "Tomar Agua",
    isCompleted: false
  },
  {
    id: 3,
    text: "Dibujar Componentes",
    isCompleted: false
  }
]

export const App = () => {

  const [todos, setTodos] = useState(ToDos)
  const [search, setSearch] = useState("")

  const completedTodos = todos.filter(item => item.isCompleted).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!search.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(task =>
      task.text.toLowerCase().includes(search.toLowerCase()))
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    let currentState = todos[todoIndex].isCompleted
    let newTodos = [...todos];
    newTodos[todoIndex].isCompleted= !currentState

    setTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    let newTodos = [...todos]
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  return (
    <>
      <ToDoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos} />
      <ToDoSearch
        search={search}
        setSearch={setSearch} />
      <ToDoList>
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
                onDelete={() => deleteTodos(text)}/>
            )
          })
        }
      </ToDoList>
      <CreateToDoItem />
    </>
  )
}
