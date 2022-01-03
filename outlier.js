const array = [1,3,5,7,2,9,11,13]

const findOut = (arr)=>{
let o = []
let e = []
for (i=0;i<arr.length;i++){
if (arr[i]%2==0){
e.push(arr[i])} 
else if (arr[i]%2!==0){
o.push(arr[i])}
    } // console.log(o,e)
    if(o.length > e.length){
        return e.toString()
    } else {return o.toString()}
}

console.log(findOut(array))