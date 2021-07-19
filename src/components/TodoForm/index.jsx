// @flow

import * as React from "react";
import "./TodoForm.css";

type TodoFormProps = {
  addTodo: (text: string) => void,
};

type TodoFormState = {
  inputValue: string,
};

export class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  state: TodoFormState = {
    inputValue: "",
  };

  handleSubmit: (
    event: SyntheticEvent<HTMLButtonElement | HTMLFormElement>
  ) => void = (event: SyntheticEvent<HTMLButtonElement | HTMLFormElement>) => {
    event.preventDefault();
    const trimmedInputValue = this.state.inputValue.trim();
    if (!trimmedInputValue) {
      alert("Cannot add an empty to do !");
      return;
    }

    this.setState({ inputValue: "" });
    this.props.addTodo(trimmedInputValue);
  };

  render(): React.Node {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new to do"
          value={this.state.inputValue}
          onChange={(event) =>
            this.setState({ inputValue: event.target.value })
          }
          className="form-input"
        />
        <button onClick={this.handleSubmit} className="button">
          Add To Do
        </button>
      </form>
    );
  }
}
