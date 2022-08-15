// program to print all prime numbers in an interval 


// printing prime from 10 to 20
function prime(start,end){

for(let i=start;i<=end;i++){

    let flag = 0;

    for(let j = 2;j<i;j++){

        if(i%j==0){

            flag = 1; break;
        }
    }

if((i>1)&&(flag == 0)){
console.log(i)}
}
}

prime(2,20)