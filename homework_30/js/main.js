const box = document.querySelector('.block');
const body = document.querySelector('body');

//Рандомне положення щосекунди
setInterval(() => {
    let boxWidth = box.clientWidth;
    let boxHeight = box.clientHeight;

    let maxTop = window.innerHeight - boxHeight;
    let maxLeft = window.innerWidth - boxWidth;

    let randomTop = Math.random() * maxTop;
    let randomLeft = Math.random() * maxLeft;

    box.style.top = `${randomTop}px`;
    box.style.left = `${randomLeft}px`;
}, 1000)


//Рандомний колір кожні пів секунди
setInterval(() => {
    let redColor = Math.floor(Math.random()* (255 - 0) + 0);
    let greenColor = Math.floor(Math.random()* (255 - 0) + 0);
    let blueColor = Math.floor(Math.random()* (255 - 0) + 0);
    // console.log(redColor);
    box.style.background = `rgb(${redColor}, ${greenColor}, ${blueColor})` 
}, 500)
