import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onToggleComplete, onEditTask, onDeleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <div>No tasks available.</div>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
