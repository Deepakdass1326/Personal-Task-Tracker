const USERNAME_KEY = 'taskTrackerUsername';
const TASKS_KEY = 'taskTrackerTasks';

export function getUsername() {
  return localStorage.getItem(USERNAME_KEY) || '';
}

export function setUsername(username) {
  localStorage.setItem(USERNAME_KEY, username);
}

export function getTasks() {
  const tasks = localStorage.getItem(TASKS_KEY);
  return tasks ? JSON.parse(tasks) : [];
}

export function setTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
