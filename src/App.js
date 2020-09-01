import React from 'react';
import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm'
import './components/Todo.css'

const toDoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      toDoList: toDoData,
      toDoItem: '',
    };
  }

  toggleToDo = (clickedItemId) => {

    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.addToDo(this.state.toDoItem);
    this.setState({ toDoItem: '' })
  }

  addToDo = (toDo) => {
    const newToDo = {
      task: toDo,
      id: new Date(),
      completed: false,
    }

    this.setState({
      toDoList: [...this.state.toDoList, newToDo]
    })
  }

  clearToDo = e => {
    e.preventDefault();
    let toDos = this.state.toDoList.filter(todo => !todo.completed);
    console.log(toDos)
    this.setState({ toDoList: toDos });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList
          toDoList={this.state.toDoList}
          toggleToDo={this.toggleToDo}
        />

        <ToDoForm
          value={this.state.toDoItem}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
          clearToDo={this.clearToDo}
          addToDo={this.addToDo}
        />
      </div>
    );
  }
}

export default App;
