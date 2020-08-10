import React from 'react';

import Todo from "../modals/Todo";
import { generateId } from "../utils/generateUniqueId"

import Title from '../components/Title/Title';
import AddTaskPanel from '../components/AddTaskPanel/AddTaskPanel';
import TodosList from '../components/TodosList/TodosList';

import './TodoContainer.css';

interface TodoState {
  todos: Todo[],
  editMode: boolean
};
  
export default class TodoPage extends React.Component<{}, TodoState> {
  
  title: string = 'My Todos'

  state: TodoState = {
    editMode: false,
    todos: [{
      id: "qwerqwer",
      task: "make a react app!",
      done: false
    },
    {
      id: "qwerqwer2",
      task: "make a iOS app!",
      done: true
    },
    {
      id: "qwerqwer3",
      task: "make a react-native app!",
      done: false
    }]
  };

  toggleEdit(){
    this.setState({
      editMode: !this.state.editMode
    })
  }

  addTask(todo: Todo){
    todo.id = generateId()
    console.log(todo);
    this.setState({
      todos: this.state.todos.concat(todo),
      editMode: false
    })
  }

  deleteTask(taskId: string){
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== taskId)
    })
  }

  render(){
    return (
      <div className="TodoContainer">
          <div className="TodoContainer-row">
            <Title title={this.title} />
            <button onClick={() => this.toggleEdit()}>
              {this.state.editMode ? 'Finish' : 'Add Task'}
            </button>
          </div>
          <div className="TodoContainer-row">
            <div className="TodoContainer-col">
              { this.state.editMode && 
                  <AddTaskPanel 
                    onCreateTask={(todo: Todo) => this.addTask(todo)} 
                  />
              }
            </div>
            <div className="TodoContainer-col">
              { this.state.todos.length > 0 &&
                  <TodosList 
                    todoItems={this.state.todos}
                    deleteTask={(id: string) => this.deleteTask(id)}
                  />
              }
            </div>
          </div>
      </div>
    );

  }
}
  