//генеруємо рандомне число
const randomNumber = Math.floor(Math.random() * (10 - 1) + 1)
// console.log(randomNumber);

const root = document.querySelector('#root')

//створюємо динамічний елемент-зображення
const randomImg  = document.createElement('img')
randomImg.width = '300'
randomImg.src = `../media/${randomNumber}.jpg`

//прив'язуємо динамічний контент до html
root.appendChild(randomImg)