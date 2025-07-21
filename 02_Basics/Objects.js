//singleton  **literal not**

//object literals

const IsUser = {
name :"Ashna",
age :21,
location : "mumbai",
email : "abc@gmail.com",
isLoggedin:false,
DaysofWork:["Monday","Saturday"]
}
console.log(IsUser.email);
console.log(IsUser["name"])


//Symbol :- define in [] also while calling return in []
const rose = Symbol("key1")
const example ={
    [rose]:"Red"

}
console.log(example[rose]);

IsUser.age = "20"  // change value

// Object.freeze(IsUser);  // now we can't change value
IsUser.age ="25";
console.log(IsUser);


IsUser.greeting = function(){
    console.log("hello good morning");
    
}
IsUser.greeting1 = function(){
    console.log(`hello user,${this.name}`);
    
}
console.log(IsUser.greeting());
console.log(IsUser.greeting1());
