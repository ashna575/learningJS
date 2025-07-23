const user = {
    name:"stuti",
    marks:89,

    welcome:function(){
        console.log(`${this.name},welcome to website`);
        console.log(this);
        
    }


}
user.welcome()
user.name="sanskar"
user.welcome()

//this only work in ibject fun not in real function

// const m=function () {
//     let n='priyal'
//     console.log(this.name);
    
    
// }
// m()

// const chai = () => {
//     let username = "priyal"
//     console.log(this.username);
    
// }
// chai()


const power = (num1,num2) =>{
    return num1 ** num2
}
 //implicit
const mul = (num1,num2) =>
     num1 * num2


console.log(power(2,4));

