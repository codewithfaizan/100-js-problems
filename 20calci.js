// simple calculator program

function calculator(number1,number2,operation){
    let result;
    if (operation == 'add' || '+') {
        result = number1 + number2;
    }
    else if (operation == 'subt') {
        result = number1 - number2;
    }
    else if (operation == 'mult') {
        result = number1 * number2;
    }
    else if (operation == 'div'){
        result = number1 / number2;
    }
console.log(result);
}
calculator(1,2,'+')
