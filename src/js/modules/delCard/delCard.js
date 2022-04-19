import { todo } from '../addUtils/addTasks';
import { updateLocalStorageForTasks } from "../localStorage/updateLocalStorageTasks";

export function delCard() {

	const btnDelCard = document.getElementsByClassName('btn btn-delete');
	for (let i = 0; i < btnDelCard.length; i++) {
		btnDelCard[i].addEventListener('click', (e) => {
			let parentCard = e.currentTarget.parentElement.parentElement;
			let parentCardId = +parentCard.getAttribute('id');
			console.log(parentCardId + ' id карточки')
			parentCard.remove();

			todo.forEach((todoObj, i) => {
				if (parentCardId === todoObj.id) {
					todo.splice(i, 1);
				}
			})
			updateLocalStorageForTasks(todo);
			//render?
		})
	}
}

