import React from 'react';
// import logo from './logo.svg';
import Todo from "./modals/Todo";
import { generateId } from "./utils/generateUniqueId"

import Title from './components/Title/Title';
import TodoItem from './components/TodoItem/TodoItem';
import AddTaskPanel from './components/AddTaskPanel/AddTaskPanel';



import './App.css';

// const title: string = 'My Todos'

// interface Props {
//   title: string
// }

interface State {
  todos: Todo[],
  editMode: boolean
};

export default class App extends React.Component<{}, State> {

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
      <div className="App">
        <header className="App-header">
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
          <div className="Container TodosContainer">
            <p>All Todos</p>
            { 
              this.state.todos.map(todo => {
                return (
                  <TodoItem 
                    todo={todo} 
                    onDelete={(id:string) => this.deleteTask(id)}
                    key={todo.id}
                  />
                )
              }) 
            }

          </div>
  
        </header>
      </div>
    );

  }
}

// export default App;
