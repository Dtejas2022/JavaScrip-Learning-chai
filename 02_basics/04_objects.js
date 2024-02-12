//using constructor

//const appUser  = new Object()

const appUser = {}

appUser.id = "123abc"
appUser.name = "tejas"
appUser.isLoggedIn = false


// console.log(appUser);

const regularUser = {
    email : 'someone@com',
    fullname : {
        userfullname : {
            fname : 'tejas',
            lname : 'dotkar'
        }
    }
}

// console.log(regularUser.fullname?.userfullname.lname); //acces values of nested object

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)  //combine two objects

const obj3 = {...obj1, ...obj2}  //eassy way to spred
// console.log(obj3);


const users = [
    {
        id : 1,
        email: 't@com'
    },
    {
        id : 1,
        email: 't@com'
    },
    {
        id : 1,
        email: 't@com'
    },
]

users[1].email

// console.log(appUser);

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty('isLoggedIn'));

const course = {
    Cname : 'js',
    price: 999,
    Cinstructor : 'hitesh',
}

// console.log(course.Cinstructor);
//destructuring
const {Cinstructor:instructor} = course 

console.log(instructor);

