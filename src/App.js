import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoForm, TodoList, TodoFilter } from "./components/todo/index";
import {
  generateId,
  addTodo,
  findById,
  updateByObjectId,
  removeTodoById,
  filterTodos,
  getCurrentPath
} from "./lib/todoHelpers";
import { getAll, createTodo, deleteTodo, updateTodo } from "./lib/todoService";

class App extends Component {
  state = {
    todos: [],
    currentTodo: "",

    currentRoute: ""
  };

  componentDidMount() {
    getAll().then(todos => this.setState({ todos }));
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      currentTodo: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.currentTodo) {
      const newTodo = {
        id: generateId(),
        name: this.state.currentTodo,
        isComplete: false
      };
      const addedTodo = addTodo(this.state.todos, newTodo);
      this.setState({
        todos: addedTodo,
        currentTodo: "",
        errorMessage: ""
      });

      createTodo(newTodo).then(() => this.showTempMessage("Todo added"));
    }
  };

  handleEmptySubmit = event => {
    event.preventDefault();
    this.setState({ errorMessage: "Field can not be empty" });
  };

  handleToggle = id => {
    let listOfTodos = this.state.todos;
    let todo = findById(listOfTodos, id);
    todo.isComplete = todo.isComplete ? false : true;

    const newUpdatedTodosList = updateByObjectId(listOfTodos, todo);
    this.setState({ todos: newUpdatedTodosList });
    updateTodo(todo).then(() => this.showTempMessage("Todo updated"));
  };

  handleRemove = id => {
    let listOfTodos = this.state.todos;
    const newListWithoutRemovedItem = removeTodoById(listOfTodos, id);
    this.setState({ todos: newListWithoutRemovedItem });
    deleteTodo(id).then(() => this.showTempMessage("Todo deleted"));
  };

  handleCurrentPath = () => {
    const currentPath = getCurrentPath();
    this.setState({ currentRoute: currentPath });
  };

  showTempMessage = msg => {
    this.setState({ message: msg });
    setTimeout(() => {
      this.setState({ message: "" });
    }, 2000);
  };

  render() {
    const submitHandle = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;
    const SortTodos = filterTodos(this.state.todos, this.state.currentRoute);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-App">
          {this.state.errorMessage && (
            <span className="error">{this.state.errorMessage}</span>
          )}
          {this.state.message && (
            <span className="success">{this.state.message}</span>
          )}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandle}
          />

          <TodoFilter handleCurrentPath={this.handleCurrentPath} />

          <TodoList
            handleToggle={this.handleToggle}
            todos={SortTodos}
            handleRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
