// program to print fibbonacci series

function fibbonacci(num) {
let num1 = 0, num2 = 1, num3;
    for(let i = 1;i<=num;i++){
        console.log(num1)
        num3 = num1 + num2
        num1 = num2
        num2 = num3
    }
}
fibbonacci (12)

// using array
// function fibonacci(n){
//     const fib = [0,1]
//     for(i=2;i<n;i++){
//         fib[i] = fib[i-1]+fib[i-2]
//     } 
//     return fib
// }
// result = fibonacci(8)
// console.log(result);


