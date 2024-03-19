const array = [1, 2, 3, 4, 7, 5, 6, 5, 8, 5, 7, 6];

function deleteFromАrray(arr, ...items) {
    console.log(`Числа які будуть видалені з наступного масиву ${items}`);
    return arr.filter(el => !items.includes(el));
}

const newArray = deleteFromАrray(array, 5, 4);

console.log(newArray);
console.log(deleteFromАrray(array, 7, 6));
console.log(deleteFromАrray(array, 1, 2, 3, 4))