import { renderTask } from "../addUtils/addTasks";

const cardsLists = document.querySelectorAll(".cards-list");

export function renderTasksFromLocalStorage(tasks) {
    let parseTasks = JSON.parse(localStorage.getItem('tasks'));

    if (parseTasks === null) {
        return;
    } else {
        tasks = parseTasks;
        for (let i = 0; i < tasks.length; i++) {
            const task = renderTask(tasks[i]);
            cardsLists[0].append(task);
        }
    }
}