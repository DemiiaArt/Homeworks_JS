const container = document.querySelectorAll('ul')
const liElement = document.querySelector('li')

//додаємо клас last усім останнім li у групах
for (i = 0; i < container.length; i++) {
    container[i].lastElementChild.classList.add('last')
}

//Ф-ція, яка встановлює першому li рівня - клас first
function setFirstItemClassName(level) {
    const rootList = document.querySelector('.root');
    const subList = document.querySelectorAll('.root ul');

    switch (level) {
        case 1: return rootList.firstElementChild.classList.add('first');
        case 2: return subList.forEach(subUl => subUl.firstElementChild.classList.add('first'));
        default : return 'неіснуючий рівень вкладеності'
    }
}

setFirstItemClassName(2)
// setFirstItemClassName(1)


//перефарбовуємо класи в червоний (клас first) та зелений (клас last) з затримкою 2 секунди
let lastLi = document.querySelectorAll('.last')
setTimeout(() => lastLi.forEach(item => {item.style.backgroundColor = 'rgba(100, 255, 50, .5'}), 2000)

let firstLi = document.querySelectorAll('.first')
setTimeout(() => firstLi.forEach(item => {item.style.backgroundColor = 'rgba(255, 10, 0, .5'}), 2000)


//як альтернативу для setTimeout(), можна зробити затримку перефарбування через стилі:
// lastLi.forEach(item => {item.style.backgroundColor = 'rgba(100, 255, 50, .5'; item.style.transition = 'background-color 2s'})