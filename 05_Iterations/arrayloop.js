//for of

let arry=[1,2,3,4,5,6]
for (const j of arry) {
    console.log(j);
    
}

//maps

const map = new Map()
map.set('IN','INDIA')
map.set('uk','united kongdom')
map.set("fr","france")

for (const [key, value] of map) {
    console.log(key ,':-', value  );
}


const programming = ["js","rb","py","java","cpp"]

// coding.array.forEach(element => {
    
// });

const values=coding.forEach(function(item) {
    console.log(item);
    return item
}
    
);
//console.log(alues)


const myNums =[1,2,3,4,5,6,7,8,9,10]
 const newnum = myNums.filter((num)=> num > 4)
console.log(newnum);
