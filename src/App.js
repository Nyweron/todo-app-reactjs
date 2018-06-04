import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "test 1", isComplete: true },
      { id: 2, name: "test 2", isComplete: false },
      { id: 3, name: "test 3", isComplete: false }
    ],
    currentTodo: ""
  };

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      currentTodo: event.target.value
    });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-App">
          <form>
            <input type="text" value={this.state.value} onChange={this.handleInputChange} />
          </form>
        </div>
        <div className="Todo-list">
          <ul>
            {this.state.todos.map(todo => (
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
