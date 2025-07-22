function addition(num1, num2) {
    console.log(num1 + num2);
}
addition(3, 4)

function add(a,b) {
    return a+b;
}
 console.log( add(8,7));

 function loginuser(username) { //if we pass value in parameter nd in argument then argu overwrite param
    if (username=== undefined) {    //(!username)
        console.log("please enter user name");
        
    }
    return `${username} just logged in`  
 }
 console.log(loginuser());


function calculateCartPrice(...num1) {   //rest
    return num1
}
 console.log(calculateCartPrice(200,400,23,223));



 const user = {
    name:"ram",
    price:900
 }
 function handleObject(any){
    console.log(`username is ${any.name} and its price is ${any.price}`);
    
 }
 handleObject(user)
 handleObject({
    name:"sam",
    price:903
 })



const  flowers={
    // rose :"red",
    // marigold :"yellow",
    // lily:"white",
    // lotus:"pink",
    // sunflower:"yellow"

    name:"Rose",
    color:"pink"

}

function define(quality){
    console.log(`The colour of ${quality.name} is ${quality.color}`);
    
}

define(flowers)

 const marks=[45,34,24,55,33]
 const sub=["hindi","english","MAths"]

 function result(a,b){
    return `the no of ${a[2]} is ${b[0]}`
 }

 console.log(result(sub,marks));
 