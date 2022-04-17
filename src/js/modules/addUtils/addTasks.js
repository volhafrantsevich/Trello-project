import { createDragAndDrop } from "../drag&drop/drag&drop";

const cardsLists = document.querySelectorAll(".cards-list");

const addCardBtn = document.querySelector(".btn-add");

const formAdd = document.querySelector(".card-form.add-item");

const formTitle = document.querySelector(".card-form__title");
let formTitleValue = "";

const formDescription = document.querySelector(".card-form__desc");
let formDescriptionValue = "";

const formDueDate = document.querySelector("#card-form__deadline");
let formDueDateValue = "";

let formSelectUserValue = "";

let todo = [];

const formCancelBtn = document.querySelector(".btn-cancel");
const formConfirmBtn = document.querySelector(".btn-confirm");

export function addTask() {
  // Появление формы для карточки с новым заданием
  addCardBtn.addEventListener("click", () => {
    formAdd.style.display = "block";
	 cardsLists[0].appendChild(formAdd);
  });

  // Добавление информации в форму для новой карточки
  // Заголовок нового задания
  formTitle.addEventListener("input", (event) => {
    formTitleValue = event.target.value;
  });

  // Description нового задания
  formDescription.addEventListener("input", (event) => {
    formDescriptionValue = event.target.value;
  });

  // Due Date нового задания
  formDueDate.addEventListener("input", (event) => {
    formDueDateValue = event.target.value;
  });

  // Select User нового задания
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

  // Кнопка Confirm
  formConfirmBtn.addEventListener("click", () => {
    getValueOption();

    todo.push({
      titleValue: formTitleValue,
      descriptionValue: formDescriptionValue,
      dueDateValue: formDueDateValue,
      selectUserValue: formSelectUserValue,
    });

    function renderTask(
      formTitleValue,
      formDescriptionValue,
      formDueDateValue,
      formSelectUserValue
    ) {
      return (newCard.innerHTML = `
                  <div class="board__block">
                    <p>${formTitleValue}</p>
                    <p>${formDescriptionValue}</p>
                    <div class="clock">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                        />
                      </svg>
                      ${formDueDateValue}
                    </div>
                    <div class="user">${formSelectUserValue}</div>
                  </div>

                  <div class="board__buttons">
                    <button class="btn btn-edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                        />
                      </svg>
                    </button>
                    <button class="btn btn-delete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                        />
                      </svg>
                    </button>
                  </div>`);
    }

    const newCard = document.createElement("div");
    newCard.classList.add("board__card");
    newCard.draggable = true;

    renderTask(
      formTitleValue,
      formDescriptionValue,
      formDueDateValue,
      formSelectUserValue
    );

    cardsLists[0].appendChild(newCard);

    formTitle.value = "";
    formTitleValue = "";
    formDescription.value = "";
    formDescriptionValue = "";
    formDueDate.value = "";
    formDueDateValue = "";
    // formSelectUser.value = "Select user";
    formSelectUserValue = "";
    formAdd.style.display = "none";
	 
	 createDragAndDrop()
  });

  // Кнопка Cancel
  formCancelBtn.addEventListener("click", () => {
    formTitle.value = "";
    formTitleValue = "";
    formDescription.value = "";
    formDescriptionValue = "";
    formDueDate.value = "";
    formDueDateValue = "";
    // formSelectUser.value = "Select user";
    formSelectUserValue = "";
    formAdd.style.display = "none";
  });
}
