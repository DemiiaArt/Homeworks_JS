const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (array, item) {
    const index = array.indexOf(item);

    if (index === -1) {
        console.log('No such element in array');
        return;
    }

    array.splice(index, 1);
}
console.log('Array before:', array);
removeElement(array, 5);
console.log('Array after:', array);

