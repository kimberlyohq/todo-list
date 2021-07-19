// @flow

import * as React from "react";
import "./Todo.css";

export type TodoItem = {
  id: number,
  text: string,
  done: boolean,
};
type TodoProps = {
  todo: TodoItem,
  toggleTodo: (id: number) => void,
  deleteTodo: (id: number) => void,
  editTodo: (id: number, text: string) => void,
};

type TodoState = {
  isEditing: boolean,
};

export class Todo extends React.Component<TodoProps, TodoState> {
  input: ?HTMLInputElement;

  state: TodoState = {
    isEditing: false,
  };

  handleDelete: (id: number) => void = (id: number) => {
    this.props.deleteTodo(id);
  };

  handleEdit: (event: SyntheticEvent<HTMLButtonElement>, id: number) => void = (
    event: SyntheticEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();

    if (!this.state.isEditing) {
      this.setState({ isEditing: true });
      return;
    }

    if(!this.input) {
      return ;
    }
    
    const trimmedInputValue = this.input.value.trim();

    if (!trimmedInputValue) {
      alert("Todo cannot be empty");
      this.setState({ isEditing: false });
      return;
    }

    this.setState({ isEditing: false });
    this.props.editTodo(id, trimmedInputValue);
  };

  handleToggle: (id: number) => void = (id: number) => {
    this.props.toggleTodo(id);
  };

  render(): React.Node {
    const { id, text, done } = this.props.todo;
    const { isEditing } = this.state;

    return (
      <div className="task-container">
        <div className="left-container">
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={done}
              onChange={() => this.handleToggle(id)}
              className="checkbox"
            />
          </div>
          {isEditing ? (
            <input
              autoFocus
              ref={(input) => (this.input = input)}
              defaultValue={text}
              className="task-input"
            />
          ) : (
            <span className={done ? "done" : ""}>{text}</span>
          )}
        </div>
        <div className="buttons">
          <button
            type="submit"
            onClick={(event: SyntheticEvent<HTMLButtonElement>) =>
              this.handleEdit(event, id)
            }
            className="edit-button"
          >
            {isEditing ? "Confirm" : "Edit"}
          </button>
          {!isEditing && (
            <button
              onClick={() => this.handleDelete(id)}
              className="delete-button"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    );
  }
}
