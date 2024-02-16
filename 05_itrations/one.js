// for 

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
//     if(element == 6){
//         console.log(`${element} is best number`);
//     }
// }
// console.log(element);

for (let index = 1; index <= 10; index++) {
    // console.log(`outer loop ${index}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop : ${j} inner loop ${index}`);
        //console.log(index + '*' + j + ' = ' + index *j);
    }    
}


let myarray = ["flash", "batman", "superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index]    
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if(index ==5){
//         console.log(`detected ${element}`)
//         break
//     }
//     console.log(`value of i is ${element}`);
    
// }


for (let index = 1; index <= 20; index++) {
    const element = index;
    if(index ==5){
        console.log(`detected ${element}`)
        continue
    }
    console.log(`value of i is ${element}`);
    
}