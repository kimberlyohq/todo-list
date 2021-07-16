// @flow

import * as React from "react";
import "./Todo.css";

type TodoProps = {
  id: number,
  text: string,
  done: boolean,
  toggleTodo: (id: number) => void,
};

type TodoState = {
  isEditing: boolean,
};

export class Todo extends React.Component<TodoProps, TodoState> {
  state: TodoState = {
    isEditing: false,
  };

  handleDelete: (event: SyntheticEvent<HTMLButtonElement>) => void = (
    event: SyntheticEvent<HTMLButtonElement>
  ) => {
    console.log("delete");
  };

  handleEdit: (event: SyntheticEvent<HTMLButtonElement>) => void = (
    event: SyntheticEvent<HTMLButtonElement>
  ) => {
    console.log("edit");
  };

  handleToggle: (id: number) => void = (id: number) => {
    this.props.toggleTodo(id);
  };

  render(): React.Node {
    const { id, text, done } = this.props;

    return (
      <div className="task-container">
        <div className="left-container">
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={done}
              onChange={(event: SyntheticEvent<HTMLInputElement>) =>
                this.handleToggle(id)
              }
              className="checkbox"
            />
          </div>
          <span className={done ? "done" : ""}>{text}</span>
        </div>
        <div className="buttons">
          <button
            type="submit"
            onClick={this.handleEdit}
            className="edit-button"
          >
            {this.state.isEditing ? "Confirm" : "Edit"}
          </button>
          {!this.state.isEditing && (
            <button onClick={this.handleDelete} className="delete-button">
              Delete
            </button>
          )}
        </div>
      </div>
    );
  }
}
