const user = {
    username : 'tejas',
    price:999,
    

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);  //this is used for current function
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = 'sachin'
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username = 'tejas'
//     console.log(this.username);
// }

// one()

const one = ()=>{
    let username = 'tejas'
    console.log(this);
}

// one()

// const addtwo= (num1,num2) =>{
//     return num1 + num2   //implicite
// }

// const addtwo= (num1,num2) =>  num1 + num2


const addtwo= (num1,num2) =>  (num1 + num2) //explicit


console.log(addtwo(3,4));

// const myArray = [2,5,6,9]
// myArray.forEach()