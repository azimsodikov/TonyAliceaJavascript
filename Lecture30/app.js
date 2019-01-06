// // Objects and Dot
// //Obejcts has properties and methods and sits on the computer memory has a reference to that slots of memory;

// // One way to create new object is using new keyword
// var person = new Object();

// // One way to create the objects is through computed member access operator [];
// person["firstname"] = "Tony";
// person["lastname"] = "Alicea";

// var firstNameProperty = "firstname";

// console.log(person);
// console.log(person[firstNameProperty]);


// // Another way to create the object is through member access operator dot '.'; (Preferred)
// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "109 Main st. ";
// person.address.city = "New York";
// person.address.state = "NY";

// // Other way and preferred way of creating a new object is using obejct literals '{}', you can create a objects on the fly
// // you can also put properties and methods when you create a new object like {firstname: 'Tony', lastname: 'Alicea'}

// // Framework Aside 
// // Namespaces "Container for variables and functions"

// var greet = 'Hello!';
// var greet = 'Hola!';

// console.log(greet); //In this case those two variables collide

// // One way to solve this problem is using namespaces, you can fake namespaces in the javascript by using obejct literals

// var english = {};
// var spanish = {};

// english.greet = 'Hello!';
// spanish.greet = 'Hola!';

// console.log(english.greet);

// JSON is subset of javascript obejct notation and difference is it is a string and 
// its properties and values always have to be in in quotes unlike JS object notation;
// JS has built in methods to convert JSON to JS object notaion JSON.parse and also has method to 
// convert JS object notation to JSON which is JSON.stringify;

// Functions are a special type objects
// First class functions "Everything you can do with other types you can do with functions"
// (Assign them to variables, pass them around, create them on the fly)

// function greet() {
//     console.log('hi');
// }
// greet.language = 'english';

// console.log(greet.language); //As objects in javascript you can attach properties to the functions beacuse functions are obejcts

//Function Expression "A Unit of code that results in a value" (It doesnt have to save to the variable)
// var expression = function() {
//     console.log('Hi');
// }
// //Function Statements "A Unit of code that does not return a value"
// function statement() {
//     console.log('Hi');
// }

// greet();

// function greet() {
//     conosle.log("HI");// "HI"
// }// You can do this because functions and variables are hoisted and can be called before it is created

// anonymousGreet();

// var anonymousGreet = function() {
//     console.log('HI');
// }// Whereas here you just creating a variable in the execution state and when variables are created undefined is assigned to the variables 

//Conceptual Aside: By value vs By Reference
// by value (All primitives by value)
// var a = 3;
// var b;

// b = a;
// a = 2;

// console.log(a);//2
// console.log(b);//3

// // Both has different location in the memory thats why changing a does not affected b this is called by value;

// // by reference (all objects (including functions))
// var c = {greeting: 'hi'};
// var d;

// d = c;
// // when you assign objects to another variable you just pointing to the same location in the memory
// c.greeting = 'hello'; // mutate
// // Mutate "To change something"(Immutable means can't be changed)
// console.log(c);//'hello';
// console.log(d);//'hello';


// // by reference (even as parameters)
// function changeGreeting(obj) {
//     obj.greeting = 'Hola'; //mutate
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);
// // equals operator sets up new memory spcae (new address)

// c = {greeting: 'howdy'}; //when it cant find value in the memory it will create new space in the memory;
// console.log(c);
// console.log(d);


// Objects, Functions and this keyword
// function a() {
//     console.log(this);// Window
//     this.newvariable = 'hello'; // Since you can refer to the Window obejct you attach a new variable ot it;
// }
// function b() {
//     console.log(this);// Window
// }
// a();
// b();
// console.log(newvariable);

// var c = {
//     name: 'the c object',
//     log: function() {
//         this.name = 'Update c object'; // You can update objects values by using this keyword
//         console.log(this); // This is referring to the object c
//     }
// }
// c.log();

// But in some cases this keyword refers to the unexpected objects;

// var c = {
//     name: 'the c object',
//     log: function() {
//         this.name = 'Update c object'; // You can update objects values by using this keyword
//         console.log(this); // This is referring to the object c

//         var setname = function(newname) {
//             this.name = newname;
//         }
//         setname('Updated again! The c object');
//         console.log(this); // This supposed to refer to the c object but instead it is referring to the global object;
//     }
// }
// c.log();


// One way to overcome this issue is assigning this to another variable 


// var c = {
//     name: 'the c object',
//     log: function() {
//         var self = this; // This is the solution for previous problem
//         self.name = 'Update c object'; // You can update objects values by using this keyword
//         console.log(self); // This is referring to the object c

//         var setname = function(newname) {
//             self.name = newname;
//         }
//         setname('Updated again! The c object');
//         console.log(self); // This supposed to refer to the c object but instead it is referring to the global object;
//     }
// }
// c.log();

// Conceptual Aside - Collection of Anything
// JS array can hold collection of anything
// var arr = [
//     1,
//     false,
//     {
//         name: 'Tony',
//         address: '111 Main St.'
//     },
//     function(name) {
//         var greeting = 'Hello ';
//         console.log(greeting + name);
//     },
//     "hello"
// ];

// console.log(arr);
// arr[3](arr[2].name);

// Arguments and Spread
// Argument: "The parameters you pass to the function"
// (Javascript gives you a keyword of the same name which contains them all.)

// function greet(firstname, lastname, language) {
//     language = language || 'EN'

//     if(arguments.length === 0) { // This is the one way to test for the params if its passed
//         console.log('Missing parameters!');
//         console.log('-------------------');
//         return;
//     }

//     console.log(firstname);
//     console.log(lastname);
//     console.log(arguments);
//     console.log(language);
//     console.log('----------------------');
// }

// greet();
// greet('JOHN');
// greet('JOHN', 'DOE');
// greet('JOHN', 'DOE', 'ES');

// function greet(firstname, lastname, language) {
//     language = language || 'en';
//     if(language === 'en'){
//         console.log('Hello ' + firstname + ' ' + lastname);
//     }
//     if(language === 'es'){
//         console.log('Hola ' + firstname + ' ' + lastname);
//     }
// }
// greet('John', 'Doe', 'en');
// greet('John', 'Doe', 'es');

// Dangerous Aside
// Automatic Semicolun Insertion
// function getPerson() {
//     // In this case firstname is undefined because it will automatically inserts semicolun after carriage returns.
//     return 
//     {
//         firstname: 'Tony'
//     }
// }

// console.log(getPerson());


// Whitespace: "Invisible characters that create literal 'space' in your written code"
// (Carriage returns, tabs, spaces.)

// IIFE Immedietly invoked function expressions

// // Using Function statement
// function greet(name) {
//     console.log('Hello ' + name);
// }
// greet('John');
// //Using a function expression
// var greetFunc = function(name) {
//     console.log('Hello ' + name);
// }
// greetFunc('Micheal');

// // Immedietly Invoked Function Expressions (IIFE)
// var greeting = function(name) {
//     return 'Hello ' + name
// }('Tony');
// // It will allow to use the function after immeditely creating it;

// console.log(greeting);

// // When you  want JS to treat a function as an expression you have to put inside parantasis 
// (function(name) {
//     console.log( 'Hello ' + name );
// }('Azim'));

// Framework Aside
// IIFE gives great chance to encapsulate your code does not intersect with outer global objects


// Closures /////////////////////
// Understanding Closures
// function greet(whattosay){
//     return function(name) {
//         console.log(whattosay + ' ' + name);
//     }
// } 

// var sayHi = greet('Hi');
// sayHi('Toni'); //'Hi Toni'
// The reason for this works and sayHi has still access to the variable whattosay because of closure. 
// When code hits sayHi new execution context is created and 'Hi' passed to it and whattosay is sitting its variable environment. 
// After that anonymous function craeted and thats is and execution context is popped out of stack. But its variables are still in the memory.
// When sayhi() runs it will create its own execution context ans looks for the variable whattosay if it does not finds it within its variable context
// it will start look for it in the outer context through scope chain.

// Closure Part2
// function buildFunctions() {
//     var arr = [];

//     for (var i = 0; i < 3; i++ ){
//         arr.push(function(){
//             console.log(i);
//         });
//     }
     
//     return arr;
// }
// var fs = buildFunctions();

// fs[0](); //3
// fs[1](); //3
// fs[2](); //3
// The reason for this nhumbers all same because it is referring to the same value in the memery;

// One way to overcome this is to create outer execution context and it will not look for the variables outside its variable environment;

// function buildFunctions() {
//     var arr = [];

//     for (var i = 0; i < 3; i++ ){
//         arr.push(
//             (function(j){
//                 return function() {
//                     console.log(j);
//                 }
//             }(i))   
//         );
//     }
     
//     return arr;
// }
// var fs = buildFunctions();

// fs[0](); //3
// fs[1](); //3
// fs[2](); //3

// Another way to overcome this is use let keyword and assign i to that variable

// Framwork Aside
// Function Factories

// function makeGreeting(language) {// Return a function that has an access to what that variable was by the time it was created
//     return function(firstname, lastname){
//         if(language === 'en'){
//             console.log('Hello ' + firstname + ' ' + lastname);
//         }
//         if(language === 'es'){
//             console.log('Hola ' + firstname + ' ' + lastname);
//         }
//     }
// }
// var greetEnglish = makeGreeting('en');
// var greetSpanish = makeGreeting('es');

// greetEnglish('John', 'Doe');
// Every time when you call the function it will create its own execution context will be created and any function created inside that context 
// will point to that execution context. Thats called closure.

// // Closures and Callbacks
// function sayHiLater() {
//     var greeting = 'Hi';
//     setTimeout(function() {
//         console.log(greeting);
//     }, 3000);
// }
 
// sayHiLater();
// // Callback Function ///////////////////////////////////////////////////////////
// // Callback Function: "A function you give to another function, to be run when the other function is finished"
// // (So the function you call(aka invoke), 'calls back' by calling the function you gave it when it finishes)

// function greet(callback) {
//     var a = 1000; // Does some work
//     var b = 2000; // Does some work
//     callback(); // When it finishes it calls the function
// }

// greet(function() {
//     console.log('I am done');
// });
// greet(function() {
//     console.log('I am done.........');
// });

// call(), bind(), apply(); //////////////////////////////////////////////////////////
// All function methods has an access to this methods

// ////////bind()///////////
// var person = {
//     firstname : 'John',
//     lastname : 'Doe',
//     getFullName : function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// }
// var logName = function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName()); // This originally points to the global object and does not have an access to getFullName
//     // but if you use bind() and pass object it will create a new copy of the func that is called then start to refer to that object.
// }.bind(person);
// logName();

////////call()///////////
// var person = {
//     firstname : 'John',
//     lastname : 'Doe',
//     getFullName : function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// }
// var logName = function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName()); // This originally points to the global object and does not have an access to getFullName
//     // but if you use call() and pass object and any params it will call the function just like '()' but you will have a control over what object it 
//     // is gonna refer to; Unlike bind(), it will not create a new copy of the function it refers to; 
//     console.log('Lang: ' + lang1 + ' ' + lang2);
//     console.log('-------------------');
// };
// logName.call(person, 'en', 'es');

////////apply()///////////
// var person = {
//     firstname : 'John',
//     lastname : 'Doe',
//     getFullName : function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// }
// var logName = function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName()); // This originally points to the global object and does not have an access to getFullName
//     // but if you use apply() and pass object and any params it will call the function just like call() but only difference is you have to pass
//     //array of arguments as an argument; Unlike bind(), it will not create a new copy of the function it refers to; 
//     console.log('Lang: ' + lang1 + ' ' + lang2);
//     console.log('-------------------');
// };
// logName.apply(person, ['en', 'es']);

/// Function Borrowing
// Example
// var person2 = {
//     firstname : 'Azim',
//     lastname : 'Sodikov'
// }
// console.log(person.getFullName.apply(person2)); // Person2 does not hava an access to getFullName method but we can borrow other objects methods

// // Function Currying
// Function Currying: "Creating a copy of a function but with some preset parameters"
// (Very useful in mathematical situations)

// function multiply(a, b) {
//     return a * b;
// }

// var multiplyWithTwo = multiply.bind(this, 2) // Since it is creating a new copy of the func, bind is creating permanant param 2,
// // So whenever you call multiplyWithTwo(), it will multiply to two
// console.log(multiplyWithTwo(4));

// Functional Programming
function mapForEach(arr, fn) {

    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;

}
let numArray = [1, 2, 3];

// console.log(mapForEach(numArray, function(item) {
//     return item * 2;
// })
// );

// console.log(mapForEach(numArray, function(item) {
//     return item > 2;
// })
// );

// Another expample where you can pass the limiter dynamically instead of hardcoding it;

var setLimiter = function(item, limiter) {
    return item > limiter;
}

console.log(mapForEach(numArray, setLimiter.bind(this, 2)));
function setLimiter2 (limit) {
    return setLimiter.bind(this, limit);
}
console.log('With one param', mapForEach(numArray, setLimiter2(2)));
