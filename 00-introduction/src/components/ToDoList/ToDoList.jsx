import React from 'react'
import './ToDoList.css'

export const ToDoList = (props) => {
  return (
        <section>
          {props.error && props.onError()}
          {props.loading && props.onLoading()}
          {
            (!props.loading &&
             !props.searchedTodos?.length &&
              props.totalTodos === 0) &&
              props.onEmptyTodos()
          }
          {
            (!props.loading &&
              props.totalTodos > 0 &&
             !props.searchedTodos?.length) &&
              props.onEmptySearch()  
          }
          {props.searchedTodos.map(props.render || props.children)}
          {/* { props.render ??
            props.searchedTodos.map(todo => props.render(todo))
          } */}
          {/* {
            props.children ??
            (
              <ul>
                {props.children}
              </ul>
            )
          } */}
        </section>
  )
}