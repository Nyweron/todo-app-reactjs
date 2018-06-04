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
    if (this.state.currentTodo) {
      let num = this.state.todos.length + 1;
      const obj = { id: num, name: this.state.currentTodo, isComplete: false };
      this.state.todos.push(obj);
      this.setState({
        todos: this.state.todos,
        currentTodo: ""
      });
    }
  };

  handleToggle = id => {
    let listOfTodos = this.state.todos;
    let todo = listOfTodos.find(x => x.id === id);
    todo.isComplete = todo.isComplete ? false : true;

    for (let i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].id === id) {
        listOfTodos[i] = todo;
        this.setState({ todos: listOfTodos });
        break;
      }
    }
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

          <TodoList handleToggle={this.handleToggle} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
