// Создание новых досок
import { createDragAndDrop } from "../drag&drop/drag&drop";

const btnAddBoard = document.querySelector(".btn-add-board");
btnAddBoard.addEventListener("click", addBoards);

const boards = document.querySelector(".boards-wrapper");

export function addBoards() {
  const boardItem = document.createElement("div");
  boardItem.classList.add("board");

  const boardsList = document.getElementsByClassName("board");
  let id = boardsList.length;

  boardItem.innerHTML = `
    <div class="board__title">
      <h2 contenteditable="true">New Board</h2>
      <p>0</p>
    </div>

    <div class="cards-list" id="${id}"></div>
  `;

  boards.append(boardItem);

  createDragAndDrop();
}
