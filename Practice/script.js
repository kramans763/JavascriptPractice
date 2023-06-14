// console.log("Hellow world");
// console.log(1+3);

//------Variable-------
// old js
//-------Before ES6-------
// var name="Aman";
// var age=24;
// var canVote=true;

//console.log(name , age, canVote);
// console.log(age);
// console.log(canVote);

//---------------------------------------

// in 2022 .. var won't be used  .. two new keyword --> let and const

//variable (it can be reassign)
// let name="aman";
// let age=24;
// let canVote=true;
// let gender="M";

// age=26;

// console.log(name, age,canVote,gender);

//const (it cannot reassign)

//const name="aman";
//name="amasd";  can't do
//console.log(name);

// let car= {
//     wheels:"yes",
//     seats : 4,
//     powerbreak : true,

// }
// console.log(car.seats , car.wheels);

//-----------------------------------------------------------------------

// -------------------------Array:----------------------------------------

//Array can take any type of value in javascript
// let arr =[1,2,3,5,"aman" , true, 4];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length , "is length of array");

// //weired thing

// arr.length=0; //this is not good
// console.log(arr ,"this is updated array");

// ----Array Properties-----------
 
   // 1. push

//    let arr=[1,2,3,4];
//    arr.push(5);
//    console.log(arr);
   
//    // 2.pop
//        arr.pop(); // remove last element from array
//        console.log(arr); 

//   // shift
//      arr.shift(); //Removes the first element from an array 
//      console.log(arr);


 //-------------Hoisting-------------
 
 // variable and function DECLARATION are hoisted in Javascript
 
// let a=23;
// console.log(a);

//when variables

// console.log(a);
// console.log(b);
// var a=12;  // print undefined   but in java it gives error
// let b=23;  // it gives error bcs hoisting will not work with let 

// // but when function
// sum()
// function sum(){
//     console.log("inside function");
// }

//-----------Basis Math (assignement , operators)--------------

console.log(1+2);           //3
console.log(1>2);           //false
console.log(10%2);          //0
console.log(Math.pow(2,3)); // 8
console.log(2 ** 3);        //8

// convert string to int using math
let val= +"123"+2;
console.log(val);            // 125

       //--------Comparision----------

   // < , > , <= , >= , == , != , === , !==
   
   

