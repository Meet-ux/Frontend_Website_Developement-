let a = 6 ; 

function factorial (number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr)
    console.log(arr.slice(1,))
    let c = arr.slice(1,7).reduce((a,b)=> a*b)
    return c;
}
function facFor(number){
    if(number==1||number==0){
        return 1;
    }
    let fac = 1;
    for(let index = 1 ; index <= number ; index++){
        fac = fac*index;
    }
    return fac;
}
console.log(factorial(a))
// facFor(a)
// console.log(facFor(a))