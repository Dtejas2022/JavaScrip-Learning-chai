//singleton

//objects litrals

// Object.create

//key:values

const mySym = Symbol("key1")  //decleration of symbol

const JsUser = {
    name : 'tejas',
    "full name" : 'tejas Dotkar',
    [mySym] : 'mykey1',  //using symbol as a key
    age : 22,
    location : 'namded',
    email : 'tejas@com',
    isLoggedIn : false,
    lastLoginDays : ['monday','saturday']
}

//how to access values of object
// console.log(JsUser.email)
// console.log(JsUser["full name"]) //prefer to use this 
// console.log(JsUser["email"])
// console.log(typeof JsUser["mySym"])
// console.log(JsUser["mySym"])

//updating values
JsUser.email = 'santosh@com'
// console.log(JsUser)

// Object.freeze(JsUser)  //after doing this changes in object will not accept

JsUser.email = 'siddu@com'
// console.log(JsUser) //not updated after freeze


JsUser.greeting = function(){
    console.log('hello Js users');
}

JsUser.greeting2 = function(){
    console.log(`hello Js users ${this.name}`);
}
console.log(JsUser.greeting());

console.log(JsUser.greeting2());
