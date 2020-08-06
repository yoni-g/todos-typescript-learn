import React from 'react';
// import logo from './logo.svg';
import Todo from "./modals/Todo";

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
    console.log(todo);
    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Title title={this.title} />
          {/* <p>{this.state.editMode ? 'true' : 'false'}</p> */}
          <button 
            onClick={() => this.toggleEdit()}>
            {this.state.editMode ? 'Finish' : 'Add Task'}
          </button>
          {
            this.state.editMode && <AddTaskPanel onCreateTask={this.addTask}/>
          }
          <div className="Container TodosContainer">
            <p>All Todos</p>
            { 
              this.state.todos.map(todo => {
                return <TodoItem todo={todo} key={todo.id}/>
              }) 
            }

          </div>
  
        </header>
      </div>
    );

  }
}

// export default App;
