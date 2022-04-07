import { createTemplateSelect } from "./createTemplateSelect";

export async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(url);
    const users = await response.json();

    const select = createTemplateSelect(users);
    const wrapForSelect = document.querySelector('#templateForSelect');
    wrapForSelect.appendChild(select);  
}