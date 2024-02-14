// var c = 300
let a = 300

// {} //scope

if(true){
    let a =  10
    const b = 20
    // var c = 30

    // console.log(a)

}

// console.log(a)
// console.log(b)
//  console.log(a)

function one(){
    const username = 'tejas'

    function two(){
        const website = 'youtube'
        console.log(username)
    }

    console.log(website);
    two()
}

// one()

if(true){
    const username = 'tejas'
    if (username ==='tejas'){
        const website = 'youtube'
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++interesting+++++++++++++++++++++

addone(5)


function addone(num){
    return num+1
}

// addone(5)


// addtwo(5)
const addtwo = function(num){   //function declaration
    return num + 2
}

addtwo(5)