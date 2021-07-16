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
    todos: [{ id: 1, text: "Hello", done: false }],
  };

  render(): React.Node {
    return (
      <div className="App">
        <TodoForm />
        {this.state.todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
        ))}
      </div>
    );
  }
}

export default App;
