// Armstrong number in an interval
function armstrong (start,end){

for (let i = start; i <=end; i++) {

 let n = i.toString().length;

    let sum = 0;
    let temp = i;

    while (temp > 0) { 
        sum += (temp%10)**n;
        temp = Math.floor(temp/10)
    }
 
    if (sum == i) {console.log(i)}
}
}
armstrong(8,500)