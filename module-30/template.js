const person = 'Adam Sandler';
const person2 = "Ben White";
const person3 = `Donal Trump`;

const multiline = 'first line of text \n' + /* old system of multiline */
'second line of text \n' + 
'third line of text \n' +
'fourth line of text';
// console.log(multiline);

const newMultiline = `first line of text  
second line of text
third line of text
fourth line of text`;
// console.log(newMultiline); /* new system of multiline */

const a = 10;
const b = 20;
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b); /* old system */
// console.log(summary);
const newSummary = `sum of ${a} and ${b} is: ${a+b}`; /* new system */
console.log(newSummary);