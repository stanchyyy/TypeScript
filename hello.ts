// This is an industrial-grade general-purpose greeter function:
function greet(person:string, date:Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}

greet("Vasileva",new Date());

let obj: any = { x: 0 };

obj.foo();

const names = ["Alice", "Bob", "Eve"];

names.forEach( (s)=>{
    console.log(s.toUpperCase)
})


//Type Assertions
const mystring = "dasdasdasd" as string;
