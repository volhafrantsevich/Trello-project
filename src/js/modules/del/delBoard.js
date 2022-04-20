export function delBoard() {
	const boardsList = document.querySelectorAll(".board");
	boardsList.forEach(board => {
		if (board === boardsList[0]) {
			return
		} else {
			board.addEventListener('dblclick', (e) => {
				e.currentTarget.remove()
			})
		}
	})
}
delBoard()