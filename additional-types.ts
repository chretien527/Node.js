let randomValue: any = "Hello";
randomValue = 25;
randomValue= true;

function sayHello():void {
    console.log("Hello!");
}

let emptyValue:  null = null;

let notAssigned: undefined = undefined;

let person: [string, number] = ['John',25];

console.log(randomValue);
console.log(emptyValue);
console.log(notAssigned);
console.log(person);
sayHello();