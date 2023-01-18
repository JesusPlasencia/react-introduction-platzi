import './App.css'
import { Header } from '../components/Header/Header'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDoItem } from '../components/ToDoItem/ToDoItem'
import { ModalToDo } from '../components/ModalToDo/ModalToDo'
import { FormToDo } from '../components/FormToDo/FormToDo'
import { CreateToDoItem } from '../components/CreateToDoItem/CreateToDoItem'
import { useTodos } from './ToDoContext'

export const App = () => {

  const {
    addTodo,
    search,
    setSearch,
    completedTodos,
    totalTodos,
    isFetching,
    hasError,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useTodos()

  return (
    <>
      <Header
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        search={search}
        setSearch={setSearch} />
      <ToDoList>
        {isFetching && <p className='paragraph'>Cargando...</p>}
        {hasError && <p className='paragraph'>Error obteniendo la información!</p>}
        {(!isFetching && !searchedTodos) && <p>Crea tu Primer ToDo !!!</p>}
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
          <FormToDo
            addTodo={addTodo}
            openModal={openModal}
            setOpenModal={setOpenModal} />
        </ModalToDo>
      )}

      <CreateToDoItem
        openModal={openModal}
        setOpenModal={setOpenModal} />
    </>
  )
}
