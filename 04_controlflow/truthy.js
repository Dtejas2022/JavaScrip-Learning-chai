const userEmail = [ ]

if(userEmail){
    console.log("got user email");
}else{
    console.log('dont have user email');
}

// falsey values
// false, 0, -0, BigInt, "", null, undefined, NaN
// truthy values
// "0", "false", " ", [], { }, function(){}, 

if (userEmail.length===0){
    console.log("array empty");
}

const obj = {

}

if (Object.keys(obj).length===0){
    console.log("object is empty");
}


// nullish
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// ternary oprater

// condition ? true:false

const icePrice = 100
icePrice <= 80 ? console.log('less than 80') : console.log('more than 80');