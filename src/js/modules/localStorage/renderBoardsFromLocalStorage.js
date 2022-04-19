import { addBoards } from "../addUtils/addBoards";

const boards = document.querySelector(".boards-wrapper");

export function renderBoardsFromLocalStorage() {
  let parseBoards = JSON.parse(localStorage.getItem("boards"));

  if (parseBoards === null) {
    return;
  } else {
    for (let i = 0; i < parseBoards.length; i++) {
      const board = addBoards(parseBoards[i]);
      boards.append(board);
    }
  }
}
