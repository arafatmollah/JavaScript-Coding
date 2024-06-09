/**
 * BMI = Weight/height*height
 * weight in kg
 * height in m 
 */
function bmiCalculator(weight,height){
 var bmi = weight/(height*height)
 return bmi;   
    
}
var finalBMI = bmiCalculator(65,1.8)
console.log(finalBMI)
if(finalBMI < 18.5){
    console.log('Underweight Zone')
}
else if(finalBMI> 18.5 && finalBMI<24.9){
    console.log('Healthy Weight Zone')
}
else if(finalBMI>=25 && finalBMI<30){
    console.log('Overweight Zone')
}
else {
    console.log('obese range.')
}
 