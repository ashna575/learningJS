//immediately Involked Function Expression ()()
//to remove the problem created by global variable
(function chai() {
    console.log(`dataBase connected`);  //named iife
    
})();

( () =>{
   console.log(`hello`);
   
})();
( (a,b) =>{
   console.log(a-b);
   
})(9,5);