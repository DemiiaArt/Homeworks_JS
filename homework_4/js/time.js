let whatTime = prompt('Hello! Write how much hours you want to convert:');
const hours = parseFloat(whatTime);
// const hours = +whatTime;

console.log(typeof whatTime);
console.log(typeof hours);


if (isNaN(hours)) {
    alert('Please, write a number');
} else {
    const seconds = hours * 60 * 60;
    if (hours <= 1) {
    alert(`${hours} hour = ${seconds} seconds`);
    } else {
    alert(`${hours} hours = ${seconds} seconds`);
    }
}
