const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


const generateKey = function (length, characters) {
    const charactersToArray = characters.split('');
    let key = '';

    for (i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersToArray.length);
        const character = charactersToArray[randomIndex];
        key += character;
    }

    return key;
}

const key = generateKey(16, characters);
console.log('Рядок випадкових симвоів:', key);
