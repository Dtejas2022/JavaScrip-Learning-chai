const marvelHeros = ['thor','ironman','spiderman']
const dc = ['superman', 'batman', 'flash']

// marvelHeros.push(dc)

// console.log(marvelHeros);
// console.log(marvelHeros[3]);

// const allherows = marvelHeros.concat(dc);
// console.log(allherows);

const all = [...marvelHeros,...dc]  //spred aoperater
// console.log(all);

const anotherAray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_usable_array = anotherAray.flat(Infinity)  //sigle array make
console.log(real_usable_array);


console.log(Array.isArray('tejas')) //checks is it array or not
console.log(Array.from('tejas')) // form array
console.log(Array.from({name:'tejas'})) //interesting

let score1 = 100
let score2 = 101
let score3 = 103

console.log(Array.of(score1,score2,score3)) //makes array of given variables