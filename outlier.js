const array = [12,32,52,72,22,9,112,132]

const findOut = (arr)=>{
    let o = []
    let e = []
for (i=0;i<arr.length;i++){
    if (arr[i]%2==0){
    e.push(arr[i])} 
    else{o.push(arr[i])}
} 
    if(o.length > e.length){
        return e.toString()
    } else {return o.toString()}
}

console.log(findOut(array))