// Создание новых досок

const btnAddBoard = document.querySelector(".btn-add-board");
btnAddBoard.addEventListener("click", addBoards);

const boards = document.querySelector(".boards-wrapper");

export function addBoards() {
  const boardItem = document.createElement("div");
  boardItem.classList.add("board");

  boardItem.innerHTML = `
    <div class="board__title">
      <h2 contenteditable="true">New Board</h2>
      <p>0</p>
    </div>

    <div class="cards-list"></div>
  `;

  boards.append(boardItem);
}
