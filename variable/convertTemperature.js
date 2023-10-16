function convertTemperature(degrees, unit){
    if(unit === 'Celsius' || unit === 'C'){
        let Fahrenheit = (degrees * 9 / 5) + 32;
        return Fahrenheit;
    }else if (unit === 'Fahrenheit' || unit === 'F'){
        let Celsius = (degrees - 32) * 5 /9;
        return Celsius;
    }else{
        return 'invalid input, please enter Fahrenheit or Celsius'
    }
}

console.log(convertTemperature(25, 'Celsius'))
console.log(convertTemperature(77, 'Fahrenheit'))