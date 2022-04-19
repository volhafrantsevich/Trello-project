const formAdd = document.querySelector(".card-form");
const editBtn = document.querySelector(".btn-edit");
const cards = document.querySelectorAll('.board__card');

export function editTask() {

    editBtn.addEventListener("click", () => {
        formAdd.style.display = "block";
      });
}