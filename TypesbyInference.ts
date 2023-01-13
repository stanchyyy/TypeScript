let helloWorld = "Hello world."

interface User {
    name : string,
    id : number
}

//usage of interface with variable

const user:User = {
    name : "john",
    id: 0,
}

//declaring a class

class UserAccount{
    name : string;
    id : number;

    constructor(name : string, id : number){
        this.name = name;
        this.id = id;
    }

}

//class with interface

const nextUser : User = new  UserAccount("Bob",42);

//Usage of interfaces in function

function getAdminUser():User{
    return new  UserAccount("Bob",42); 
}

function deleteAdminUser(user:User){
    console.log(user.name);
}

//Union Types

type myBoolean = true | false;

type windowState = "open" | "closed" | "minimized";

//Generics

type StringArray = Array<string>;
type numberArray = Array<number>;


//Structural type system

interface Point {
    x : number;
    y: number;
}

function logPoint(p:Point){
    console.log(`${p.x}, ${p.y}`);
}

const point = {x:12,y:13};
logPoint(point);

async function require(){
    return 1;
}

let a = require();
a.then(result=>{
    console.log(result);
})
