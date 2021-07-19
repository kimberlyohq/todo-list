// @flow
import * as React from "react";
import "./FilterBar.css";

type FilterBarProps = {
  selected: string,
  filters: string[],
  setFilter: (filter: string) => void,
};
export class FilterBar extends React.Component<FilterBarProps, {}> {
  render(): React.Node {
    const { filters, setFilter, selected } = this.props;
    return (
      <div className="container">
        {filters.map((filter, id) => (
          <button
            className={selected === filter ? "filter-button selected" : "filter-button"}
            key={id}
            onClick={() => setFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  }
}
