import { updateLocalStorageForTasks } from "../localStorage/updateLocalStorageTasks";

export function delCard() {

	const btnDelCard = document.getElementsByClassName('btn btn-delete');
	for (let i = 0; i < btnDelCard.length; i++) {
		btnDelCard[i].addEventListener('click', (e) => {
			let parentCard = e.currentTarget.parentElement.parentElement;
			let parentCardId = parentCard.getAttribute('id');
			console.log(parentCardId + ' id карточки')
			parentCard.remove();
			//localSt
			let parsedToDo = JSON.parse(localStorage.getItem("tasks"));
			parsedToDo.forEach((todoObj, i) => {
				if (parentCardId === todoObj.id) {
					
			parsedToDo.splice(i, 1);
			console.log(parsedToDo)

				}
			})
			updateLocalStorageForTasks(parsedToDo);
			
		})
	}
}

