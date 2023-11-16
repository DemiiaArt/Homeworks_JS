const textAreaField = document.querySelector('#userText');
const container = document.querySelector('section');


const ghostDiv = document.createElement('div');
ghostDiv.classList.add('ghostD');
ghostDiv.textContent = 'I`m a GHOST!';

//при фокусуванні додаємо div
textAreaField.addEventListener('focus', function() {
    container.appendChild(ghostDiv);
})

//при знятті фокусу прибираємо div
textAreaField.addEventListener('blur', function() {
    container.removeChild(ghostDiv);
})

