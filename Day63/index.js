let arr = [1,2,3,4,5,7]
console.log(arr);
arr[2] = 2000;
console.log(arr);
console.log(arr.length);
console.log(arr[0])
// console.log(arr.toString())
console.log(arr.join(" and "))
arr.pop();

arr.push(100);

arr.push("Harry")

arr.shift();

arr.unshift(69);

delete arr[6];
console.log(arr); 