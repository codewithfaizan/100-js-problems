//program to check wheather a number is postitve negastive or zero 

function check(num){
    if(num<=0){
        if (num<0){return 'negative'}
        else { return 'zero'} }
    else {return 'positive'}
}
result = check(-6)
console.log(result);