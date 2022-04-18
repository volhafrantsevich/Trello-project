export 
const btnDeleteAll = document.querySelector('.btn-delete-all');
const warningDelAll = document.querySelector('.warning.del-all');
const itemBtnCancel = document.querySelector('.btn-cancel-delAll');
const btnConfirmDelAll = document.querySelector('.btn-confirm-delAll');
const total = document.querySelector('.total');

warningDelAll.style.display = 'none';

btnDeleteAll.addEventListener('click', () => {
    warningDelAll.style.display = 'block';
})

itemBtnCancel.addEventListener('click', () => warningDelAll.style.display = 'none' )

import {todo} from '../addUtils/addTasks'



//Удаление всех карточек

btnConfirmDelAll.addEventListener('click', ()=> {   
    todo.length = 0;
    total.textContent = todo.length;
    const cardList = document.querySelectorAll('.cards-list > .board__card')
    for (let i =0; i < cardList.length; i++ ){
        cardList[i].outerHTML = '';             
    } 
    warningDelAll.style.display = 'none';   
    console.log(cardList.length);
})

// Счетчик карточек

function getTotal(){
    total.textContent = todo.length;
}
setInterval(getTotal,1)






