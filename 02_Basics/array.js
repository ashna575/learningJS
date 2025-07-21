const myArray = [0,1,2,3,4,5]
const myHeroes = ["orange","mango","grapes","banana"]

const arry = new Array(1,2,3,4,)
console.log(arry[0]);
console.log(myArray.push(6));  //push no to last
console.log(myArray.push(9));

myArray.pop() //remove no from last

myArray.unshift(9)   //add no to starting

myArray.shift() // remove from   starting

console.log(myArray);

console.log(myArray.includes(7));

const newArr = myArray.join()

console.log(myArray);
console.log(typeof newArr);
console.log( newArr);

// slice  splice  :- Don't change original array only extract some part

console.log("A",myArray);
const myn1 = myArray.slice(0,3)
console.log(myn1)
console.log("B",myArray);


//splice  :- change original array 

console.log("c",myArray);
const myn2= myArray.splice(0,3)
console.log(myn2)
console.log("D",myArray);




