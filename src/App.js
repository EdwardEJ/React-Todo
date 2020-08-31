import React from 'react';
import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm'

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
      toggleToDo: () => { },
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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toDoList={this.state.toDoList}
          toggleTodo={this.toggleToDo} />
        <ToDoForm addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
