import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import Todo from "./modals/Todo";



import './App.css';
import TodoPage from './pages/TodoContainer';
import Navbar from './components/Navbar/Navbar';

// const title: string = 'My Todos'

// interface Props {
//   title: string
// }


export default class App extends React.Component<{}, {}> {

  appTitle: string = 'My tiny TS app'
  
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <header className="App-header">
              <Route exact path="/" render={() => <h3>{this.appTitle}</h3> }/>
              <Route exact path="/todos" component={TodoPage} />
              <Route exact path="/weather" component={() => <h3>{"We are working on it 👨‍💻"}</h3> } />
          </header>
        </div>
      </Router>
    );

  }
}

// export default App;
