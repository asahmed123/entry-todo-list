import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(null);

  const handleAddTask = (description) => {
    const newTask = { id: Date.now(), description, isComplete: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleEditTask = (id, description) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, description } : task))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleFilterChange = (newFilter) => {
    if (["all", "completed", "incomplete"].includes(newFilter)) {
      setFilter(newFilter);
    } else {
      setError("Invalid filter selected.");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isComplete;
    if (filter === "incomplete") return !task.isComplete;
    return true;
  });

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default App;
