// localStorage for tasks
import { renderTasksFromLocalStorage } from "./modules/localStorage/renderTasksFromLocalStorage";
import { getUsers } from "./modules/select/getUsers";

import { renderBoardsFromLocalStorage } from "./modules/localStorage/renderBoardsFromLocalStorage";

import { checkBoardsAmount } from "./modules/addUtils/addBoards"
checkBoardsAmount() 

// function updateLocalStorageInitBoard() {
// 	const board = document.querySelectorAll(".board");

// 	let boardsArr = JSON.parse(localStorage.getItem("boards"));
// 	let id = 0;
// 	let boardTitleValue = "New board";
// 	if (boardsArr === null) {
// 		boardsArr.push({
// 			id: id,
// 			title: boardTitleValue,
// 		})
// 	}
 	
	
// 	localStorage.setItem('boards', JSON.stringify(boardsArr));
// };
// updateLocalStorageInitBoard();

renderTasksFromLocalStorage();
renderBoardsFromLocalStorage();

getUsers();

/**Clock */
import { showTime } from "./modules/clock/showTime";
setInterval(showTime, 1000);

//Boards
import { addBoards } from "./modules/addUtils/addBoards";

//Cards with tasks
import { addTask } from "./modules/addUtils/addTasks";
addTask();

//Drag&drop
import { createDragAndDrop } from "./modules/drag&drop/drag&drop";
createDragAndDrop();

//Del
import { warningDeleteAll } from "./modules/warningDeletAll/warningDeleteAll";

import { delCard } from "./modules/delCard/delCard"
delCard()

