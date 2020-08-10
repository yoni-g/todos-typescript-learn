import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import Todo from "./modals/Todo";



import './App.css';
import TodoPage from './pages/TodoContainer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomeContainer';

// const title: string = 'My Todos'

// interface Props {
//   title: string
// }


export default class App extends React.Component<{}, {}> {
  
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <div className="App-body">
              <Route exact path="/" component={HomePage} />
              <Route path="/todos" component={TodoPage} />
              <Route path="/weather" component={() => <h3>{"We are working on it 👨‍💻"}</h3>} />
          </div>
        </div>
      </Router>
    );

  }
}

// export default App;
