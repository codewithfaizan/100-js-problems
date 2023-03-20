// program to find the largest among three numbers

function largest(a,b,c){ 
    if ((a>=b)&&(a>=c)){
        return `${a}is greatest`;
    } else if ((b>=a)&&(b>=c)){
        return`${b} is greatest`;
    } else {return `${c} is greatest`}
}

result = largest(5,8,2)
console.log(result);

//  a   b   c  
//  1   2   1   
//  2   2   1
//  2   1   2   
//  1   2   2
//  1   2   3
//  3   2   1
