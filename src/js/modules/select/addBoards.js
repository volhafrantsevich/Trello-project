// Создание новых досок

const btnAddBoard = document.querySelector(".btn-add-board");
btnAddBoard.addEventListener("click", addBoards);

const boards = document.querySelector(".boards-wrapper");

export function addBoards() {
  const boardItem = document.createElement("div");
  boardItem.classList.add("board");
  // boardItem.id = Math.random().toString(36).substring(2);
  let id = Math.random().toString(36).substring(2);
  boardItem.innerHTML = `<div class="board__title">
              <h2 contenteditable="true">Add Board Title:</h2>
              <p>0</p>
            </div>

            <div class="cards-list"></div>

            <div class="card-form add-item" id="${id}">
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

              <div class="card-form__choices">
                <select class="item">
                  <option value="Select user" selected>Select user</option>
                  <option value="User 1">User 1</option>
                  <option value="User 2">User 2</option>
                  <option value="User 3">User 3</option>
                </select>
                <div class="card-form__buttons">
                  <button class="item btn-cancel" type="reset">Cancel</button>
                  <button class="item btn-confirm" type="submit">
                    Confirm
                  </button>
                </div>
              </div>
            </div>

            <div class="board__bottom">
              <button class="btn btn-add" data-toggle-id="${id}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  />
                </svg>
                Add todo
              </button>
              <button class="btn btn-delete-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                  />
                </svg>
                Delete all
              </button>
            </div>`;

  boards.append(boardItem);
}
