const student = {
    name: 'Kolim Uddin',
    age: 15,
    class:'Ten',
    marks:{
        math:78,
        physics: 89,
        chemistry: 65
    },
}
const marks = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject]; /*subject hosse ekta variable tai eitake access korte hole third bracket diye access korte hobe */
// console.log(chemistry);
console.log(subjectMarks);