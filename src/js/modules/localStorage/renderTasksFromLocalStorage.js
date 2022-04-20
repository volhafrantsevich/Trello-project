import { renderTask } from "../addUtils/addTasks";

const cardsLists = document.querySelectorAll(".cards-list");

export function renderTasksFromLocalStorage() {
    let parseTasks = JSON.parse(localStorage.getItem('tasks'));

    if (parseTasks === null) {
        return;
    } else {
        for (let i = 0; i < parseTasks.length; i++) {
            const task = renderTask(parseTasks[i]);
            cardsLists[0].append(task);
        }
    }
}