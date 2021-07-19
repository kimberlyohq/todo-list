// @flow
import * as React from "react";
import "./FilterBar.css";

type FilterBarProps = {
  setFilter: (filter: string) => void,
};
export class FilterBar extends React.Component<FilterBarProps, {}> {
  render(): React.Node {
    const { setFilter } = this.props;
    return (
      <div className="container">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>
    );
  }
}
