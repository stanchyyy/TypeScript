//Generic Functions

function firstElement(arr: any[]){
    return arr[0];
}

function genericFirstElement<Type>(arr : Type[]): Type | undefined{
    return arr[0]
}

const s = genericFirstElement([1,2,3,4]);
const i = genericFirstElement(["a","b","c"]);

//Inference

function map<Input,Output>(arr : Input[],func : (arg : Input)=> Output) : Output[] {
    return arr.map(func);
}

const parsed = map(["1","2","3","4","5"],(n)=>parseInt(n));

//Specifying Type Arguments

function combine<T>( arr1 : T[],arr2 : T[]) : T[]{
    return arr1.concat(arr2);
}

const arr = combine<string | number>([1,2,3],["hello"] );


//Function Overloads
function makeDate(timestamp : number):Date;
function makeDate(m:number, d:number, y:number):Date;
function makeDate(mOrTimestamp: number, d?: number, y?:number):Date{
    if(d !== undefined && y!== undefined){
        return new Date(y,mOrTimestamp,d);
    }else {
        return new Date(mOrTimestamp);
    }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
//const d3 = makeDate(1, 3);



