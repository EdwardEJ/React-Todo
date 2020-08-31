import React from 'react'

class ToDoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      toDoItem: '',
    }
  }

  handleChanges = e => {
    this.setState({ toDoItem: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToDo(this.state.toDoItem);
    this.setState({ toDoItem: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='toDo'
          value={this.state.toDoItem}
          onChange={this.handleChanges}
          placeholder='...todo'
        />
        <button>Add To Do</button>
        <button>Clear Completed</button>
      </form>
    )
  }

}

export default ToDoForm