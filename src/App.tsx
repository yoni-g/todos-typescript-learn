import React from 'react';
// import logo from './logo.svg';
import Todo from "./modals/Todo";

import Title from './components/Title/Title';
import TodoItem from './components/TodoItem/TodoItem';



import './App.css';

// const title: string = 'My Todos'

// interface Props {
//   title: string
// }

interface State {
  todos: Todo[];
};

export default class App extends React.Component<{}, State> {

  title: string = 'My Todos'

  state: State = {
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

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Title title={this.title} />
          { 
            this.state.todos.map(todo => {
              return <TodoItem todo={todo} />
            }) 
          }
  
        </header>
      </div>
    );

  }
}

// export default App;
