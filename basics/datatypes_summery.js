//premetive datatypes  

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt, 

// JavaScript is a dynamically typed language

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 369552236697n
//non premetive or refrence datatypes

//Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];
//Object
let myinfo ={
    name:"tejas",
    age:22,
}

const myFunction = function(){
    console.log("tejas");
}

console.log(typeof id);


// *********************Memory***************

//Stack (Primitive) , Heap(Non-premitive)

let myname = "tejas"

let anothername = myname

anothername = "dotkar"
console.log(anothername)
console.log(myname)

let userOne = {
    email:"tejas@gmail.com",
    upi:"545454@ybl"
}

console.log(userOne);

let usertwo = userOne


usertwo.email = "santosh@com"
console.log(usertwo)