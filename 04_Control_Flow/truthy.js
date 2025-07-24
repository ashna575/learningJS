const userEmail = "abc@gmail.com"

if(userEmail){
    console.log("got user EMail");
    
}
else{
    console.log("dont get");
    
}

// TRUTHY 
// "0" , "false" ," ",[], {}, function(){}

// FALSY VALUE : false , 0 , -0 ,
//              BigInt On ," ",null,
//              undefined,NaN

if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObj ={}

if (Object.keys(emptyObj).length===0) {
    console.log("object ");
    
}

//Nullish coalescing Operator(??):null undefined

let val1;

//val1 = 5 ?? 10
val1= null ?? 99
console.log(val1);

//Terniary operator
//condition? true : false