// @flow
import * as React from "react";
import "./App.css";

import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

type TodoProps = {
  id: number,
  text: string,
  done: boolean,
};
type State = {
  todos: TodoProps[],
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

  editTodo: (id: number, text: string) => void = (id: number, text: string): void => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      const editedTodo = { ...todo, text};
      return editedTodo;
    });

    this.setState({ todos: updatedTodos });
  };

  deleteTodo: (id: number) => void = (id: number): void => {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: updatedTodos });
  };

  render(): React.Node {
    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
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
