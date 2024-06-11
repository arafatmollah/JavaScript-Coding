let firstName = prompt('Enter your Name');
let secondName = prompt('Enter Second Name');
let loveCal = Math.floor(Math.random()*100+1);
if(loveCal>50){
    console.log(`${firstName} and ${secondName} love eachOther. Their score ${loveCal}`)
}
else{
    console.log(`Score: ${loveCal}`)
}