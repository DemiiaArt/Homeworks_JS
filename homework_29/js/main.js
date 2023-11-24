const box = document.querySelector('.box')
const root = document.querySelector('.root')
const parentBox = document.querySelector('body')
console.log(box.getBoundingClientRect());
// console.dir(box);

const someText = document.createElement('h2')
parentBox.insertBefore(someText, root)
// someText.textContent = 'БЕМС';
someText.classList.add('text');


window.addEventListener('keydown', (event) => {
    // console.log(event);
    const step = 10;
    const boxPosit = box.getBoundingClientRect(); 
    const parentBoxPosit = parentBox.getBoundingClientRect(); 
    // console.log(parentBoxPosit);
    let newTop = boxPosit.top
    let newLeft = boxPosit.left

    switch(event.code) {
        case 'ArrowDown': 
            newTop += step;
            if (newTop + boxPosit.height < parentBoxPosit.bottom) {
                box.style.top = newTop + 'px';
            } else {
                box.style.top = (parentBoxPosit.bottom - boxPosit.height - step * 2) + 'px';
                bems();
            }
            break;
        case 'ArrowUp': 
            newTop -= step;
            if (newTop > parentBoxPosit.top) {
                box.style.top = newTop + 'px';
            } else {
                box.style.top = (parentBoxPosit.top + step * 2) + 'px';
                bems();
            }
            break;
        case 'ArrowLeft': 
            newLeft -= step;
            if (newLeft > parentBoxPosit.left) {
                box.style.left = newLeft + 'px';
            } else {
                box.style.left = (parentBoxPosit.left + step * 2) + 'px';
                bems();
            }
            break;
        case 'ArrowRight': 
            newLeft += step;
            if (newLeft + boxPosit.width < parentBoxPosit.right) {
                box.style.left = newLeft + 'px';
            } else {
                box.style.left = (parentBoxPosit.right - boxPosit.width - step * 2) + 'px';
                bems();
            }
            break;
        case 'Space':
            box.style.transform = 'translateY(-10px)'
            setTimeout(()=> {
                box.style.transform = 'translateY(0)'
            }, 150)
            break;
        case 'ControlLeft':
        case 'ControlRight': 
            const currentHeight = boxPosit.height;
            const translateY = 200 * 0.4;
            if (currentHeight === 200) {
                const newHeight = currentHeight * 0.6;
                const newWidth = currentHeight * 1.25;

                box.style.top = `${boxPosit.top + translateY}px`;
                box.style.height = `${newHeight}px`;
                box.style.width = `${newWidth}px`;
                console.log(box.getBoundingClientRect());
            } else {
                const newHeight = 200;
                // const translateY = currentHeight * 0.6;
                box.style.height = `${newHeight}px`;
                box.style.top = `${boxPosit.top - translateY}px`;
                box.style.width = `${newHeight}px`;
                console.log(box.getBoundingClientRect());
            }
            break;
    }
})

function bems() {
    someText.textContent = 'БЕМС !';
    someText.style.opacity = '1'
    setTimeout(() => {
        someText.textContent = ''
        someText.style.opacity = '0'
    }, 2000)
}



//1. При першому присіданні вилазить косяк
//2. квадрат не доходить до краю екрану а одразу відскакує на 20 пкс