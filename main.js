"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// do tsc <filename> --watch to make changes dynamically to main.js
// The error comes because scripts share global scope
// To get rid of it, export the file as a module so that
// The scope is within module and not global
var message = "Hi World";
console.log(message);
// Variable Declarations
var x = 10;
// const declarations can only be declared with a value
// hence you cant do const y; you need to specify a value
var y = 10;
// Variable Types
var isBeginner = true;
var total = 10;
var name = "Prhyme";
var sentence = "My name is " + name + ", I am a pro in TS";
// TS has static type checking
// Intellisense is particular to the type of variable
// Classified as subtypes of all other types
// We can assign a value of null or undefined to any other type variables
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Arrays of mixed values, i.e. tuples
// The number of elements is fixed according to declaration
// That is [string, number] means only 2 values,
// [string, number, number] means a string and 2 numbers
// Order has to match the order of types
var person1 = ['Chris', 22];
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// Red is 0, Green is 1, Blue is 2
// We can also define default values
// as in enum Color {Red = 5, Green, Blue}
// Red is 5, Green is 6 and Blue is 7
var c = Color.Green;
console.log(c); // prints out 1
// Any type, for making a variable whose type is unkown to you
var randomValue = 10;
randomValue = true;
randomValue = 'Prhyme';
console.log(randomValue.name);
// TS 3.0 introduced another type unkown
// We cant do anything with unkown type, but we can do
// modification as follows
var myVariable = 10;
function hasname(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj;
}
if (hasname(myVariable)) {
    console.log(myVariable.name);
}
// Type casting
// (myVariable as string).toUpperCase()
// Type inference
var a;
a = 10;
a = true;
var b = 20; // ts inferred type of b at declaration
// b = true gives error
// Union of types for the same variable
var multiType;
multiType = 20;
multiType = true;
// Union type only restrict to specified types
// unlike any type, also intellisense support
// There is no intellisense support in any type
// FUNCTIONS
// add ? to the end of parameter name to make the parameter optional
// optional parameters have to come after required parameters
// Default parameters are also available
function add(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(9, 9);
add(5); //works
add(); // works
var obj = {
    x: 5.32,
    y: 7
};
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
// function fullName(person: { firstName: string, lastName: string }) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
// OOPS
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Nishant');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this; // calling baseclass constructor
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating Tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
// Access Modifiers
// These are same like C++
