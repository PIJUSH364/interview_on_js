// Promises in JavaScript
// Synchronous and Asynchronous code

// =============================
// ========sync code============
// =============================

// ex:1
console.log("ex:2");
console.log("start syn code");
console.log("Syn--Promises in JavaScript");
console.log("end syn code");

// =============================
// ========Async code============
// =============================

// // ex:1
// console.log("ex:1");
// console.log("start Asyn code");
// // setTime out take callback function when all those code execute after then Async code running
// // even after zero--mSec delay
// setTimeout(() => {
//     console.log("Async--Promises in JavaScript--delay 0msec");
// }, 0)
// console.log("end Asyn code");

// **javaScript first run Synchronous code the execute Asynchronous code

// ex:2
// console.log("ex:2");
// console.log("start Asyn code");

// function importantAction(string) {
//     setTimeout(() => {
//         console.log(string);
//         console.log("function importantAction execute--delay 1sec");
//     }, 1000)
// }
// // **tricky qn here__
// const message = importantAction("hi aSync with promise");
// console.log(message);
// console.log("end Asyn code");


// ex:3
// console.log("ex:3");

// function importantAction(string) {
//     setTimeout(() => {
//         console.log(string);
//         console.log("function importantAction execute--delay 1sec ex:3");
//     }, 1000)
// }

// const message = importantAction("from imp action", function (message) {
//  })


// =============================
// ========Promises============
// =============================

// ex:1
console.log("ex:2");
console.log("start Promises code");

// resolve :: when Promise get successfull
// reject :: when promise are getting some error ,means promise get rejected
const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = 0;
        if (result) resolve("promise met succesfully");
        else reject(new Error("why't promise succesfull!"))
    }, 3000)
});

// then block run when promise succesfully
// catch block run when promises get some error or, rejected

sub.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
    // error log morder way
    console.error(err);
})





console.log("end Promises code");