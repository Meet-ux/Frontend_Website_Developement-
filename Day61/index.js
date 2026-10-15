/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
let random = Math.random();
let a = prompt("Enter your number")
let b = prompt("Enter your number")
let c = prompt("Enter operation")

let obj = {
    "+" : "-", 
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if( random > 0.1){
    //Perform Correct Calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    //Perform Correct Calculation
     c = obj[c] 
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
   
}