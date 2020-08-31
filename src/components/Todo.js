import React from 'react'

export default function Todo(props) {
  const { item, toggleToDo } = props;

  return (
    <div onClick={() => toggleToDo(item.id)}
      className={!item.purchase ? "toDoLineThrough" : " "}
    >
      {item.task}

    </div>
  )
}