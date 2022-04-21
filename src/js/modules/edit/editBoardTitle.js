export function editBoardTitle() {
	const titles = document.querySelectorAll('.titleB');
	titles.forEach(title => {
		title.addEventListener('click', e => e.target.textContent = '');
		title.addEventListener('input', (e) => {
			const newTitle = title.textContent;
			const boardId = +e.currentTarget.parentElement.parentElement.getAttribute('id');
			console.log(boardId)
			//localSt
			const parsedBoards = JSON.parse(localStorage.getItem("boards"));
			parsedBoards.forEach((board, i) => {
				if (board.id === boardId) {
					parsedBoards.splice(i, 1);
					board.title = newTitle;
					parsedBoards.push(board);
				}
			})
			localStorage.setItem('boards', JSON.stringify(parsedBoards))
		})

	})

}
editBoardTitle()