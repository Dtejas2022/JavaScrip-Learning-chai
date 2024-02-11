//Array
const myArr = [0,1,2,3,4,5,6] //array declarattion
// console.log(myArr);
// console.log(typeof(myArr));

// console.log(myArr[2]);  //zero indexing

// const newArr = new Array(1,2,3,4)

const herosArr = ['shaktiman', 'nagraj']
// console.log(herosArr[1]);


// Arrays methods

// myArr.push(7)  //append value at end
// console.log(myArr);

// myArr.pop()  //delete last array element
// console.log(myArr);

// myArr.unshift(9) //adds start of array
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9)); //is 9 in array or not return bool
// console.log(myArr.indexOf(9));

// const newArr2 = myArr.join() //convert in string

console.log(myArr);
// console.log(newArr2);

//slice, splice

console.log('A', myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log('B', myArr);

const myn2 = myArr.splice(1,3)
console.log('C', myArr);
console.log(myn2);