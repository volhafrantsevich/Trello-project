import { addBoards } from "../addUtils/addBoards";

const boards = document.querySelector(".boards-wrapper");

export function renderBoardsFromLocalStorage() {
  let parseBoards = JSON.parse(localStorage.getItem("boards"));
console.log(parseBoards.length + 'boardsArr.length (LS) by rendering')
  if (parseBoards.length === 1) {
    return;
  } else {
    for (let i = 0; i < parseBoards.length; i++) {
      const board = addBoards(parseBoards[i]);
      boards.append(board);
    }
  }
}