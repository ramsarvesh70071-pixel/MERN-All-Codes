import promptSync from 'prompt-sync';
const prompt = promptSync();

const num1 = prompt("Enter first number: ");
const num2 = prompt("Enter second number: ");

// 'preseInt' ko 'parseInt' karein aur PromiseRejectionEvent ko hatayein
const sum = parseInt(num1) + parseInt(num2);

console.log("The sum is: " + sum);