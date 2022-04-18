import { renderTask } from "../addUtils/addTasks";

export function renderTasksFromLocalStorage(tasks) {
    let parseTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(parseTasks);

    if (parseTasks === null) {
        return;
    } else {
        tasks = parseTasks;
        for (let i = 0; i < tasks.length; i++) {
            renderTask(tasks[i]);
            console.log(tasks[i]);
        }
    }
}