import React from 'react';
// import logo from './logo.svg';
import Title from './components/Title/Title';
import './App.css';

// const title: string = 'My Todos'

// interface Props {
//   title: string
// }
interface Todo {
  id: string,
  todo: string,
  done: boolean
}
interface State {
  todos: Todo[];
};

export default class App extends React.Component<{}, State> {

  title: string = 'My Todos'

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Title title={this.title} />
  
  
        </header>
      </div>
    );

  }
}

// export default App;
