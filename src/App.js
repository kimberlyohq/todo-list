// @flow
import * as React from "react";
import "./App.css";

import { Todo } from "./components/Todo";
import type { TodoItem } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

type State = {
  todos: TodoItem[],
};
class App extends React.Component<{}, State> {
  state: State = {
    todos: [],
  };

  addTodo: (text: string) => void = (text: string): void => {
    const newTodo = { id: Math.random(), text, done: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  toggleTodo: (id: number) => void = (id: number): void => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      const toggledTodo = { ...todo, done: !todo.done };
      return toggledTodo;
    });

    this.setState({ todos: updatedTodos });
  };

  editTodo: (id: number, text: string) => void = (
    id: number,
    text: string
  ): void => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      const editedTodo = { ...todo, text };
      return editedTodo;
    });

    this.setState({ todos: updatedTodos });
  };

  deleteTodo: (id: number) => void = (id: number): void => {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: updatedTodos });
  };

  render(): React.Node {
    const { todos } = this.state;
    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo} />
        {todos.map((todo) => (
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
