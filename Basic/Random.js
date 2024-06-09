let randomNum = Math.floor(Math.random()*10);

let guessNumber = 6;
if(guessNumber>randomNum){
    console.log('Too low')
}
else if(guessNumber<randomNum){
    console.log('Too high')
}
else if(guessNumber===randomNum){
    console.log('Right Guess')
}
else{
    console.log('Invalid');
}
