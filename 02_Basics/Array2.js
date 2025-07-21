const fruits = ["orange","mango","grapes","banana"]

const colors=["red","Blue","Green","yellow"]

//colors.push(fruits)


// console.log(colors);
// console.log(colors[4][3]);

 const combo= colors.concat(fruits)  
console.log(combo);

const newcombo = [...fruits ,...colors]   //return combine 2 pr more array result  in new Array
console.log(newcombo);

const subArray = [1,2,3,[4,5,6],7,[86,32,[9,8]]]
const subArray2 = subArray.flat(Infinity)
console.log(subArray2);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"));


let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(100,200,300));
