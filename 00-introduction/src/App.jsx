import './App.css'
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter'
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch'
import { ToDoList } from './components/ToDoList/ToDoList'
import { ToDoItem } from './components/ToDoItem/ToDoItem'
import { CreateToDoItem } from './components/CreateToDoItem/CreateToDoItem'

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

  return (
    <>
      <ToDoCounter />
      <section style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <ToDoSearch />
        <CreateToDoItem />
      </section>
      <ToDoList>
        {
          ToDos.map(item => {
            const { id, isCompleted, text } = item
            return (
              <ToDoItem key={id} id={id} text={text} isCompleted={isCompleted} />
            )
          })
        }
      </ToDoList>
    </>
  )
}
