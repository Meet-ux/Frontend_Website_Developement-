let  arr = [1,13,5,7,11]; 
let newarr = []

// for(let index = 0 ; index<arr.length ; index++){
//     const element = arr[index];
//     newarr.push(element**2)
// }

newarr = arr.map((element)=>{
    return element**2
})

console.log(newarr)
const greaterThanSeven = (element) =>{
    if(element>7){
        return true
    }
    return false
}
console.log( newarr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5]
const reduc = (a,b)=>{
    return a+b
}
console.log(arr2.reduce(reduc))

let arr3 = Array.from("PRAJAPAT")
console.log(arr3)