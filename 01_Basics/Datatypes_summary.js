//Primitive

// 7 types :String , Numbers , Boolean , null , undefined , Symbol ,BigInt

const score = 44
const point = 4432.3

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2);

const BigNumber = 442342344

//Refrence (NON primitive)

//Array , objects , Functions

const Heroes = ["doremon","bheem", "tomjerry" ];
let myObj = {
    name:"ashna",
    age:21,

}
const myFunction = function(){
    console.log("hello");
    
}
console.log(typeof BigNumber);


//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive ,copy), Heap (Non-Primitive),refrence

let myBook = "thelaastLEsson"

let newvar= myBook
newvar= "theSevensister"
console.log(myBook);
console.log(newvar);

let user1={
    email:"asdff@gmail.com",
    upi:"asdd@ypl"
}
 let user2 = user1;

user2.email ="mnb@gmail.com"
console.log(user1);
console.log(user2);


