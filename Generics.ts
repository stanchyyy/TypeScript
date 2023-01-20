function identity1(arg: any): any{
    return arg;
}

function identity2(arg:number) : any{
    return arg;
}

function identity3<Type>(arg: Type): Type{
    return arg;
}

let output = identity3<string>("mystring");
output = identity3("mystring");