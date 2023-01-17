import './App.css'
import { TodoProvider } from '../components/ToDoContext/ToDoContext'
import { UI } from '../components/UI/UI'

export const App = () => {

  return (
    <>
      <TodoProvider>
        <UI/>
      </TodoProvider>
    </>
  )
}
