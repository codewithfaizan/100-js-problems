// sum of the natural numbers

function naturalnumbers(start,end){
    console.log(`The natural numbers from ${start} to ${end} is :`)
    let sum = 0
    for(i = start;i<=end;i++){
        console.log(i);
        sum+=i
    }
console.log(`The sum is :  `,sum);
}
naturalnumbers(1,100)