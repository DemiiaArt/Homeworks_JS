let birthdayDate = prompt('Write your birthday year');
let userLocation = prompt('Where do you live?');
let userSport = prompt('What kind of sport do you prefer?');

const userAge = 2023 - parseInt(birthdayDate);

let userCity = '';
if (userLocation === 'Kyiv') {
    userCity = `You live in the capital city - ${userLocation}.`;
} else if (userLocation === 'Washington') {
    userCity = `You live in the capital city - ${userLocation}.`;
} else if (userLocation === 'London') {
    userCity = `You live in the capital city - ${userLocation}.`;
} else {
    userCity = `You live in the ${userLocation} city.`;
}

let sportMessage = '';
let sportIdol = '';

switch(userSport) {
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
        sportMessage = `Cool! Your favourite sport is ${userSport}. Will you want to be as ${sportIdol}? `;
        break;
    default:
        sportMessage = `Cool! Your favourite sport is ${userSport}. `
}


if (!birthdayDate) {
    alert(`It is a pity that you didnt want to enter yours birthday yaer =(  ${userCity} ${sportMessage} `);
} else if (!userLocation) {
    alert(`It is a pity that you didnt want to enter yours city =(  You are ${userAge} years old. ${sportMessage}`);
} else if (!userSport) {
    alert(`It is a pity that you didnt want to enter yours favourite sport =(  You are ${userAge} years old. ${userCity}`);
} else {
    alert(`You are ${userAge} years old. ${userCity} ${sportMessage}`);
}

