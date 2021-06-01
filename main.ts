export { }

// do tsc <filename> --watch to make changes dynamically to main.js

// The error comes because scripts share global scope
// To get rid of it, export the file as a module so that
// The scope is within module and not global
let message = "Hi World"
console.log(message);

// Variable Declarations

let x = 10
// const declarations can only be declared with a value
// hence you cant do const y; you need to specify a value
const y = 10

// Variable Types

let isBeginner: boolean = true
let total: number = 10
let name: string = "Prhyme"


let sentence: string = `My name is ${name}, I am a pro in TS`

// TS has static type checking
// Intellisense is particular to the type of variable

// Classified as subtypes of all other types
// We can assign a value of null or undefined to any other type variables
let n: null = null
let u: undefined = undefined

let isNew: boolean = null
let myName: string = undefined

let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// Arrays of mixed values, i.e. tuples
// The number of elements is fixed according to declaration
// That is [string, number] means only 2 values,
// [string, number, number] means a string and 2 numbers
// Order has to match the order of types
let person1: [string, number] = ['Chris', 22]

// Enum type

enum Color { Red, Green, Blue }

// Red is 0, Green is 1, Blue is 2
// We can also define default values
// as in enum Color {Red = 5, Green, Blue}
// Red is 5, Green is 6 and Blue is 7
let c: Color = Color.Green
console.log(c); // prints out 1

// Any type, for making a variable whose type is unkown to you

let randomValue: any = 10
randomValue = true
randomValue = 'Prhyme'

console.log(randomValue.name);

// TS 3.0 introduced another type unkown
// We cant do anything with unkown type, but we can do
// modification as follows

let myVariable: unknown = 10

function hasname(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj
}

if (hasname(myVariable)) {
    console.log(myVariable.name);
}

// Type casting
// (myVariable as string).toUpperCase()


// Type inference
let a;
a = 10
a = true

let b = 20 // ts inferred type of b at declaration
// b = true gives error

// Union of types for the same variable
let multiType: number | boolean
multiType = 20
multiType = true

// Union type only restrict to specified types
// unlike any type, also intellisense support
// There is no intellisense support in any type


// FUNCTIONS
// add ? to the end of parameter name to make the parameter optional
// optional parameters have to come after required parameters
// Default parameters are also available
function add(num1: number = 10, num2?: number): number {
    if (num2)
        return num1 + num2
    else
        return num1
}

add(9, 9)
add(5) //works
add() // works


// Interfaces

// interfaces for objects
interface myObj {
    x: number,
    y: number
}

const obj: myObj = {
    x: 5.32,
    y: 7
}

interface Person {
    firstName: string,
    lastName?: string // can make optional
}


function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}


// function fullName(person: { firstName: string, lastName: string }) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p)



// OOPS

class Employee {
    employeeName: string
    constructor(name: string) {
        this.employeeName = name
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Nishant')
console.log(emp1.employeeName);
emp1.greet()

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName) // calling baseclass constructor
    }

    delegateWork() {
        console.log(`Manager delegating Tasks`);
    }
}

let m1 = new Manager('Bruce')
m1.delegateWork()
m1.greet()

// Access Modifiers
// These are same like C++