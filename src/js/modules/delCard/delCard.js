import { todo } from '../addUtils/addTasks';

export function delCard() {

	const btnDelCard = document.getElementsByClassName('btn btn-delete');
	for (let i = 0; i < btnDelCard.length; i++) {
		btnDelCard[i].addEventListener('click', (e) => {
			let parentCard = e.currentTarget.parentElement.parentElement;		
			parentCard.remove();
		})
	}
}

