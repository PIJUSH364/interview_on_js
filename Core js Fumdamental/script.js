console.log("Core js fundamental");
// Lac-01.Polyfill for find method
// polyfill is a browser fall back,means suppose,when browser does't support bind method then polyfill comes into picture
// then,our won bind function written

let name1 = {
    firstName: "Pijush",
    lastName: "Ray mondal"
}

let printName = function () {
    console.log(this.firstName + " " + this.lastName);
}

let printMyName = printName.bind(name1)
printMyName();

// won bind function

Function.prototype.mybind = function (...args) {
    let obj = this;
    params = args.slice(1);

    console.log(params); console.log(typeof (params));
    return function () {
        console.log(args[0]);
        obj.call(args[0])
    }
}

let printMyName2 = printName.mybind(name1, "joynager");
printMyName2();