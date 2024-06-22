let x = Math.floor(Math.random()*100 +1);
let y = Math.floor(Math.random()*50+1);

let sumOutput = x+y;
let differentOutput = x-y;
let productOutput = x*y;
let quotent = (x/y).toFixed(2);
let remainder = x%y;

console.log(`out of sum is ${sumOutput}, differentOutput: ${differentOutput}, productoutput ${productOutput}, 
    quotients: ${quotent} and the remainder is ${remainder}`)