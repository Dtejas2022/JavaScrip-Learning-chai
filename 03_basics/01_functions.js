// console.log("H");
// console.log("T");
// console.log("A");

function sayMyName(){
    console.log("H");
    console.log("T");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(num1,num2){  //paremeters
//     num3  = num1 + num2;
//     console.log(num3);
// }

function addTwoNumbers(num1,num2){  //paremeters
    // let result  = num1 + num2;
    // return result;

    return num1 + num2;
}

const result = addTwoNumbers(3,5); //Arguments

// console.log(result);

function logInUserMessage(username="siddu"){
    if(!username){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}

const user = logInUserMessage("tejas");
// console.log(user);

function caculateCartPrice(val1,val2,...num1){  //rest opetation pass multiple values/ parameters
    return num1;
}

// console.log(caculateCartPrice(2,3,4,5,6,7,8));

const user1 = {
    username : 'tejas',
    price : 500
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user1);
