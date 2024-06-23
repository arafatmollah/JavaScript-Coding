let arr = [1,2,3,4,5];
arr.push(6)
arr.unshift(0)
arr.reverse()

console.log(arr)

// challenge 2

let arr1 = [1,2,3,4,5,6];
let arr2 = [6,7,8,9,10];

let arr3 = arr1.concat(arr2);
arr3.splice(5,1)
console.log(arr3)