console.log("Event--loop");

console.log(this);
console.log(window);

window.setTimeout(() => {
    console.log("hi pijush window object");
}, 5000)
this.setTimeout(() => {
    console.log("hi pijush  this");
}, 4000)