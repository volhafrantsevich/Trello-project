// Создание новых досок
import { createDragAndDrop } from "../drag&drop/drag&drop";
import { delBoard } from "../del/delBoard"
import { editBoardTitle } from "../edit/editBoardTitle";
import { renderBoardsFromLocalStorage } from "../localStorage/renderBoardsFromLocalStorage";

const btnAddBoard = document.querySelector(".btn-add-board");
btnAddBoard.addEventListener("click", addBoards);

const boards = document.querySelector(".boards-wrapper");

export function addBoards() {
	const boardItem = document.createElement("div");
	boardItem.classList.add("board");

	const boardsList = document.querySelectorAll(".board");
	let id = boardsList.length;

	boardItem.setAttribute('id', `${id}`);

	let boardTitleValue = "Ahahaha";

	boardItem.innerHTML = `
    <div class="board__title">
      <h2 class="titleB" contenteditable="true">${boardTitleValue}</h2>
      <p class="total">0</p>
    </div>

    <div class="cards-list" id="${id}"></div>
  `;

	boards.append(boardItem);
	editBoardTitle()
	// localStorage

	let boardsArr = JSON.parse(localStorage.getItem("boards"));
	console.log(boardsArr.length + 'boardsArr.length (LS) by adding')

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

	if (boardsList.length > 4) {
		btnAddBoard.setAttribute("disabled", "disabled")
		btnAddBoard.style.display = 'none'
	}
}