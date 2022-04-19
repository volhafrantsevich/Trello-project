// localStorage for tasks
import { renderTasksFromLocalStorage } from "./modules/localStorage/renderTasksFromLocalStorage";
import { todo } from "./modules/addUtils/addTasks";

import { renderBoardsFromLocalStorage } from "./modules/localStorage/renderBoardsFromLocalStorage";

renderTasksFromLocalStorage(todo);
renderBoardsFromLocalStorage();

import { getUsers } from "./modules/select/getUsers";

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

//DelAll
import { delAll } from "./modules/delUtils/delAll";

import { warningDeleteAll } from "./modules/warningDeletAll/warningDeleteAll";
