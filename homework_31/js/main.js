const refs = {
    enterBtn: document.querySelector('#user-prompt'),
    submitBtn: document.querySelector('#go'),
}

function goLink (event, link) {
    event.href = link;
}

function changeLink(link) {
    let stringLink = link.toString();

    if (stringLink.startsWith('www')) {
        return newLink = 'https://' + stringLink;
    } else {
        alert('Введіть дійсне посилання')
        return usersPrompt()
    }
}

function usersPrompt () {
    let currentLink = prompt('Enter the link here: ');

    //перевірка протоколу та введеного посилання
    currentLink.toString().startsWith('http') ? currentLink : currentLink = changeLink(currentLink);

    //класи для відображення активних кнопок
    refs.enterBtn.classList.add('positive');
    refs.submitBtn.classList.add('active');

    refs.submitBtn.addEventListener('click', goLink(refs.submitBtn, currentLink))
}


refs.enterBtn.addEventListener('click', usersPrompt)




// www.google.com/
// https://www.google.com/