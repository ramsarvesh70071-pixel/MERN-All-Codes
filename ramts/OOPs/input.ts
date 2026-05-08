import * as prompt from 'prompt-sync';
const input = prompt();

const num1 = input('Num1 : ');
const num2 = input('Num2 : ');

const sum = parseInt(num1) + parseInt(num2);

console.log(sum);