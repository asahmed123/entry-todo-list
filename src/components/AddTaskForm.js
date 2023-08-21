import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      setError("Task description cannot be empty.");
      return;
    }
    onAddTask(task);
    setTask(""); // Clear the input
    setError(null); // Clear any previous error
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        className="task-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit" className="submit-button">
        Add Task
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default AddTaskForm;
