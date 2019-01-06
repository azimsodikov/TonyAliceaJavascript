//Conceptual Aside
// Syntax Parsers (Compilers) "A Program that reads your code and determines what it deos and if its grammer valid"
// (Your code is not magic someone else wrote a program to translate it for the computer)

// Lexical Environment "Where something sits physically in the coede you write"
// ('Lexical' means 'having to do with words or grammar'. A lexical environment exists in programming languages in 
// which where you write something is important.)

// Execution Context "A wrapper to help manage the code that is running"
// (There are lots of lexical environments. Which one is currently running is managaed via execution contexts. 
// It can contain things beyond what you've written in your code.)

// Conceptual Aside
// Name/Value Pair "A name which maps to a unique value"
// (The name may be defined more than once, but only can have one value in any given context. That value can be more name/value pairs)
// Object "A collection of Name/Value Pairs"



// Global Environment "Base execution context" creates 'Global object' and 'This' when javascript engine runs. In case of browser it will be Window object.
// Global "Not inside a function"

// var a = 'Hello World!';

// function b() {

// }
// Above code is attached to the Global obejct, when you execute js code in the browser it will get attached to the Window object


//Hoisting 
//Variables and functions are still available even thuogh it was created after it is called

//The reason it works is "When first Execution context created it creates Global Object, 'this', Outer Environment and also it will set up memory
//space for variables and functions" this phenomen is called "Hoisting". 
//When it comes to variables it will create memory space but it does not know what the value is gonna be thats why it will be undefined. 
//All variables are initally set up to undefined!
//undefined is a special key word in the javascript which means memory was set up.


// d();
// console.log(c);//undefinded

// var c = 'Hello World!';

// function d() {
//     console.log('called d!');
// }

//There are two execution context in the JS. First phase is Creation Phase when it sets up variables and functions in the memory,
// second phase is a execution phase where it run your code line by line converting it, combining it and executing it into something that computer understands


// Single Threaded "One command at a time"

// Synchronous "One at a time"
// (It will be in order)

// Invocation "Running a function"

// Example

// function b() {

// }
// function a() {
//     b();
// }
// a();

// When you run above code first execution context will run and crates memery for two functions and 
// another when it comdes to a() it will create another execution context. 
// So every function creates new execution context and stack on top of execution stack. When it finishes the function it wil popped from stack.

// Variuable Environment "Where variable lives"
// Every Execution context has ites own variable environment this is called 'scope'
// Every Execution context has a refence to outer envriontment

// Scope chain is refences to outer environment 
// function a() {
//     function b() {
//         console.log(myVar);
//     }
//     b();
// }
// var myVar = 1;
// a();


// Scope "Where a variable is avaiable in your code"
// (And if is is a the same variable, or a new copy)

//let "it will allow ton create its own block scope"


// Asynchronous "More than one at a time" 


//Event Queue
// When the stack is empty it will look for the Event Queue

//long running function 
// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while(new Date() < ms){}
//     console.log('finished function');
// }

// function clickHandler() {
//     console.log('click event!');
// }

// // listen for the click event
// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('finished execution');

// When you click while code is still running it will not respond and it will wait all the execution context to be finished, 
// when all the functions are run then it looks for event queue

//Dynamic Typing "You do not tell the engine what type of data a variable holds, it figures it out while your code is running"
// (Variables can hold different types of values because it is all figred out during execution time 
// whereas in Static Typing languages you tell the engine ahead of time)

//Primitive Types  "A type of data that represents a single value" (Data types)
// undefinde "represents lack of existnse",
// null "represents lack of exists" 
// boolean
// number "Floating point number (there is always some decimals)"
// string "a sequence of characters"
// symbol "It is used in the next version of javascript ES6"

// Operators "A special function that is syntatically (written) differently"
// (Generally, operators take two parameters and return one result)

// var a = 3 + 4;
// The reason this works is javascript allows infix notation

// Operator Presedence "Which operator function gets called first"
// (Functions are called in order of precedense, HIGHER precedense wins)

// Operator Associativity "What order operator functions get called in: Left to right or Right to Left when functions have the same precedence"

// Coercion "Converting a value from one type to another" This happens quite often in Javascript because it is dynamically typed
// var a = 1 + '2'; 12

// console.log(1 < 2 < 3);
// This is true 
// console.log(3 < 2 < 1);
// This is also true, because operator precedense  less than operators runs left to right 
// and runs first part and answer is false and when JS Coerces it will become 0 and 0 is less than one thats true

// var a;

// // goes to internet and looks for a value
// a = 0;

// if(a || a === 0){ //Since === has a higher precendense it will run it first
//     console.log('Something is there.');
// }

// function greet(name) {
//     name = name || ' <Your name here>'; // If name is undefined Your name here will run beacuse || has higher precedense than =;
//     console.log('Hello' + name);
// }
// greet();


// To check if variable exists in the global context we can do 'window.variableName = window.variableName || "new variable value"'
