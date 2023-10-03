let birthdayDate = prompt('Write your birthday year');
let userAge = '';
let userAgeMessage = '';

while (isNaN(birthdayDate)) {
    alert('Oh no, write your birthday year as a number');
    birthdayDate = prompt('Write your birthday year');
}

if (birthdayDate === null || birthdayDate.trim() === '') {
    alert('It is a pity that you didnt want to enter yours birthday yaer =( ');
} else {
        userAge = 2023 - parseInt(birthdayDate);
        userAgeMessage = `You are ${userAge} years old.`
}

let userLocation = prompt('Where do you live?');
let userCity = '';

if (userLocation === null || userLocation.trim() === '') {
    alert('It is a pity that you didnt want to enter yours city =( ');
} else {
    if (userLocation.trim() === 'Kyiv') {
        userCity = `You live in the capital city - ${userLocation}.`;
    } else if (userLocation.trim() === 'Washington') {
        userCity = `You live in the capital city - ${userLocation}.`;
    } else if (userLocation.trim() === 'London') {
        userCity = `You live in the capital city - ${userLocation}.`;
    } else {
        userCity = `You live in the ${userLocation} city.`;
    }
}


let userSport = prompt('What kind of sport do you prefer?');
let sportMessage = '';
let sportIdol = '';

if (userSport === null || userSport.trim() === '') {
    alert('It is a pity that you didnt want to enter yours favourite sport =( ');
} else {
    switch (userSport) {
        case 'football':
            sportIdol = 'Cristiano Ronaldo';
            sportMessage = `Cool! Your favourite sport is ${userSport}. Will you want to be as ${sportIdol}? `;
            break;
        case 'basketball':
            sportIdol = 'Maikl Jordan';
            sportMessage = `Cool! Your favourite sport is ${userSport}. Will you want to be as ${sportIdol}? `;
            break;
        case 'racing':
            sportIdol = 'Michael Schumacher';
            sportMessage = `Cool! 1587Your favourite sport is ${userSport}. Will you want to be as ${sportIdol}? `;
            break;
        default:
            sportMessage = `Cool! Your favourite sport is ${userSport}. `
    }
}



if ((birthdayDate === null || birthdayDate.trim() === '') && (userLocation === null || userLocation.trim() === '') && (userSport === null || userSport.trim() === '') ) {
    alert('Oh no! It is no information about you =(')
} else {
    alert(`${userAgeMessage} ${userCity} ${sportMessage}`);
}