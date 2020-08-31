// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

export default function ToDoList(props) {

  const { toDoList } = props

  return (
    <div>
      {toDoList.map(item => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  )
}