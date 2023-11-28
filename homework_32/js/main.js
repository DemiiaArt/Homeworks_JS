const refs = {
    smileList: document.querySelector('#list'),
}

const liTag = refs.smileList.children

const countField = document.createElement('p');


//!!!!!!!!чому не може вставити динамічно????
// refs.listLi.forEach(item => {
//     item.appendChild(countField)
// })

let counter;

function onSmileClick (event) {
    // console.log(event.target);
    // console.log(event.currentTarget);

    if (event.target.nodeName !== 'BUTTON') {
        return
    }

    currentActiveBtn = event.currentTarget.querySelector('.tapButton');

    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('tapButton')
    }

    const nexTapBtn = event.target;
    nexTapBtn.classList.add('tapButton')
    
    const currentP = event.currentTarget.querySelector('.tapButton ~ .counter')
    currentP.textContent = `${counter}`;

    //як прив'язати індивідуальний лічильник для кожного елементу?
    //або як задати counter всередині ф-ції?
}

refs.smileList.addEventListener('click', onSmileClick);