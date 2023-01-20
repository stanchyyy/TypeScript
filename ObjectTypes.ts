//anonymous

function greet (person : {name: string, age: number}){
    return "Hello " + person.name;
}

//named by using an interface

interface Person {
    name: string;
    age: number;
}

function greet2(person: Person){
    return "Hello "+ person.name;
}

//type alias

type PersonType = {
    name: string;
    age: number;
  };
   
  function greet3(person: PersonType) {
    return "Hello " + person.name;
  }

//Optional Properties

interface PaintOptions{
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PaintOptions){
    
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

//readonly Properties

interface SomeType{
    readonly prop: string;
}

function doSomething(obj: SomeType){
    // We can read from 'obj.prop'.
    console.log(`prop has the value of ${obj.prop}.`)
    // But we can't re-assign it.
    obj.prop="Hello";


}

//extend

interface BasicAddress{
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;

}

interface AddressWithUnit extends BasicAddress{
    unit: string;
}

