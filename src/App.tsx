import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import Todo from "./modals/Todo";



import './App.css';
import TodoPage from './pages/TodoContainer';

// const title: string = 'My Todos'

// interface Props {
//   title: string
// }


export default class App extends React.Component<{}, {}> {

  appTitle: string = 'My tiny TS app'

  // state: State = {
  //   editMode: false,
  //   todos: [{
  //     id: "qwerqwer",
  //     task: "make a react app!",
  //     done: false
  //   },
  //   {
  //     id: "qwerqwer2",
  //     task: "make a iOS app!",
  //     done: true
  //   },
  //   {
  //     id: "qwerqwer3",
  //     task: "make a react-native app!",
  //     done: false
  //   }]
  // };

  // toggleEdit(){
  //   this.setState({
  //     editMode: !this.state.editMode
  //   })
  // }

  // addTask(todo: Todo){
  //   todo.id = generateId()
  //   console.log(todo);
  //   this.setState({
  //     todos: this.state.todos.concat(todo),
  //     editMode: false
  //   })
  // }

  // deleteTask(taskId: string){
  //   this.setState({
  //     todos: this.state.todos.filter(todo => todo.id !== taskId)
  //   })
  // }

  render(){
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link> | <Link to="/todos">Todo List</Link> | <Link to="/weather">Check weather</Link>
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
