let footballPlayer = ['Messi', 'Ronaldo', 'Neymar', 'Kane', 'Drogba'];
console.log(footballPlayer)
let first = footballPlayer.slice(1,3);
console.log(first)

//include
let cricketPlayer = ['Virat', 'Sachin', 'Dhoni', 'Afridi'];
let second = cricketPlayer.includes('Shakib');

//index of
let find = cricketPlayer.indexOf('Sachin')
console.log(find)
console.log(second)

//concat
let catanation = cricketPlayer.concat(footballPlayer);
console.log(catanation)

//slice splice
let div = cricketPlayer.slice(0,3);
console.log(div)

let number = ['Son', 'karim', 'Rahim','Dune'];
let reverse = number.reverse();
let splice = number.splice(1,1,'Dhaka');
console.log(splice, number)