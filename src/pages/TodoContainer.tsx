import React from 'react';
// import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import Todo from "../modals/Todo";
import { generateId } from "../utils/generateUniqueId"

import Title from '../components/Title/Title';
// import TodoItem from '../components/TodoItem/TodoItem';
import AddTaskPanel from '../components/AddTaskPanel/AddTaskPanel';



// import './TodoContainer.css';
import TodosList from '../components/TodosList/TodosList';

interface State {
  todos: Todo[],
  editMode: boolean
};
  
export default class TodoPage extends React.Component<{}, State> {
  
    title: string = 'My Todos'
  
    state: State = {
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
          <header className="TodoContainer-header">
            <div className="HeaderContainer">
              <Title title={this.title} />
              {/* <p>{this.state.editMode ? 'true' : 'false'}</p> */}
              <button 
                onClick={() => this.toggleEdit()}>
                {this.state.editMode ? 'Finish' : 'Add Task'}
              </button>
  
            </div>
            {
              this.state.editMode && 
                <AddTaskPanel 
                  onCreateTask={(todo: Todo) => this.addTask(todo)} 
                />
            }
            <TodosList 
              todoItems={this.state.todos}
              deleteTask={(id: string) => this.deleteTask(id)}
            />
    
          </header>
        </div>
      );
  
    }
  }
  