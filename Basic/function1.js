function sum(...number){
    let total = 0;
    for(let num of number ){
        total+=num;
    }
    return total;
}

let find = sum(1,2,3,4,5);
console.log(find)

//pass object as a param

function logedInuser(user){
    return `User name is ${user.name} and the id is ${user.id} has been
    loggedIn`
}

let user = {
    name: 'Ahiyan',
    id: '1'
}
let user1 = {
    name: 'Rashid',
    id: '2'
}
console.log(logedInuser(user))
console.log(logedInuser(user1))

//array as a param

function newArr(arr){
    let randomIndex = Math.floor(Math.random()*arr.length);
    return randomIndex;
}
let newIndex1 = newArr([1,2,3,4,5,6,7]);
console.log(newIndex1)

function newArr1(...arr){
    let randomIndex = Math.floor(Math.random()*arr.length);
    return randomIndex;
}
let newarray = newArr1(1,2,3,4,5,6,7);
console.log(newarray)