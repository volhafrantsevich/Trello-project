export function delBoard() {
	const boardsList = document.querySelectorAll(".board");
	boardsList.forEach(board => {
		if (board === boardsList[0]) {
			return
		} else {
			board.addEventListener('dblclick', (e) => {
				e.currentTarget.remove();
				let boardId = +e.currentTarget.getAttribute('id');
				console.log(boardId);
				//localSt
				const parsedBoards = JSON.parse(localStorage.getItem("boards"));
				parsedBoards.forEach((board, i) => {
					if (board.id === boardId) {
						parsedBoards.splice(i, 1);
					}
				})
			localStorage.setItem('boards', JSON.stringify(parsedBoards))
			})
		}
	})
}
delBoard()