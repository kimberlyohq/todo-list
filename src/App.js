// @flow
import * as React from "react";
import "./App.css";

import { FilterBar } from "./components/FilterBar";
import { Todo } from "./components/Todo";
import type { TodoItem } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

type State = {
  todos: TodoItem[],
  filter: string,
};

const FILTER = {
  All: (todo) => true,
  Active: (todo) => !todo.done,
  Completed: (todo) => todo.done,
};
class App extends React.Component<{}, State> {
  state: State = {
    todos: [],
    filter: "All",
  };

  // Event handlers

  addTodo: (text: string) => void = (text: string) => {
    const newTodo = { id: Math.random(), text, done: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  toggleTodo: (id: number) => void = (id: number) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      const toggledTodo = { ...todo, done: !todo.done };
      return toggledTodo;
    });

    this.setState({ todos: updatedTodos });
  };

  editTodo: (id: number, text: string) => void = (id: number, text: string) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      const editedTodo = { ...todo, text };
      return editedTodo;
    });

    this.setState({ todos: updatedTodos });
  };

  deleteTodo: (id: number) => void = (id: number) => {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: updatedTodos });
  };

  setFilter: (filter: string) => void = (filter: string) => {
    this.setState({ filter: filter });
  };

  render(): React.Node {
    const { todos, filter } = this.state;
    return (
      <div className="App">
        <h1> To Do List</h1>
        <h4>{todos.length} Tasks</h4>
        <TodoForm addTodo={this.addTodo} />
        <FilterBar setFilter={this.setFilter} />
        {todos.filter(FILTER[filter]).map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
          />
        ))}
      </div>
    );
  }
}

export default App;
