/*const container = document.querySelectorAll('ul')
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
*/

/*//Start
const root = document.querySelector('ul.root');
console.log(root);

const setFirstItemClassNameL1 = (level, ul) => {
    const liFirst = ul.querySelector('li:first-of-type')
    liFirst.classList.add('firstLevel')

    //querySelectorAll
    const allList = ul.querySelector('li')
    console.log(allList);

    //children
    const list = ul.children;
    console.log(list);

    // list.forEach(li => console.log(li);) //error

    for (let i = 0; i < list.length; i++) {
        let li = list[i]
    };


}

setFirstItemClassNameL1 (1, root);
*/

/*//!secondLevel

const root2 = document.querySelector('ul.root');
console.log(root2);

const setFirstItemClassNameL2 = (level, ul) => {

    // const liFirst = ul.querySelector('li:first-of-type')
    // liFirst.classList.add('firstLevel')

    const liOriginArray = [...ul.children]
    console.log(liOriginArray);

    liOriginArray.forEach(li => {
        const innerUls = [...li.children]
        console.log(innerUls);

        innerUls.forEach(innerUl => innerUl.querySelector('li').classList.add('secondLevel'))
    })
}

setFirstItemClassNameL2 (1, root2);
*/

//adding


//доступ до всіх перших лішок будь-якої вкладеності
// const setFirstItemClassNameL3WithQuerySelectorAll = (ul) => {
//     const liFirst = ul.querySelectorAll('li:first-of-type')
//     liFirst.forEach(li => li.classLIst.add('firstLevel'));
// }

const root3 = document.querySelector('ul.root');
console.log(root3);

const setFirstItemClassNameL3 = (level, ul) => {

    level--

    if ( level > 0 ) {
        const liOriginArray = [...ul.children];
    
        liOriginArray.forEach(li => {
    
            const innerUls = [...li.children];
            console.log(innerUls);
    
            innerUls.forEach(innerUl => setFirstItemClassNameL3(level, innerUl));
        });
    } else {
        const liFirst = ul.querySelector('li:first-of-type');
        liFirst.classList.add('firstLevel');
    }
};

setFirstItemClassNameL3 (2, root3);