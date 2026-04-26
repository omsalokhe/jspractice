// array traversal

const arr=["om","neeraj","harsh","anish"];
for(const i of arr){
    console.log(i);
}

// Map traversal 
// map stores only unique values ,key:value pair will be stored always
const map=new Map()
map.set("age",19);
map.set("name","om");
map.set("feamle","male");
map.set("name","om");

for(const trav of map){
    console.log(trav);
}

for(const [key,value] of map){
    console.log(key,":-",value);
}

// object traversal
// object is not iterable
const obj={
    age:19,
    gender:"male",
    name:"om"
}
// for(const trav of obj){
//     console.log(trav);
// }

// for(const [trav,value] of obj){
//     console.log(trav,value);
// }

// for traversing objects for in loop is used
for(const key in obj){
    console.log(key);
}
for (const key in obj) {
    console.log(obj[key]);
}