import { todoObj } from "../addUtils/addTasks"
let draggedCard;

export function createDragAndDrop() {
	const cards = document.querySelectorAll(".board__card");
	const cardsLists = document.querySelectorAll(".cards-list");

	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];

		card.addEventListener("dragstart", () => {
			draggedCard = card;
			draggedCard.classList.add("dragged");

			setTimeout(() => {
				card.style.display = "none";
			}, 0);
		});

		card.addEventListener("dragend", (e) => {
			draggedCard.classList.remove("dragged");

			let parent = e.target.parentElement;
			let parentId = parent.getAttribute("id");

			//localStorage
			let parsedToDo = JSON.parse(localStorage.getItem("tasks"));
			parsedToDo.forEach((todoObj, i) => {
				if (e.target.id === todoObj.id) {
					parsedToDo.splice(i, 1)
					todoObj.board = parentId;
					parsedToDo.push(todoObj);
				}
			});
			localStorage.setItem('tasks', JSON.stringify(parsedToDo));

			function getTotal2() {
				const total2 = document.getElementsByClassName('total');
				const cardLists = document.querySelectorAll('.cards-list');

				for (let i = 0; i < total2.length; i++) {
					for (let j = 0; j < cardLists.length; j++) {
						if (j === i) {
							// не работает
							total2[i].innerText = `${cardLists[j].length}`;
						}
					}
				}
			}
			getTotal2()

			setTimeout(() => {
				card.style.display = "flex";
				draggedCard = null;
			}, 0);
		});

		for (let j = 0; j < cardsLists.length; j++) {
			const list = cardsLists[j];

			list.addEventListener("dragover", (e) => e.preventDefault());
			list.addEventListener("dragenter", function (e) {
				e.preventDefault();
				this.style.backgroundColor = "rgba(0,0,0,0.1)";
			});

			list.addEventListener("dragleave", function (e) {
				this.style.backgroundColor = "rgba(0,0,0,0)";
			});

			list.addEventListener("drop", function (e) {
				this.style.backgroundColor = "rgba(0,0,0,0)";
				this.append(draggedCard);
			});
		}
	}
}
createDragAndDrop();
