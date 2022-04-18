export function updateLocalStorageForTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};