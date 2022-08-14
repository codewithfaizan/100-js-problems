// program to generate a random number

// x0=seed; a=multiplier; b=increment; m=modulus; n=desired array length
// function randomnogen(x0,a, b, m, n) {
//     const results = []
//     for (let i = 0; i < n; i++) {
//         x0 = (a * x0 + b) % m
//         results.push(x0)
//     }
//     return results
// }
// result = randomnogen(1,7,3,8,8)
// console.log(result)              // The Linear Congruential Generator is one of the oldest and best-known PRNG algorithms

let x = Math.random()
console.log(Math.ceil(x*10));

function randompick(){

    console.log(Math.floor(x*100));
}
randompick()