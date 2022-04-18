import { updateLocalStorageForTasks } from "../localStorage/updateLocalStorageTasks";
import { renderTask } from "../addUtils/addTasks";

const cardsLists = document.querySelectorAll(".cards-list");
const btnDelAll = document.querySelector('.btn.btn-delete-all');

btnDelAll.addEventListener('click', delAll);

export function delAll(){
	todo = [];
	updateLocalStorageForTasks();
	renderTask();
}