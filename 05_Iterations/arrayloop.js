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

