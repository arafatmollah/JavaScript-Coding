//else if
const weekDay = 'Wednesday';
if(weekDay==='Sunday'){
    console.log('It is a busy day');
}
else if(weekDay==='Monday'){
    console.log('it ismy coding day');
}
else if(weekDay==='Friday'){
    console.log('It is a prayer day')
}
else if(weekDay==='Saturday'){
    console.log('Yes!!!!!! that is my day')
}
else{
    console.log('What a bad life')
}

/// more practice
const age = 28;
if (age <= 5){
    console.log('Free Entry')
}
else if(age > 5 && age <= 10){
    console.log('Child with $10')
}
else if(age>10 && age<=65){
    console.log('Adult price with $20')
}
else if(age>65){
    console.log('Seniorwith $10')
}
else{
    console.log('Not available')
}