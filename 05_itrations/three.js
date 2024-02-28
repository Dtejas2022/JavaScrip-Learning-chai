// for of

// arrays specific loops

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,6,7,8,9]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world"

for (const greet of greetings) {
    // console.log(`each char is ${greet}`)
}

//maps

const map = new Map()
map.set('IN', 'india')
map.set('USA', 'United state of america')
map.set('IN', 'india')
console.log(map);

for (const [key, value] of map){
    console.log(key, ":-" ,value);
}

const myObject = {
    'game1' : "GTA",
    'game2' : "mario"
}

// for (const iterator of object) {
//     for (const [key, value] of map){
//         console.log(key, ":-" ,value);
//     }
// }