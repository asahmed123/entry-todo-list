import React from "react";

const TaskFilter = ({ onFilterChange }) => {
  return (
    <div className="task-filter">
      <button className="filter-button" onClick={() => onFilterChange("all")}>
        All
      </button>
      <button
        className="filter-button"
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className="filter-button"
        onClick={() => onFilterChange("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilter;
