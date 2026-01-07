// console.log("External JS");
/*
Token : smallest unit of every programming lang
- token are of 4 types:
! 1) keywords: 
- reserved words which has specific meaning. ex: if, for, var, let, const
- all keywords must be in lowercase

! 2) identifiers:
- names given to class, methods , variables, functions etc are identifiers
- rules:
- keywords cannot be identifiers
- cannot start with no. but can contain a no.
- cannot accept special character expect $ and _
- cannot appect empty space

! 3) literals:
- literals means values stored in a variable

! 4) operators
- symbols used to perform some operation between two or more operands

! Example
var a = 10;

here,
keyword is var
identifier is a
operator is =
literal is 10
*/

/*
! DATA TYPES
There are 2 types of datatype
1) Primitive
- In primitive there are 7 types
1) number
2) string
3) boolean
4) undefined
5) null
6) bigInt
7) symbol

2) Non-Primitive
- In Non-primitive there are 3 types
1) array
2) object
3) function
*/

// var a1 = 10.907654323456;
// console.log(a1);
// console.log(typeof a1);

// var a2 = "Hello World";
// console.log(a2);
// console.log(typeof a2);

// var a3 = true;
// console.log(a3);
// console.log(typeof a3);

// var a4 ;
// console.log(a4);
// console.log(typeof a4);

// var a5 = null;
// console.log(a5);
// console.log(typeof a5);

// var a6 = 1n;
// console.log(a6);
// console.log(typeof a6);

// var a7 = Symbol("Hello");
// var a8 = Symbol("Hello");

// console.log(a7);
// console.log(a8);

// console.log(a7 === a8);
// console.log(typeof a7);

// var x = 10
// var y = "10"
// console.log(x === y);

// //! loose comparision : it will check data, not datatype
// console.log(10 == "10"); // true

// //! strict comparision : it will check data and datatype
// console.log(10 === "10"); // false

//! HOISTING : moving declaration part at the top of the original code internally
// // var a1 = UD <-- Due to hoisting
// console.log(a1);
// var a1 = 10;
// console.log(a1); // 10

// //! 3 WAYS OF DECLARING A VARIABLE
// // 1) var

// var a; // declare
// console.log(a); // ud

// a = 10; // initialize
// console.log(a); // 10

// var a; //re-declare
// console.log(a); // 10

// a = 20; // re-initialize
// console.log(a); // 20

// var b = 30; // declare and initialize
// console.log(b); // 30

// var b = 40; // re-declare and re-initialize
// console.log(b); // 40

// // 2) let
// let c;
// console.log(c); // ud

// c = 100;
// console.log(c); // 100

// // let c ;//! cannot re-declare

// c = 200;
// console.log(c); //200

// let d = 300;
// console.log(d); // 300

// // let d = 400 //! cannot re-declare and re-initialize

// // 3) const
// const e = 1000
// console.log(e); // 1000
//! TEMPORAL DEAD ZONE : Time period between accessing a let/const variable before declaration

// let x //! HOISTED BUT VARIABLE IS EMPTY
// console.log(x);// ! NOT POSSIBLE DUE TO TDZ

// let x = 100;
// console.log(x);

//! GEC - GLOBAL EXECUTION CONTEXT
// debugger;
// console.log("start");
// console.log(a);
// var x;
// console.log(x);
// x = 100;
// var a;
// console.log(b);
// a = x;
// var b = 800
// console.log(b);
// console.log("End");
// // console.log(c);

// debugger;
// console.log("Start");
// console.log(x);
// var z = 100;
// console.log(x, z);
// z = 500;
// console.log(b, x);
// var x;
// console.log(x);
// var z;
// console.log(z);
// z = 700;
// console.log(b, x, z);
// var b = 800;
// console.log("End");

//! THERE ARE 2 TYPES OF VARIABLES
//! 1) GLOBAL VARIABLE : a variable that can be accessed globally throughout the code

// var a1 = 10; // GLOBAL SCOPE <---- due to hoisting
// let b1 = 20; // SCRIPT SCOPE <---- due to TDZ
// const c1 = 30; // SCRIPT SCOPE <---- due to TDZ

// if (10 > 2) {
//   console.log(a1, b1, c1);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(a1, b1, c1);
// }

// function demo1() {
//   console.log(a1, b1, c1);
// }
// demo1();

//! 2) LOCAL VARIABLE

// if (100 > 2) {
//   var x1 = 100; // GLOBAL VARIABLE - GLOBAL SCOPE
//   let x2 = 200; // LOCAL VARIABLE - BLOCK SCOPE
//   const x3 = 300; // LOCAL VARIABLE - BLOCK SCOPE
//   console.log(x1, x2, x3);
// }
// console.log(x1); // 100
// // console.log(x2);//! x2 is not defined

// function demo2() {
//   var a1 = 1000; // LOCAL VARIABLE - LOCAL SCOPE
//   let a2 = 2000; // LOCAL VARIABLE - LOCAL SCOPE
//   const a3 = 3000; // LOCAL VARIABLE - LOCAL SCOPE
//   console.log(a1, a2, a3);
// }
// demo2();

// console.log("Start");
// console.log(a);
// let b = 100;
// var a = 200;
// console.log(a, b);
// const c = b + a;
// console.log(c, b, a);
// let d;
// console.log(d);
// d = c;
// console.log(c, d);
// console.log("End");

//! FUNCTIONS

//! 1) NAMED FUNCTION : function which has name
// NOTE: Function hoisting is possible only in named function

//! internally hoisted
// function greet() {
//   console.log("Welcome");
// }
// greet(); // due to hoisting
// function greet() {
//   console.log("Welcome");
// }
// greet(); // function call

//! 2) ANONYMOUS FUNCTION : function without name
// function(){}

//! 3) FUNCTION EXPRESSION : used to call anonymous function
// console.log(a1);
// a1();

// var a1 = function () {
//   console.log("Function Expression");
// };

// console.log(a1);
// a1();

//! GEC
// console.log("Start");
// var a = 10;
// console.log(a, b);
// let c;
// console.log(c, b);
// demo1();
// var b = function () {
//   console.log("Welcome");
// };
// console.log(b);
// b();
// function demo1() {
//   console.log("Demo 1");
// }
// console.log(demo1);
// console.log("End");

//! 4) PARAMETRIZED FUNCTION
// function sum(n1 = 0, n2 = 0, n3 = 0) {
//   let res = n1 + n2 + n3;
//   console.log(res);
// }
// sum(10, 20, 30);
// sum(100, 200);
// sum();

//! 5) REST-PARAMETRIZED FUNCTION
// function demo3(n1, n2, ...rest) {
//   console.log(n1, n2); // 10 20
//   console.log(rest); // [30,40,50] <--- pure array
//   console.log(arguments); // [10,20,30,40,50,....] <--- array-like object (impure)
// }
// demo3(10, 20, 30, 40, 50);

//! 6) RETURN-TYPE FUNCTION
// function getFullName(fname = "", lname = "") {
//   let fullName = `${fname} ${lname}`;
//   return fullName;
// }

// function displayName() {
//   let value = getFullName("John", "Doe");
//   document.writeln(`<h2><em>${value}</em></h2>`);
// }
// displayName();

//! 7) NESTED FUNCTION

//? EXAMPLE 1
// function parent() {
//   console.log("I Am Parent");

//   function child() {
//     console.log("I Am Child");
//   }

//   child();
// }
// parent();

//? EXAMPLE 2
// function parent() {
//   let money = 80000;
//   console.log(money);

//   function child() {
//     let savings = 1000;
//     console.log(savings);
//   }

//   child();
// }
// parent();

//! CLOSURE : its a memory which is created whenever we try to access parent functions property inside child function

//! LEXICAL SCOPING : the ability of js engine to search a variable outside its current scope

//? EXAMPLE 3
// function parent() {
//   let money = 80000;
//   console.log(money);

//   function child() {
//     let savings = 1000;
//     console.log(savings + money); // money can be accessed due to closure
//   }

//   child();
// }
// parent();

//? EXAMPLE 4
// function parent() {
//   let money = 80000;
//   console.log(money);

//   function child() {
//     let savings = 1000;
//     console.log(savings + money); // money can be accessed due to closure
//   }

//   return child;

// }
// let val = parent();
// console.log(val);
// val()

//! 8) HIGHER ORDER FUNCTION : A function which can perform atleast one of these task
//! 1) it can accepts another function as arguement
//! 2) returns a function

// calculate is HOF
// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// function add(n1, n2) {
//   return n1 + n2;
// }

// function substract(n1, n2) {
//   return n1 - n2;
// }

// let val1 = calculate(10, 20, add);
// console.log(val1);

// let val2 = calculate(100, 50, substract);
// console.log(val2);

// //! HOF : returning a function
// function greet(message) {
//   return function (name) {
//     return `${message} ${name}`;
//   };
// }

// let val3 = greet("Welcome");
// console.log(val3("John"));

//! 9) CALLBACK FUNCTION : function passes as an arguements to another function

// function callback() {
//   console.log("Welcome");
// }

// function greet(cb) {
//   cb();
// }
// greet(callback);

// //! EXAMPLE
// let arr1 = [10, 20, 30];
// arr1.forEach(function (ele, idx, arr) {
//   console.log(ele, idx, arr);
// });

//! 10) ARROW FUNCTION : Intoduced in ES6, to declare function in shorter syntax

// // WAY 1
// let a1 = () => {
//   console.log("Arrow func 1");
// };
// a1();

// // WAY 2 : can replace () with _
// let a2 = _ => {
//   console.log("Arrow func 2");
// };
// a2();

// // WAY 3 : if one parameter, () not required
// let a3 = x => {
//   console.log("Arrow Func 3", x);
// };
// a3(10);

// // WAY 4 : if multiple parameter, () required
// let a4 = (x,y) => {
//   console.log("Arrow Func 4", x,y);
// };
// a4(10,20);

// // WAY 5 : if having single line of code, {} not required
// let a5 = () => console.log("Arrow Func 5");
// a5();

// // WAY 6 : Explicit return, "return" keyword and {} is mandatory
// let a6 = () => {
//     return "Arrow Func 6"
// }
// console.log(a6());

// // WAY 7 : Implicit return , "return" keyword and {} not required
// let a7 = (n1,n2) =>  n1+n2;
// console.log(a7(5,2));

//! ARRAYS

// //! 1) array litrals
// let arr1 = [10];
// console.log(arr1);

// //! 2) array constructor
// let arr2 = new Array(10);
// arr2[15] = "Hello"
// console.log(arr2);

// //! ARRAY METHODS
// let arr1 = [10, 20, 30, 40, 50];
// console.log(arr1);
// console.log("length is ", arr1.length);

// //! array.push() : Appends new elements to the end of an array, and returns the new length of the array
// let newLength = arr1.push(60, 70, 80);
// console.log(arr1); // [10,20,30,40,50,60,70,80]
// console.log("new length is ", newLength);

// //! array.pop() : Removes last element from array and returns it
// let lastEl = arr1.pop();
// console.log(arr1); // [10,20,30,40,50,60,70]
// console.log("Last element was", lastEl);

// //! array.unshift() : Appends new elements to the first of an array, and returns the new length of the array
// let newLength1 = arr1.unshift(100, 200, 300);
// console.log(arr1); // [100,200,300,10,20,30,40,50,60,70]
// console.log("new length is", newLength1);

// // //! NON-PRIMITIVE (MUTABLE) VS PRIMITIVE (IMMUTABLE)
// // let str1 = "Hello";
// // console.log(str1); // Hello
// // str1[0] = "X";
// // console.log(str1); // Hello -> immutable

// // let arr = [1, 2, 3, 4, 5];
// // console.log(arr); // [1,2,3,4,5]
// // arr[0] = "Hiii";
// // console.log(arr); // ["Hiii",2,3,4,5] -> mutable

// //! array.shift() :  Removes first element from array and returns it
// let firstEl = arr1.shift();
// console.log(arr1); //  [200,300,10,20,30,40,50,60,70]
// console.log("First Element was", firstEl);

// //! array.splice( startIndex , deleteCount , newElements )

// let arr2 = [100, 200, 300, 400, 500];

// // only remove
// let deletedEle1 = arr2.splice(2, 1);
// console.log(arr2); // [100, 200, 400, 500]
// console.log(deletedEle1); // [300]

// // only add
// let deletedEle2 = arr2.splice(3, 0, "Hii");
// console.log(arr2); //  [100, 200, 400, 'Hii', 500]
// console.log(deletedEle2); // []

// // add and remove
// let deletedEle3 = arr2.splice(1, 2, true);
// console.log(arr2); //  [100, true, 'Hii', 500]
// console.log(deletedEle3); // [200,400]

// //! array.slice( startIndex , endIndex )
// // NOTE : endIndex always gets ignored

// let arr3 = [100, 200, 300, 400, 500];

// let slicedArr1 = arr3.slice(1, 4);
// console.log("Sliced Array 1 is", slicedArr1); // [200, 300, 400]

// let slicedArr2 = arr3.slice(3);
// console.log("Sliced Array 2 is", slicedArr2); // [400, 500]

// console.log("Original Array is", arr3);

// //! array.sort()
// let arr4 = [10, 2, 60, 3, 78, 9];

// // lexographical sorting : number get converted into string
// let sortedArr1 = arr4.sort();
// console.log(sortedArr1); // [10, 2, 3, 60, 78, 9]

// let sortedArr2 = arr4.sort((a, b) => a - b);
// /*
// if number > 0 ===> swap
// if number < 0 ===> no swap
// if number = 0 ===> no swap
// */
// console.log(sortedArr2); // [2, 3, 9, 10, 60, 78]

// let sortedArr3 = arr4.sort((a, b) => b - a);
// console.log(sortedArr3); // [78, 60, 10, 9, 3, 2]

// //! array.reverse()
// let arr5 = [1, 2, 3, 4, 5];
// console.log(arr5); // [1,2,3,4,5]

// let revArr = arr5.reverse();
// console.log("Revesed Arr", revArr); // [5, 4, 3, 2, 1]
// console.log(arr5); // [5, 4, 3, 2, 1]

//! ADVANCE ARRAY METHODS

// //! array.forEach() : do not return anything , Undefined
// let arr1 = [10, 20, 30, 40, 50];

// let val1 = arr1.forEach((ele, idx, array) => {
//   console.log(ele, idx, array);
//   return ele + 5;
// });
// console.log(val1);

// console.log("------------------------------");

// //! array.map() :it returns a new array
// let val2 = arr1.map((ele, idx, array) => {
//   console.log(ele, idx, array);
//   return ele + 5;
// });
// console.log(val2);

// //! array.filter() : returns new array of filtered elements
// let val3 = arr1.filter((ele) => ele >= 30);
// console.log(val3);

// //! array.find() : Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// let val4 = arr1.find((ele) => {
//   return ele === 30;
// });
// console.log(val4); // 30

// //! array.findIndex() : Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// let val5 = arr1.findIndex((ele) => {
//   return ele === 30;
// });
// console.log(val5); // 2

// //! array.reduce()
// let arr2 = [10, 20, 30, 40];

// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   sum = sum + arr2[i];
// }
// console.log("sum is", sum);

// let val6 = arr2.reduce((acc, ele, idx, array) => {
//   console.log(acc, ele);
//   return acc + ele;
// }, 25);
// console.log("Sum is ---->", val6);

//! REST AND SPREAD OPERATOR : used to pack and unpack array elements
// let arr1 = [10, 20, 30, 40, 50];
// console.log(...arr1); // spread

// let arr2 = ["Hello", true, 100, null, ...arr1];
// console.log(arr2); // rest

//! ARRAY DESTRUCTRING
let arr1 = [10, 20, 30, 40, 50, 60, 70];

let [a, b, c, d, ...e] = arr1;

console.log(a); // 10
console.log(d); // 40
console.log(e); // [50,60,70] <--- rest