// const tinderUser = new Object()

const customer= {
email:"ram@gmail.com",
fullname:{
    userfullname:{
        firstname:"surya",
        lastname:"mishra"
    }}
}

console.log(customer.fullname.userfullname.firstname)


const obj1 ={1:"a",2:"b", 3:"c"}
const obj2 = {
    4:"g",
    5:"d",
    6:"n"
}

//combining Objects
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

const obj4 = {...obj1,...obj2}
console.log(obj4);

console.log(Object.keys(customer));

console.log(Object.values(customer));

console.log(Object.entries(customer));
//Array of Objects

const course = {
    coursename :"js in hindi",
    price :"999",
    courseInstructor:"hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor);
