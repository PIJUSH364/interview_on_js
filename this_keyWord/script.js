console.log("this keyWord");
let a = this
this.name = "sarah";
console.log(window.name);
console.log(this == window);


const greet = () => {
    console.log(this);//refer to global objects
}
greet();

console.log("________________");

//1) The name of a constructor function starts with a capital letter like Person, Employee.

function Person(person) {
    this.name = person,
        console.log(this);


}

// 2) A constructor function should be called only with the new operator.

let person1 = new Person("pijush");
console.log("🚀 ~  person1 ", person1)
console.log("🚀 ", new Person("shubho"));

// one level up

const personInfo = {
    name: "ayan",
    age: 25,

    objItself() {
        console.log("🚀 ~ file: script.js:35 ~ name", this);//this refer to object itself
        console.log("🚀 ~ file: script.js:35 ~ name", this.name);


        function innerFunction() {
            console.log(this);//this refer to global obj
            console.log(name);
        }
        innerFunction();
    }
}


personInfo.objItself()


console.log("________________");

// this keyword in object oriented programming

console.log("________________");

// class name should be capitalize
class Client {
    constructor() {
        this.clientId = "124";
    }
    getClientId() {
        return this.clientId;
    }
    changeClientId(newId) {
        return this.clientId = newId;
    }
    // not working properly
    sayWelcome() {
        console.log(`welcome ${this.getClientId()}`);
    }

}
const newContract = new Client();
console.log("🚀 ~ file: script.js:64 ~ newContract", newContract.sayWelcome())

