import React, { useState } from "react";

const Task = ({ task, onToggleComplete, onEditTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);
  const [error, setError] = useState(null);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedTask.trim() === "") {
      setError("Task description cannot be empty.");
      return;
    }
    onEditTask(task.id, editedTask);
    setIsEditing(false);
    setError(null); // Clear any previous error
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={() => onToggleComplete(task.id)}
          />
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </>
      )}
      {error && <div className="task-card">{error}</div>}
    </div>
  );
};

export default Task;
