//program to swap two variables
// var a = 'hey',
// b = 'hi';
// console.log(a,b); //prints original a,b values
// t = a; // t ='hey'= a
// a = b
// b = t
// console.log(a,b)
// console.log(a,b);

//using temp
// var x = 10, y = 20
// console.log(x,y);
// temp = x        // temp = 10 = x
// x = y
// y = temp 
// console.log(x, y);

//without using third temp variable
// var x = 10, y = 20
// console.log(x,y);
// x = x+y // x = 30 , y=20
// y = x-y  // y = 10, x = 30
// x = x-y // x = 20, y = 10
// console.log(x,y);

//function 
// function swap(e,f){
// let temp = e // e = temp = 1
// e = f // e = 2
// f = temp
// console.log(e,f);
// }
// swap(1,2)

//using arrays
var a = 'hey', b = 'hi';
 array = new Array(a,b); 
 console.log(array); // array = [0,1]
 temp=array[0]
array[0] = array[1]
array[1] = temp
// console.log(array[0],array[1]);
console.log(array);

//using array method .reverse()
var c = 'hehe', d = 'haha';
 array = new Array(c,d); 
 console.log(array)
array = array.reverse()
console.log(array);
