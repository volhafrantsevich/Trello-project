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
			let parentId = +parent.getAttribute("id");
			todoObj.board = parentId;
			console.log(todoObj.board);

			//localStorage
			let parsedToDo = JSON.parse(localStorage.getItem("tasks"));
			parsedToDo.forEach(element => {
				//e.target.id не работает
				if (e.target.id === element.id) {
					todoObj.board = parentId
					console.log(todoObj.board)
					localStorage.setItem('tasks', JSON.stringify(element));
				}
			});

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
