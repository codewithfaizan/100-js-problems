// program to check if the numbers have the same last digits

function samedigits(num1,num2){
    num1 = num1.toString()
    // console.log(num1);
    num2 = num2.toString()

    if(num1[num1.length-1] === num2[num1.length-1]){
        console.log(`The last digits are same`);
    }else {console.log(`The last digits are not same`)}
}
samedigits(11,21)

// another approach

function samedigit(num1,num2){
num1 = num1%10;
num2 = num2%10;
if(num1 == num2){
    console.log(`same digits`);
}else {console.log(`no same digits`);}
} 

samedigit(25,95)