//empty class

class Point0{}

//Fields

class Point{
    x: number;
    y: number;
    

}

const p = new Point;
p.x = 10;
p.y = 2;

class GoodGreeter{
    name: string;

    constructor(){
        this.name = ""
    }
}

//Constructors with defaults

class Point2{
    x: number;
    y: number;
    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
    }
}

//Overloads

class Point3 {
    constructor(x: number, y:string);
    constructor(s: string);
    constructor(xs: any, y?: any){

    }
}

//Super

class Base {
    x:number;
    constructor(){
        this.x = 120;
    }
}

class Derived extends Base{
    y: number;

    constructor(){
        super();
        this.y = 121;
        this.x = 12;
    }
}

//Methods

class Dog{
    bark():void{
        console.log("bark-bark");
    }
}

//Accessors

class C{
    lenght: number = 3;
    getLenght(){
        return this.lenght;
    }
    setLenght(newLenght:number){
        this.lenght = newLenght;
    }

}

//Class Heritage

interface Animal{
    legs: number;
    makeSound(value:string):void;
}

class Cat implements Animal{
    legs: number = 4;
    makeSound(value: string){
        console.log(value);
    }
}

//Member Visibility

class Greeter{
    public greet():void{
        console.log("hi");
    }
    protected getName():string{
        return "Steven";
    }
}

const g = new Greeter;
g.greet();
g.getName();

//Static Members

class MyClass{
    static x = 0;
}

console.log("You are absolute "+MyClass.x)