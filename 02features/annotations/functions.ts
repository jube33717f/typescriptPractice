const add = (a: number, b: number) =>  {
    return a + b
}
const substract = (a: number, b: number) =>{
    return a - b;
}
function dicide(a:number , b:number):number{
    return a / b
}
const multiply = function (a:number,b:number):number{
    return a * b
}
const logger = (message : string):void =>{
    console.log(message)
}
const throwError = (message : string):void=>{
    if(!message){
        throw new Error(message)
    }
    
}

const forecast = {
    date :new Date(),
    weather:'sunny'
}
// const logWeather = (forecast: {date: Date, weather: string})=>{
//     console.log(forecast.date)
//     console.log(forecast.weather)
// }
//destructuring
const logWeather = ({date,weather}: {date: Date, weather: string})=>{
    console.log(date)
    console.log(weather)
}

