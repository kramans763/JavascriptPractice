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

// console.log(1+2);           //3
// console.log(1>2);           //false
// console.log(10%2);          //0
// console.log(Math.pow(2,3)); // 8
// console.log(2 ** 3);        //8

// // convert string to int using math
// let val= +"123"+2;
// console.log(val);            // 125

       //--------Comparision----------

   // < , > , <= , >= , == , != , === , !==



   //---------------try and catch-----------------------

   // function sum(a,b){
   //    try{
   //       throw Error("Reference error due to non-alignment");
   //       let c=a+b;
   //       return c;
   //    }
   //    catch(error){
   //       //console.log(error);
   //       console.log("there is error");
   //       alert("something wrong");
   //    }
   // }
   // let res= sum(1,2);
   // console.log(res);


// function operations(a,b,action){
//        try{
//          let c;
//          if(action==='add'){
//             //google server error
//             throw Error("google error add");
//             c=a+b;
//          }
//          else if(action==='sub'){
//             //microsoft error
//             //throw Error("microsoft error");
//             c=a-b;
//          }
//          else if(action=='mul'){
//             // digital ocean srver error
//             c=a*b;
//          }
//          return c;
//        }
//        catch(error)
//        {
//          console.log("hey, there is an error")
//          if(error.message=="google error add"){
//             console.log("google is giving error");
//          }
//          else if(error.message=="microsoft error"){
//             console.log("Microsoft is giving error");
//          }
         
//          // console.log(error.message);
//        }
       
// }
// let res1=operations(1,2,'add');
// let res2=operations(1,2,'sub');
// let res3=operations(1,2,'mul');  

// console.log(res1,res2,res3);

// -----------First-Class Function-----------------

// function logging(callBackFunc){
//    console.log("logging");
//    callBackFunc(1,2);
// }
// function add(a,b){
//    console.log(a+b);
//    return a+b;
// }
// logging(add);


//------------------Array methods---------------

//-----------forEach---------------

// let arr=[10,20,30,40];
// arr.forEach((value,index) =>{
//    console.log(value ,'at index ',index);

// })



//-------------Map-----------------


// let arr=[10,20,15,25,30,40];

// let res=arr.map((value,index,array)=>{
//    console.log(value,'at index ',index);

//    let rank='';
//    if(value<20){
//       rank='underGraduate';
//    }
//    else if(value>=20 && value<30){
//       rank='passed out';
//    }
//    else if(value>=30){
//       rank='Experienced people';
//    }
//    let obj={
//       age: value,
//       rank:rank,
//    }
//    return obj;
// });
// //console.log(res);

// console.log(res===arr);

//----------- reduce---------

//let arr=[1,2,3,4,5,6,7,8,9,10];
//find sum of all odd numbers without using for loop

// let res=arr.reduce((accum,value)=>{
//    if(value %2!==0){
//       return accum+value;
//    }
//    else{
//       return accum;
//    }
// },0);
// console.log(res);

//-------find double of each number in arr

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let res=arr.reduce((accum,value)=>{
//    //return accum.push(value*2); // this give error because push return length of array
//    // at first iterate accum store length that is 1, so at 2nd iterate,
//    // the condn is like '1.push' so it is not a correct...
//    accum.push(value*2);
//    return accum;
// },[]);
// console.log(res);


//------------------DOM ----------

//------------SELECTORS---------------

// let headingEle=document.getElementsByTagName("h1");
// console.log(headingEle);

// let paraEle=document.getElementById("para");
// paraEle.style.color ="red";

// let paraByQuery=document.querySelector(#para); //it take css selector as argument

//--------Updation--------

//--- 1. innerHtml , 2. innerText ... 3.textContent

// 1. -----innerHtml-------

      // const card=document.getElementById("card");
      // card.innerHTML="Hey I am changed";
      // card.innerHTML="<h1> I am engineer</h1>";





// -----Question-------

/* <ul id="names">
<li>Aman</li>
<li>Akash</li>
<li>Utkarsh</li>
<li>Vipul</li>
<li>john</li>
</ul> */
//  write function to search name from unorder list---

// let elements =document.getElementById("names");
//  console.dir(elements);

//  const childrens = elements.children;
 
//  const childArray = Array.from(childrens); //

//  console.log(childrens,"html collection"); //html collection
//  console.log(childArray, "array"); 

//  function searchName(name){
//    childArray.find(liElement =>{
//       return liElement.textContent==='Aman';
//    })
//  }

// //  childArray.forEach(liElement=>{
// //    if(liElement.textContent==='Aman'){
// //       console.log("result is true;");
// //    }
// //  })

// // Q :--- change the last element name

// childArray[childArray.length-1].textContent=='Akshay';


// //---------------------------------Addition in DOM----------------------------------------------------

//   // 1. Create element

//   let newLiElement=document.createElement("li");
//   console.dir(newLiElement);

//   //2. edit elements

//   newLiElement.textContent='Anish';

//   //3. add---
//   //. way 1.  ----append

//    const unOrderList = document.getElementById("names");

//    unOrderList.append(newLiElement); // add at last

//    // way 2----- innerHTML

//    //unOrderList.innerHTML=unOrderList.innerHTML+"<li>Anish</li>\n";

//---------Deletion ----------

// const elementToRemove=document.getElementById("names");
// console.dir(elementToRemove);

//elementToRemove.remove();

// if we want to remove one name then :---



//----------------------------------DOM Events------------------------------

// const divElement=document.getElementById("card");
// divElement.addEventListener('click', (event)=>{
//          console.log("I am Clicked");
//          const target=event.target;
//          target.style.color="red";
// })


//---------------Event Delegation----------------

// color the div with color when clicked

// way 1:------ naive approch------

// const redBox=document.getElementById("red");
// const greenBox=document.getElementById("green");
// const blueBox=document.getElementById("blue");


// redBox.addEventListener('click',(event)=>{
//     event.target.style.backgroundColor="red";
// });
// greenBox.addEventListener('click',(event)=>{
//    event.target.style.backgroundColor="green";
// });
// blueBox.addEventListener('click',(event)=>{
//    event.target.style.backgroundColor="blue";
// });

// way 2------------- with 1 event listner--Evenet Delegation way
 
// const bigBox=document.getElementById("container");
// bigBox.addEventListener("click",(event)=>{
//    if(event.target.id==='red'){
//       event.target.style.backgroundColor="red";
//    }
//    if(event.target.id==='green'){
//       event.target.style.backgroundColor="green";
//    }
//    if(event.target.id==='blue'){
//       event.target.style.backgroundColor="blue";
//    }
// })

// ----Assignment question----------
// function calcTotal() {
//    const priceElements = document.querySelectorAll('[data-ns-test="price"]');
//    //console.dir(priceElements);
//    let totalPrice=0;
//    for(let i=0;i<priceElements.length;i++){
//        totalPrice += parseFloat(priceElements[i].innerText);
//    }
//    const table = document.querySelector('table');
//    const newRow=document.createElement('tr');
//    newRow.innerHTML =`<tr><td>Grand Total</td><td data-ns-test="grandTotal">${totalPrice}</td></tr>`;
//    table.appendChild(newRow);
//   }


//   const nameInputEle =document.getElementById("name");
//   console.dir(nameInputEle);

//   nameInputEle.addEventListener('keypress',(event)=>{
//    console.log("pressed");
//    console.dir(event);
//    //let key=event.key;

//   })
  






