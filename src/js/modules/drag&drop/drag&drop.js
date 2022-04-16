let draggedCard;

export function createDragAndDrop() {

	const cards = document.querySelectorAll('.board__card');
	const cardsLists = document.querySelectorAll('.cards-list');

	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];

		card.addEventListener('dragstart', () => {
			draggedCard = card;
			draggedCard.classList.add('dragged');
			setTimeout(() => {
				card.style.display = 'none'
			}, 0)
		})

		card.addEventListener('dragend', () => {
			draggedCard.classList.remove('dragged');
			draggedCard = null;

			setTimeout(() => {
				card.style.display = 'block';
			}, 0)
		})

		for (let j = 0; j < cardsLists.length; j++) {

			const list = cardsLists[j];

			list.addEventListener('dragover', e => e.preventDefault())
			list.addEventListener('dragenter', function (e) {
				e.preventDefault()
				this.style.backgroundColor = 'rgba(0,0,0,0.5)'
			})

			list.addEventListener('dragleave', function (e) {
				// e.preventDefault()
				this.style.backgroundColor = 'rgba(0,0,0,0)'
			})

			list.addEventListener('drop', function (e) {
				// e.preventDefault()
				this.style.backgroundColor = 'rgba(0,0,0,0)'
				this.append(draggedCard)
			})
		}
	}
}
createDragAndDrop()