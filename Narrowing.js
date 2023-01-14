"use strict";
//Padding function
exports.__esModule = true;
function padLeft(padding, input) {
    if (typeof (padding) === "number") {
        return (" ".repeat(padding) + input);
    }
    return padding + input;
}
//Truthiness narrowing
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return "There are ".concat(numUsersOnline, " online now!");
    }
    return "Nobody's here. :(";
}
//Equality narrowing
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toLocaleLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
//instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toUpperCase());
    }
}
//Assignments
var x = Math.random() < 0.5 ? 10 : "Hello world.";
x = 1;
console.log(x);
x = "goodbye";
console.log(x);
function handleShape(shape) {
    // if(shape.kind==="rect"){
    // }
}
