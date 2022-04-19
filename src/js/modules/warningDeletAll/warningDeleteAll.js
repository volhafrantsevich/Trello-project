import {todo} from '../addUtils/addTasks'
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

//Удаление всех карточек

btnConfirmDelAll.addEventListener('click', ()=> {      
    
    const cardList = document.querySelectorAll('.cards-list > .board__card')
    for (let i =0; i < cardList.length; i++ ){
        cardList[i].outerHTML = '';             
    } 
    warningDelAll.style.display = 'none';   
    todo.length = 0;
})

// Счетчик карточек

function getTotal(){
    const cardList = document.querySelectorAll('.cards-list > .board__card')
    total.textContent = cardList.length;    
}
setInterval(getTotal,1)









