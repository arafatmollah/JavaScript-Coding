let Leapyear = (year)=>{
    if(year%4===0){

        if(year%400===0){

            if(year%100===0){

                return 'Year is leap year'
            }
            else {
                return 'Year is no leap year'
            }
        }
        else{
            return 'Not a leap year'
        }
    }
    else{
        return 'Not a leap year'
    }
}

console.log(Leapyear(2000))
console.log(Leapyear(1999))
console.log(Leapyear(1990))