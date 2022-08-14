// program to convert celsius to fahrenheit
function conversion(input){ 
    return `${input}*C = ${(input*1.8) + 32}*F`
}
result = conversion(10)
console.log(result);
// (°C * 1.8) + 32 = °F//