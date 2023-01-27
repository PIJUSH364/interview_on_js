console.log("array");
let arrayNew = new Array(5, 8, 9);
console.log(arrayNew);

let arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10]]]]];
console.log(arr);
let lZero = arr.flat();
console.log(lZero);
let lZero1 = arr.flat(999);
console.log(lZero1);

// Array.every(cb)
const checkEvery = (el) => {
    return 0 < el;
}
// ____
console.log([1, 7, 8].every(checkEvery));

// Array.fill(value)
// arr.fill(3);
// console.log(arr);

// Array.toStrings()
console.log(arr.toString());

// Array.splice()
const cars = ['Mazda', 'BMW', 'Ford'];
console.log(cars.splice(1, 1, "nano", "thar"));
console.log(cars);

// Array.find()

const list = [1, "13", 13, 22, 32, 22]
console.log(list.find(ele => ele > 10));
console.log(list.findIndex(ele => ele > 10));//first element index
console.log(list.findIndex(ele => ele > 100));//if not find any element then return -1

console.log("index of 22", list.indexOf(22));
console.log("lastindex of 22", list.lastIndexOf(22));


const concatElement1 = ["p", "j", "i"];
const concatElement2 = ["u", "s", "h"];
const concatElement3 = ["r", "a", "y"];

const allElement = concatElement1.concat(concatElement2, concatElement3).join("").toUpperCase().replace("R", " R");
console.log(allElement);

// source code -> parser-> abstract syntax tree -> interpreter -> byte code