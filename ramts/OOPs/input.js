"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync");
var input = prompt();
var num1 = input('Num1 : ');
var num2 = input('Num2 : ');
var sum = parseInt(num1) + parseInt(num2);
console.log(sum);
