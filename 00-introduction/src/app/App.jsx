import './App.css'
import { Header } from '../components/Header/Header'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDoItem } from '../components/ToDoItem/ToDoItem'
import { ModalToDo } from '../components/ModalToDo/ModalToDo'
import { FormToDo } from '../components/FormToDo/FormToDo'
import { CreateToDoItem } from '../components/CreateToDoItem/CreateToDoItem'
import { useTodos } from './ToDoContext'
import { ToDoError } from '../components/ToDoError/ToDoError'
import { ToDoLoading } from '../components/ToDoLoading/ToDoLoading'
import { ToDoEmpty } from '../components/ToDoEmpty/ToDoEmpty'
import { ToDoEmptySearch } from '../components/ToDoEmptySearch/ToDoEmptySearch'

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
        setSearch={setSearch}
        loading={isFetching} />
      
      <ToDoList
        error={hasError}
        loading={isFetching}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        onError={() => <ToDoError />}
        onLoading={() => <ToDoLoading />}
        onEmptyTodos={() => <ToDoEmpty />}
        onEmptySearch={() => <ToDoEmptySearch search={search} />}
        render={(todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />
        )}
      />
        
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
