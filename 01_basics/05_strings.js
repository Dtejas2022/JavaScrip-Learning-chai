const Fname = "tejas" //string decl
const Age = 20

console.log(Fname + Age + " you are old now"); //outdated concadination

console.log(`hello my name is ${Fname} and i am ${Age} year old.`); //modern way to use concadination

const variable = new String(`hellow-tejas`); //new way of string decl i.e provide string function for our convenience

console.log(variable[0]); //finding value at 0 index
console.log(variable.__proto__);
console.log(variable.length);           //these are some string methods
console.log(variable.toLowerCase());
console.log(variable.charAt(2)); //serching charecter at 2nd index
console.log(variable.indexOf('h')); //finding index of h 

const newString = variable.substring(0,4); //string slicing last index not include
console.log(newString);

const anotheString = variable.substring(-8,4); //reverse string
console.log(anotheString);

const newStringOne = "   rahesh    "
console.log(newStringOne); //checking difference
console.log(newStringOne.trim());  //removes white spaces using trim

const url = "https://tejas.com/tejas%20dotkar"
console.log(url.replace('%20','-'))            //replace method

console.log(url.includes('tejas')) //check value in string

console.log(variable.split('-'));  //splite using seprater in string