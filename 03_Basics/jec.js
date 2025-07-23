//Javascript Execution Context

//global Execution useContext
//Function Execution Context
//Eval execution Context

//js --->memory creation phase 
/* {val1 -> undefine
    val2 -> undefine
    addnum ->defination
    result1->undefine}



//2. execution phase {
val1 = 10
val2 = 5
addNum-->{
new execution env  or thread{
     memory phase{
     val1->undefined
     val2->undefined
     total->undefined
     }
     execution
    {
     num1->10
     num2->5
     total->15        // after complation it will delete
     }


}}
}*/

let val1= 5;
let val2=3;
function sum (num1,num2){
    return num1 + num2
}

result1 = sum(val1,val2)
result2 = sum(4,3)

console.log(result1);
console.log(result2);



//call stack


