// Появление формы для заполнения информацией для создания новой карточки с заданием
// Делегирование событий - Поведение: «Переключатель» (Toggler)
// При клике на элемент с атрибутом data-toggle-id будет скрываться/показываться элемент с заданным id:

export function showFormForNewTask() {
  document.addEventListener("click", function (event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.style.display = "block";
  });
}

showFormForNewTask();

const cardsList = document.querySelectorAll(".cards-list");

const formTitle = document.querySelector(".card-form__title");
let formTitleValue = "";

const formDescription = document.querySelector(".card-form__desc");
let formDescriptionValue = "";

const formDueDate = document.querySelector(".card-form__deadline input");
let formDueDateValue = "";

const formSelectUser = document.querySelector(".card-form__choices select");
let formSelectUserValue = "";

const formCancelBtn = document.querySelector(".btn-cancel");
const formConfirmBtn = document.querySelector(".btn-confirm");

// События на поля формы для нового задания - пока для примера на заголовок и кнопку confirm
export function addCard() {
  cardTitle.addEventListener("input", (event) => {
    cardTitleValue = event.target.value;
  });

  const formConfirmBtn = document.querySelector(".btn-confirm");

  formConfirmBtn.addEventListener("click", () => {
    const newCard = document.createElement("div");
    newCard.classList.add("board__card");
    newCard.innerHTML = `<div class="board__block" draggable="true">
                    <p>${cardTitleValue}</p>
                    <p>Description</p>
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                        />
                      </svg>
                      >Time
                    </p>
                    <div class="photo">
                      <img
                        src="./assets/images/png-transparent-silhouette-child-woman-silhouette-child-face-animals.png"
                        alt="userPhoto"
                      />
                    </div>
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
                  </div>
                  <div class="card-form edit-item">
                    <input
                      class="card-form__title item"
                      type="text"
                      placeholder="Title"
                    />
                    <textarea
                      class="card-form__desc item"
                      placeholder="Description"
                    ></textarea>

                    <label for="card-form__deadline">
                      <input
                        class="item"
                        id="card-form__deadline"
                        type="datetime-local"
                      />
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
                    </div>
                  </div>`;

    cardsList.append(newCard);
  });
}