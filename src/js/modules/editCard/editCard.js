import { todo } from '../addUtils/addTasks';
import { todoObj } from '../addUtils/addTasks';

export function editCard() {

    const btnEditCard = document.getElementsByClassName("btn btn-edit");


    for (let i = 0; i < btnEditCard.length; i++) {
        btnEditCard[i].addEventListener("click", (e) => {
            let parentCard = e.currentTarget.parentElement.parentElement;
    
            const titleTask = document.querySelector(".title_task");
            let titleValue = titleTask.innerHTML;

            const descripTask = document.querySelector(".descrip_task")
            let descripValue = descripTask.innerHTML;

            const dateTask = document.getElementById("card-form__deadline");
            let dateValue = dateTask.innerHTML;

            let editItem = document.createElement("div");
            editItem.className = "card-form edit-item";
            parentCard.append(editItem);

            editItem.innerHTML = `<input class="card-form__title item" type="text" value="${titleValue}" placeholder="Title"/>
        <textarea class="card-form__desc item" placeholder="Description">${descripValue}</textarea>
        <label for="card-form__deadline">
          <input class="item" id="card-form__deadline" type="datetime-local" />
        </label>
        <div class="card-form__choices" id="templateForSelect">
            <select class="item">
                      <option value="Select user" selected>
                        Select user
                      </option>
                      <option value="User 1">User 1</option>
                      <option value="User 2">User 2</option>
                      <option value="User 3">User 3</option>
                    </select>
                    <div class="card-form__buttons">
                      <button class="item btn-cancel" type="reset">
                        Cancel
                      </button>
                      <button class="item btn-confirm" type="submit">
                        Confirm
                      </button>
                    </div>
                  </div>`;
            console.log(parentCard);
            editItem.style.display = "block";

        });
    }
}
export function addEditTask() {
        const editConfirmBtn = document.getElementsByClassName("item btn-confirm");
        const editCancelBtn = document.getElementsByClassName("item btn-cancel");
        function getValueOption() {
            const formSelectUser = document.querySelector(".card-form__choices select");
            let userName = formSelectUser.value;

            // Инициалы
            let parts = userName.split(" ");
            let initials = "";
            for (let i of parts) {
                initials += i[0];
            }

            formSelectUserValue = initials.toUpperCase();
        }

        editConfirmBtn.addEventListener("click", (event) => {
            getValueOption();
            todoObj.titleTask = titleValue;
            todoObj.descripTask = descripValue;
            /*todoObj.dueDateValue = formDueDateValue;
            todoObj.selectUserValue = formSelectUserValue;
*/
            let parent = event.target.parentElement;
            let parentId = +parent.getAttribute("id");
            todoObj.board = parentId;
            todoObj.id = new Date().getTime();

            let parsedToDo = JSON.parse(localStorage.getItem("tasks"));
            if (parsedToDo !== null) {
                todo = parsedToDo;
            } else {
                todo = [];
            }

            todo.push(todoObj);
            updateLocalStorageForTasks(todo);
            console.log(todo);

            renderTask(todoObj);

            cardsLists[0].appendChild(newCard);

            titleTask.value = "";
            titleValue = "";
            descripTask.value = "";
            descripValue = "";
            //formDueDate.value = "";
            //formDueDateValue = "";
            // formSelectUser.value = "Select user";
            //formSelectUserValue = "";
            editItem.style.display = "none";

            delCard();
            editCard();
            createDragAndDrop();
            console.log(todo);
        });

        // Cancel
        editCancelBtn.addEventListener("click", () => {
            editItem.style.display = "none";
            titleTask.value = "";
            titleValue = "";
            descripTask.value = "";
            descripValue = "";
            //formDueDate.value = "";
            //formDueDateValue = "";
            // formSelectUser.value = "Select user";
            //formSelectUserValue = "";

            console.log("cancel");
        });
    
}