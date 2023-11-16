const container = document.querySelectorAll('ul')
const liElement = document.querySelector('li')

// const lastLi = container.lastElementChild
// console.log(lastLi);

// console.log(container);


for (i = 0; i < container.length; i++) {
    container[i].lastElementChild.classList.add('last')
}


function setFirstItemClassName(level) {
    
}




// let lastLi = document.querySelectorAll('.last')
// setTimeout(() => lastLi[i].style.backgroundColor = 'green', 2000)