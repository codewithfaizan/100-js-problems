// Function


let main = (year,month,date,hour,min,sec)=>{
let aajkidate= Date.parse(new Date());
// console.log(aajkidate)

let userkidate = Date.parse(new Date(year,month,date,hour,min,sec))
// console.log(userkidate)

let diff =   userkidate-aajkidate;
// console.log(diff) // yeh milli seconds me hai
let milliToSec = diff/1000;
let secToMin = milliToSec/60;
let minToHour = secToMin/60;
let hourToDay = minToHour/24
console.log(`Seconds`,milliToSec.toFixed(2))
console.log(`Hour's`,minToHour.toFixed(2))
console.log(`Day's`,hourToDay.toFixed(2))
// console.log(secToMin)

}

main(2022,02,22,10,0,0,0)

// end date abb kal ki daal 22

// ust ki 22 date hona hai wait