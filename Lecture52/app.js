// Underscore
// let numArr = [2, 3, 4];
// let arr = _.map(numArr, (item) => item * 2);
// console.log(arr);

// let arr1 = _.filter(numArr, (item) => item % 2 === 0);
// console.log(arr1);

// Object Oriented Jvasctip and Prototypal Inheritance //////////////////////////

// Conceptual Aside: Classical vs Prototypal Inheritance
// Inheritance: "One object gets access to the properties and methods of another object".

// Classical Inheritance - "Verbose, all the c# Java and other languages relys on."
// Prototypal Inheritance - "Simple, flexible, extensible, more easy to understand"

// All objects in js has access to proto{} when you try to access to property of any object if it cant finds it there  it will look 
// for it in proto{} and if it does not finds anything it will keep looking for it through Prototype Chain
// When you have another object it will have an acess to the same proto{} in the memory as obj1

// let person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     getFullName: function() {
//         return this.firstname + ' ' + this.lastname; // this here refers to the obejct its been called
//     }
// }

// let john = {
//     firstname: 'John',
//     lastname: 'Doe'
// }

// /////// Do not do this EVER! /////////////
// john.__proto__ = person;
// console.log(john.getFullName()); // Since john does not have an method getFullName it will go through prototypal chain
// // and looks for its prototype object which is person
// console.log(john.firstname);

// let jane = {
//     firstname: 'Jane'
// }

// jane.__proto__ = person;
// console.log(jane.getFullName());

// Everything is an Object in a Javascript or Primitive

// var a = {}; //its __proto__ has an access to object methods
// var b = function() {}
// var c = [];
// var e = 'string';

// Reflection and Extend
// Reflection: "An object can look at itself, listen and change its properties and methods"

// for (let prop in john) {
//     if(john.hasOwnProperty(prop)){ // if we dont check for its own property it will start to look for through prototype chain.
//         console.log(prop + ': ' + john[prop]);
//     }
// }

// var jane = {
//     address: '111 Main St.',
//     getFormalFullName: function() {
//         return this.lastname + ', ' + this.firstname;
//     }
// }

// var jim = {
//     getFirstName: function() {
//         return firstname;
//     }
// }

// _.extend(john, jane, jim);// This is the way to combine all the objects into one object
// console.log(john);


// Function Constructors 'new', and the history of javascript
// Building Objects 

// function Person(firstname, lastname) {
//     console.log(this); //this keyword pointing to the empty object in the memory
//     this.firstname = firstname;
//     this.lastname = lastname;
//     console.log('This funciton is invoked!');
// }
// var john = new Person('John', 'Doe');
// console.log(john);
// // 'new' keyword calls the function which creates new empty object in the memory and if function does not return anything it will return that object
// var jane = new Person('Jane', 'Doe');
// console.log(jane);


// 'new' keyword is operator;
// Function Constructors: "A normal function that is used to constract objects"
// (The 'this' variable points a new empty object, and that object is returned from the function automatically)
// 'new' keyword are used to create that new object and function constructors are used to add properties and methods




// // Function Constructors and '.prototype';
// // Every function has a prototype
// function Person(firstname, lastname) {
//     console.log(this); //this keyword pointing to the empty object in the memory
//     this.firstname = firstname;
//     this.lastname = lastname;
//     console.log('This funciton is invoked!');
// }
// // Any objects that is crated using this constructor I can add methods through its prototype
// Person.prototype.getFullName = function() {
//     return this.firstname + ' ' + this.lastname;
// }

// var john = new Person('John', 'Doe');
// console.log(john);

// var jane = new Person('Jane', 'Doe');
// console.log(jane);

// Person.prototype.getFormalFullName = function() {
//     return this.lastname + ', ' + this.firstname;
// }// Now any object that is created using Person constructor has an access to these two methods through prototype chain
// console.dir(jane);

// // You saving a lot of memory by this
// // The reason this is important is it makes your code more memory efficient, you could put these methods inside Person constructor
// // but if you have hundreds of person object it will have these much methods and eats up a lot space in your computer, if you put inside 
// // prototype, it only takes one space in memory.

// // Dangerous Aside "'new' and functions"
// // If you forgot to use new keyword it will give undefined and methods that you trying to add to the prototype will give an errors;
// // Any function that intended to be used as a constructor will start with capital letters so that you can quickly identify
// // bugs in the code.

// // Conceptual Aside
// // Built-in function constructors
// String.prototype.isLenghtGreaterThan = function(limit) {
//     return this.length > limit;
// }
// // You added this method to the String prototype so any string can have an access this mehtod;

// console.log("John".isLenghtGreaterThan(3)); // true

// Number.prototype.isPositive = function() {
//     return this > 0;
// }
// console.log(3.isPositive()); // this does not work
// This works with strings because JS engine does convert them to an object, unlike numbers which does not get converted automatically.

// Dangerous Aside: Built-In Function Construtors
// When you using built-in function constructors you are not really creating an primitives you are creating an objectsand strange things can happen during coercion.

// Dangerous Aside: Arrays and for..in
// Array is essentially an object 
// var arr = ['John', 'Micheal', 'Kevin'];
// console.log(arr);
// // essentially 0: 'john' etc.
// // Its indexes is its keys 

// Array.prototype.myCustomFeature = 'Cool!';

// for(var prop in arr){
//     console.log(prop + ": " + arr[prop]);
// }
// // It logged out myCustomFeature too
// // Thats why do not use for..in with arrays 

// When you use for..in on arrays it will loop through its prototype chain too


// Object.create and Pure Pototypal Inheritance
// Object.create another way for creating objects

// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     greet: function() {
//         return 'Hi ' + this.firstname;
//     }
// }

// var john = Object.create(person);// So Object.create creates new object pointing to the prototype of the object that is passed in.
// john.firstname = 'John';
// john.lastname = 'Doe';
// console.log(john);
// // Its creating the object and use that object as an protoype to other objects.

// // Polyfill: "Code that adds a feature which the engine may lack"
// // If JS engine does not support Object.create you can polyfill it with creating the method yourself like this.
// if(!Object.create){
//     Object.create = function(obj){
//         if(arguments.length > 1){
//             throw new Error('Object.create implementation' 
//             + ' only accepts the first parameter.');
//         }
//         function F() {}
//         F.prototype = obj;
//         return new F();
        
//     };
// }

// // ES6 and Classes
// // Classes 
// class Person {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     greet() {
//         return 'Hi ' + firstname;

//     }
// }
// var john = new Person('John', 'Doe');
// console.log(john);

// // The way you set prototypes in this case is use the word extends
// class InformalPerson extends Person {// This class has an access to the functions and methods of an Person class through prototype inheritance

// }
// var jane = new InformalPerson('Jane', 'Doe');
// console.log(jane);

// Syntactic Sugar: "A different way to type something that does not change how it works under the hood"; 

// Odds and Ends

// Initialization 
// var people = [
//     {
//         // the 'john' object
//         firstname: 'John',
//         lastname: 'Doe',
//         addresses: [
//             '111 Main St.',
//             '222 Main St.'
//         ]
//     },
//     {
//         // the 'Jane' object
//         firstname: 'Jane',
//         lastname: 'Doe',
//         addresses: [
//             '333 Main St.',
//             '444 Main St.'
//         ],
//         greet: function() {
//             return 'Hello!';
//         }
//     }
// ]
// console.log(people);

// // 'typeof', 'instanceof', and figuring out what something is!
// var a = 3;
// console.log(typeof a);

// var b = "Hello";
// console.log(typeof b);

// var c = {};
// console.log(typeof c);

// var d = [];
// console.log(typeof d); // weird!
// console.log(Object.prototype.toString.call(d)); // better!

// function Person(name) {
//     this.name = name;
// }

// var e = new Person('Jane');
// console.log(typeof e);
// console.log(e instanceof Person);

// console.log(typeof undefined); // makes sense
// console.log(typeof null); //object whichis a bug since, like, forever...

// var z = function() { };
// console.log(typeof z);

// Strict Mode ////////////////////////////
// (function useStrict() { // This throws an error beacuse you need to declare the variable before assigning value to it
//     "use strict";

//     var person1;
//     person2 = {};
//     console.log(person2);
// })();

// var person1;// This code runs and assigns empty object to the person2 variable because it is not in the stricty mode
//     person2 = {};
//     console.log(person2);


