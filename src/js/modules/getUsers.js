import { createTemplateSelect } from "./createTemplateSelect";

export async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(url);
    const users = await response.json();
    console.log(users);

    const select = createTemplateSelect(users);
    const wrapForSelect = document.querySelectorAll('.card-form__choices');
    wrapForSelect.appendChild(select);  
}