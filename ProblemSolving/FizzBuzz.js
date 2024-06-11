let arr = [];
let count = 1;

function fizzbuzz(){
    
    while(count<=100){
        if(count%3===0 && count % 5 === 0){
            arr.push('FizzBuzz')
        }
        else if(count%3===0){
            arr.push('Fiz');
        }
        else if(count%5===0){
            arr.push('Buzz')
        }
        else{
            arr.push(count)
        }
        count++;
    }
   
    console.log(arr)
}


fizzbuzz()
//
