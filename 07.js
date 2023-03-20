//program to convert kms to miles

// let m = 0.621371 
// input = 7 
// console.log(`${input}kms:`,input*(m),'miles');

function conversion(input){
    let m = 0.621371 
    return `${input}kms = ${input*(m)} miles`
}
result = conversion(10)
console.log(result);