//if statement

// const isUserloggedIn = true

// const temprature = 31

// if(temprature<50){  //condition true then exicute code in { } braces
// //scope
// console.log(`less than 30`);
// } else{
// console.log(`greter than 30`);
// }
// <, >, <=, >=, ==, !=, ===, !==, 

// 3!=2

// const score = 200

// if(score =>100){
//     const power='fly'
//     console.log(`user power : ${power}`) 
// }
// console.log(`user power : ${power}`)  //scope pro problem



const balance = 1000
// if(balance <= 500){
//     console.log('test');
// }

// if (balance < 500){
//     console.log('less than ');
// }else if(balance<750){
//     console.log('less than 750');
// }else if(balance<900){
//     console.log('less than 750');
// }else{
//     console.log('less than 1200');
// }

const isUserloggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(isUserloggedIn && debitCard && 2==2){
    console.log("allow purchase");
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log('user logged in');
}