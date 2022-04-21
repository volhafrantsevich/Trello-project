// Создание новых досок
import { createDragAndDrop } from "../drag&drop/drag&drop";
import { delBoard } from "../del/delBoard"

const btnAddBoard = document.querySelector(".btn-add-board");
btnAddBoard.addEventListener("click", addBoards);

const boards = document.querySelector(".boards-wrapper");

export function addBoards() {
	const boardItem = document.createElement("div");
	boardItem.classList.add("board");

	const boardsList = document.querySelectorAll(".board");
	let id = boardsList.length;

	let boardTitleValue = "Ahahaha";

	boardItem.innerHTML = `
    <div class="board__title">
      <h2 contenteditable="true">${boardTitleValue}</h2>
      <p class="total">0</p>
    </div>

    <div class="cards-list" id="${id}"></div>
  `;

	boards.append(boardItem);

	// localStorage

	let boardsArr = JSON.parse(localStorage.getItem("boards"));

	if (boardsArr === null) {
		boardsArr = [];
	}

	boardsArr.push({
		id: id,
		title: boardTitleValue,
	});

	localStorage.setItem("boards", JSON.stringify(boardsArr));

	createDragAndDrop();
	checkBoardsAmount();
	delBoard();

	return boardItem;
}

export function checkBoardsAmount() {
	const boardsList = document.querySelectorAll(".board");
	const btnAddBoard = document.querySelector(".btn-add-board");
	console.log(boardsList.length)

	if (boardsList.length > 4) {
		btnAddBoard.setAttribute("disabled", "disabled")
		btnAddBoard.style.display = 'none'
	}
}