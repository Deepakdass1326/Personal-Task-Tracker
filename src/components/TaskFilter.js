import React from 'react';

function TaskFilter({ filter, setFilter, tasks }) {
  const countAll = tasks.length;
  const countCompleted = tasks.filter(t => t.completed).length;
  const countPending = tasks.filter(t => !t.completed).length;

  return (
    <div className="task-filter">
      <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
        All Tasks ({countAll})
      </button>
      <button className={filter === 'pending' ? 'active' : ''} onClick={() => setFilter('pending')}>
        Pending ({countPending})
      </button>
      <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>
        Completed ({countCompleted})
      </button>
    </div>
  );
}

export default TaskFilter;
