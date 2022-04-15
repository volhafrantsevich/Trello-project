import { getUsers } from "./modules/select/getUsers";

getUsers();

/**Clock */
import { showTime } from "./modules/clock/showTime"
setInterval(showTime, 1000);


//Boards
import { addBoards } from "./modules/addUtils/addBoards";

//Cards with tasks
import { addTask } from "./modules/addUtils/addTasks";
addTask();

//Drag&drop
import { createDragAndDrop } from "./modules/drag&drop/drag&drop";
createDragAndDrop()
