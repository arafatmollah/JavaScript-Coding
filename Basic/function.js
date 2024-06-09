function retrunMonth(num){
    let months = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'July', 'Aug', 'Sept', 'oct', 'Nov', 'dec'];
    if(num<1 || num>12){
        return null;
    }
    else{
        // return months[num]
        console.log(months[num])
    }
}
let result = retrunMonth(7);
console.log(result);