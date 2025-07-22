let s=7

if(true) {
    let s = 10
const b=9
var c= 50
console.log("inner:",s);

}
//value define in global scope is acessible by block scope bt not viceversa
console.log(s);

//console.log(c);
// console.log();
// console.log();


//nested scope
//closure:

function one() {

    const a = "fav"
    function two(){
        const b="person"
        console.log(a);
        
    }
   two()
 //  console.log(b);
    
}
one()

//++++++++++++++++++++++++++++++++++++++++++++++++++
function Addone(num){
    return num+2
}
console.log(Addone(9));


const AddTwo=function(num){
    return num+2
}
console.log(AddTwo(7));
