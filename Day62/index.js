// Create a Business name generator by combining list of adjective and shop name another word
/*
Adjectves:
Crazy 
Amazing 
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited 
Hub

*/

console.log("Enter The Adjectives");
let A1 = prompt("Enter A1"); 
let A2 = prompt("Enter A2"); 
let A3 = prompt("Enter A3");
console.log("Enter The ShopName"); 
let S1 = prompt("Enter s1"); 
let S2 = prompt("Enter s2"); 
let S3 = prompt("Enter s3");
console.log("Enter The AnotherWord");
let W1 = prompt("Enter W1"); 
let W2 = prompt("Enter W2"); 
let W3 = prompt("Enter W3");

let random = Math.random();
console.log(random);
if(random>0.3){
    console.log(A1+" "+ S2 +" "+W3)
}
else if (random>0.2){
    console.log(A2+" "+ S3 +" "+W2)
}
else{
    console.log(A1+" "+ S1 +" "+W1)
}