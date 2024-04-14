// program to Check wheather the given number is armstrong or not
//  153 = 1**3+5**3+3**3

let num, sum = 0;

function armstrong(num) {
  temp = num;
  n = ("" + num).length;
  console.log(n)
  while (num > 0) {
    sum += (num % 10) ** n;
    console.log(`1`, sum);
    num = Math.floor(num / 10);
    console.log(`2`, num);
  };
  if (sum == temp) {
    console.log(`armstrong number`);
  } else {
    console.log(`not an armstrong number`);
  }
}
armstrong(153);

// console.log(153/10);
// console.log(Math.floor(153/10));
// console.log((153/10)%1);
