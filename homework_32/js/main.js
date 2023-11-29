
const refs = {
    smileList: document.querySelector('#list'),
}

function onSmileClick (event) {

    if (event.target.nodeName !== 'BUTTON') {
        return
    }

    const currentActiveBtn = event.currentTarget.querySelector('.tapButton');

    const nexTapBtn = event.target;
    nexTapBtn.classList.add('tapButton')

    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('tapButton')
    }


    //лічильник для кількості кліків
    let currentCounter = nexTapBtn.parentNode.querySelector('.counter');

    if (!currentCounter) {
        currentCounter = document.createElement('p');
        currentCounter.classList.add('counter');
        nexTapBtn.parentNode.appendChild(currentCounter);
    }

    let currentValue = parseInt(currentCounter.textContent) || 0;
    currentCounter.textContent = ++currentValue;
}

function tapColorAdd (event) {
    if (event.target.nodeName !== 'BUTTON') {
        return
    }
    event.target.style.boxShadow = 'inset 1px 2px 5px rgb(170, 170, 170), inset -1px -2px 5px rgb(170, 170, 170)';
}

function tapColorRemove (event) {
    if (event.target.nodeName !== 'BUTTON') {
        return
    }
    event.target.style.boxShadow = 'none'
}


refs.smileList.addEventListener('click', onSmileClick);
refs.smileList.addEventListener('mousedown', tapColorAdd);
refs.smileList.addEventListener('mouseup', tapColorRemove);