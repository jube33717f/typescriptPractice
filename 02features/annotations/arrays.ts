const carMakers: string[] = ['ford','toyota','chevy']
const dates = [new Date(),new Date()];

const carsByMake:string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]
//Multiple Types in Arrays
//Help with inference when extracting values
const car_ = carMakers[0]
const myCar = carMakers.pop();
//prevent incimpatible values
carMakers.push(100)

//Help with 'map'
carMakers.map((car:string):string =>{
    return car.toUpperCase()
})

//Flexiable types
const importantDates:(Date|string)[] = [new Date(),'2030-10-10']
importantDates.push(new Date())
importantDates.push('2030-10-10')
