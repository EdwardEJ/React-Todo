import React from 'react'

export default function ToDoForm(props) {

  const { value, onChange, handleSubmit, clearToDo } = props;


  return (
    <>
      <form>
        <input
          type='text'
          name='toDoItem'
          value={value}
          onChange={onChange}
          placeholder='...todo'
        />
        <button onClick={handleSubmit}>Add To Do</button>
        <button onClick={clearToDo}>Clear Completed</button>
      </form>
    </>
  )
}
