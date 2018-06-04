import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoForm, TodoList } from "./components/todo/index";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "test 1", isComplete: true },
      { id: 2, name: "test 2", isComplete: false },
      { id: 3, name: "test 3", isComplete: false }
    ],
    currentTodo: ""
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      currentTodo: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let num = this.state.todos.length + 1;
    const obj = {id: num, name: this.state.currentTodo, isComplete: false}
    this.state.todos.push(obj)
    this.setState({
      todos: this.state.todos
    });
  };

  handleToggle = (id) => {
    //console.log(id);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-App">
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.currentTodo}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="Todo-list">
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
