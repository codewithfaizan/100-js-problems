// program to solve quadratic equations
function roots(a,b,c){
d = b*b-4*(a*c)
console.log('d:',d);
var root1 = (-b+(d)**1/2) /(2 * a), root2 = (-b-(d)**1/2) /(2 * a)
    console.log(`root1 is ${root1}, root2 is ${root2}`);
    if(d>0){console.log(`roots are real and different `);}
    else if(d<0){console.log(`roots are complex`);
    } else if( d == 0){console.log(`roots are equal`);}
}
roots(7,4,2)
