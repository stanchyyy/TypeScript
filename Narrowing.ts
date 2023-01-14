//Padding function

import { Interface } from "readline";

function padLeft(padding : number | string, input : string){
    if(typeof(padding)==="number"){
    return (
        " ".repeat(padding) + input
    )
}
return padding + input;
}


//Truthiness narrowing

function getUsersOnlineMessage(numUsersOnline:number){
    if(numUsersOnline){
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :("; 
}


//Equality narrowing

function example(x:string | number, y: string | boolean){
    if(x===y){
        x.toUpperCase();
        y.toLocaleLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }

}


//The in operator narrowing

type Fish = {swim : ()=>void};
type Bird = {fly : ()=>void};

function move(animal:Fish|Bird){
    if("swim" in animal){
        return animal.swim();
    }
    return animal.fly();
}

//instanceof narrowing

function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString);
    } else {
        console.log(x.toUpperCase());
    }

}

//Assignments


let x = Math.random()<0.5?10:"Hello world.";
x = 1;
console.log(x);
x = "goodbye";
console.log(x);

//Using type predicates

// function isFish(pet : Fish|Bird):pet is Fish{

// }

//Discriminated unions
interface Shape {
    kind : "circle" | "square";
    radius?: number;
    sideLenght?: number;
}

function handleShape(shape : Shape){
    // if(shape.kind==="rect"){

    // }
}


