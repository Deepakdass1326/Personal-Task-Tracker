import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { getUsername, setUsername, getTasks, setTasks } from './utils/LocalStorage';
import './styles/App.css';

function App() {
  const [username, setUser] = useState(getUsername());
  const [tasks, setTaskList] = useState(getTasks());
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  const handleLogin = (name) => {
    setUser(name);
    setUsername(name);
  };

  const handleLogout = () => {
    setUser('');
    setUsername('');
  };

  const addTask = (task) => setTaskList([...tasks, task]);

  const updateTask = (updatedTask) => {
    setTaskList(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const deleteTask = (id) => {
    setTaskList(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  if (!username) return <Login onLogin={handleLogin} />;

  return (
    <div className="app-container">
      <header>
        <h1>Task Tracker</h1>
        <div className="user-info">
          <span>Welcome, {username}!</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <main>
        <TaskForm onAddTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
        <TaskList tasks={filteredTasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
      </main>
    </div>
  );
}

export default App;
