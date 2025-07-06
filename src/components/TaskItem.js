import React, { useState } from 'react';

function TaskItem({ task, onUpdateTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);

  const toggleComplete = () => {
    onUpdateTask({ ...task, completed: !task.completed });
  };

  const handleSave = () => {
    if (!editTitle.trim()) return;
    onUpdateTask({
      ...task,
      title: editTitle.trim(),
      description: editDescription.trim()
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />

      {isEditing ? (
        <div className="edit-form">
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} required />
          <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="task-content">
          <div className="task-title">{task.title}</div>
          {task.description && <div className="task-desc">{task.description}</div>}
          <div className="task-date">Created: {new Date(task.createdAt).toLocaleString()}</div>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete} className="delete-btn">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
