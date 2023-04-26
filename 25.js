const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// let removeEl = (student) =>{
//     // delete student.age ;
    delete student.greet;
    // delete student['score'];
    delete student['score'];
// }

// let result = removeEl();
console.log(student)