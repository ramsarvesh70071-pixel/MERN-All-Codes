"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync");
var input = prompt();
// (Program to add two numbers
// -------------------------
// class Addition{
//     a:number;
//     b:number;
//     c:number;
//     initdata(){
//         this.a=40;
//         this.b=30;
//     }
//     adddata(){
//         this.c=this.a+this.b;
//     }
//     printdata(){
//         console.log(this.c);
//     }
// }
// let adding = new Addition();
// adding.initdata();
// adding.adddata();
// adding.printdata();
// -------------------
// class prr{
//     p:number;
//     r:number;
//     t:number;
//     si:number;
//     initdata(){
//         this.p=100;
//         this.r=14;
//         this.t=5;
//     }
//     calcdata(){
//         this.si=(this.p*this.r*this.t)/100;
//     }
//     printdata(){
//         console.log(this.si);
//     }
// }
// let sol = new prr();
// sol.initdata();
// sol.calcdata();
// sol.printdata();
// Area of circle
// ----------------------------------------------
// let radius=13;
// let area = 3.14*radius*radius;
// console.log(area);
// class circle_area{
//     radius:number;
//     area:number;
//     initdata(){
//         this.radius=13;
//     }
//     caldata(){
//         this.area=3.14*this.radius*this.radius;
//     }
//     printdata(){
//         console.log(this.area);
//     }
// }
// let result = new (circle_area);
// result.initdata();
// result.caldata();
// result.printdata();
// Program to add to numbers
// FORMAL PARAMETER VARIABLE
// -------------------------
// class Addition{
//     a:number;
//     b:number;
//     c:number;
//     initdata(x,y){
//         this.a=x;
//         this.b=y;
//     }
//     adddata(){
//         this.c=this.a+this.b;
//     }
//     printdata(){
//         console.log(this.c);
//     }
// }
// let adding = new Addition();
// adding.initdata(40,70);
// adding.adddata();
// adding.printdata();
// PARAMETERIZED VARIABLE
// -------------------
// class prr{
//     p:number;
//     r:number;
//     t:number;
//     si:number;
//     initdata(x,y,z){
//         this.p=x;
//         this.r=y;
//         this.t=z;
//     }
//     calcdata(){
//         this.si=(this.p*this.r*this.t)/100;
//     }
//     printdata(){
//         console.log(this.si);
//     }
// }
// let sol = new prr();
// sol.initdata(10,27,5);
// sol.calcdata();
// sol.printdata();
// Area of circle
// PARAMETERIZED VARIABLE
// ----------------------------------------------
// class circle_area{
//     radius:number;
//     area:number;
//     initdata(z){
//         this.radius=z;
//     }
//     caldata(){
//         this.area=3.14*this.radius*this.radius;
//     }
//     printdata(){
//         console.log(this.area);
//     }
// }
// let result = new (circle_area);
// result.initdata(10);
// result.caldata();
// result.printdata();
// NEW EXERSIZE
// --------------
// 1- PROGRAM TO ADD TWO VALUES
// class add{
//     a:number;
//     b:number;
//     sum:number;
//     initdata(){
//         this.a=19;
//         this.b=40;
//     }
//     adddata(){
//         this.sum=this.a + this.b;
//     }
//     printdata(){
//         console.log(this.sum);
//     }
// }
// let addition = new add;
// addition.initdata();
// addition.adddata();
// addition.printdata();
// 2- PROGRAM TO MULTIPLY TWO VALUES
// class multi{
//     a:number;
//     b:number;
//     product:number;
//     initdata(){
//         this.a=10;
//         this.b=40;
//     }
//     caldata(){
//         this.product=this.a*this.b;
//     }
//     printdata(){
//         console.log(this.product);
//     }
// }
// let multipliction=new multi();
// multipliction.initdata();
// multipliction.caldata();
// multipliction.printdata();
// 3- PROGRAM TO CHECK A NUMBER IS POSITIVE OR NEGATIVE
// class n{     
//     num:number;
//     initdata(){
//         this.num=-50;
//     }
//     caldata(){
//         if(this.num<0){
//             console.log('The Given number is negative');
//         }
//             else if(this.num==0){
//                 console.log('The Given number is Zero');
//             }
//         else{
//             console.log('The Given number is Positive')
//         }
//     }
//     // printdata(){
//     //     console.log(this.num);
//     // }
// }
// let check = new n();
// check.initdata();
// check.caldata();
// // check.printdata();
// 4- PROGRAM TO CHECK A NUMBER IS EVEN OR ODD
// class n{
//     num:number;
//     initdata(){
//         this.num=-19;
//     }
//     caldata(){
//         if(this.num%2==0){
//             console.log('The Given number is even');
//         }
//         else{
//             console.log('The Given number is odd')
//         }
//     }
//     printdata(){
//         console.log(this.num);
//     }
// }
// let check = new n();
// check.initdata();
// check.caldata();
// check.printdata();
// 5- PROGRAM TO FIND THE MAXIMUM OF TWO NUMBER 
// class max{
//     a:number;
//     b:number;
//     initdata(){
//         this.a=10;
//         this.b=30;
//     }
//     caldata(){
//         if(this.a>this.b){
//             console.log(`The maximum number is: ${this.a}`);
//         }
//         else{
//             console.log(`The maximum number is: ${this.b}`);
//         }
//     }
// }
// let adi = new max();
// adi.initdata();
// adi.caldata();
// 6- PROGRAM TO FIND THE MAXIMUM OF THREE NUMBER 
// class max{
//     a:number;
//     b:number;
//     c:number;
//     initdata(){
//         this.a=10;
//         this.b=30;
//         this.c=24;
//     }
//     caldata(){
//         if(this.a>this.b && this.a>this.c){
//             console.log(`The maximum number is: ${this.a}`);
//         }
//         else if (this.b>this.a && this.b>this.c){
//             console.log(`The maximum number is: ${this.b}`);
//         }
//         else{
//             console.log(`The maximum number is: ${this.c}`);
//         }
//     }
// }
// let adi = new max();
// adi.initdata();
// adi.caldata();
// 7-PROGRAM TO CALCULATE THE SUM OF THE FIRST N NUMBERS
// class sumof{
//     n:number;
//     sum:number;
//     initdata(){
//         this.n=40;
//         this.sum=0;
//     }
//     caldata(){
//         for(let i=1;i<=this.n;i++){
//             this.sum+=i;
//         }
//     }
//     printdata(){
//         console.log(`The sum of given number is:${this.sum}`);
//     }
// }
// let ad= new sumof();
// ad.initdata();
// ad.caldata();
// ad.printdata();
// 8- PROGRAM TO FIND THE SUM OF GIVEN N NUMBERS
var sumof = /** @class */ (function () {
    function sumof() {
        this.sum = 0;
    }
    sumof.prototype.initdata = function (x) {
        this.n = x;
    };
    sumof.prototype.caldata = function () {
        for (var i = 0; i < this.n.length; i++) {
            this.sum += this.n[i];
        }
    };
    sumof.prototype.printdata = function () {
        console.log("The sum of given number is:".concat(this.sum));
    };
    return sumof;
}());
var ad = new sumof();
var n = [23, 45, 45, 45, 45, 45, 34, 34, 56];
ad.initdata(n);
ad.caldata();
ad.printdata();
// 9- PROGRAM TO PERFORM INTEGER DIVISION
// class div{
//     num:number;
//     divi:number;
//     quotient:number;
//     reminder:number;
//     initdata(){
//         this.num=15;
//         this.divi=3;
//     }
//     caldata(){
//         this.quotient=this.num/this.divi;
//         this.reminder=this.num%this.divi;
//     }
//     printdata(){
//         console.log(`The quotien is: ${this.quotient} `);
//         console.log(`THe reminder is: ${this.reminder}`);
//     }
// }
// let division = new div();
// division.initdata();
// division.caldata();
// division.printdata();
// 10-PROGRAM TO REVERSE THE DIGITS OF A NUMBER
// class rev{
//     num:number;
//     reversed:number;
//     sum:number;
//     initdata(){
//         this.num=1234;
//         this.reversed=0;
//         this.sum=0;
//     }
//     caldata(){
//           for(let i=this.num;i>0;){
//     let digit = i % 10;
//    this.reversed = this.reversed * 10 + digit;
//     i= Math.floor(i / 10);
// }
//     }
//     printdata(){
//         console.log(`The given number is: ${this.num}`);
//         console.log(`The reversed number is: ${this.reversed}`);
//     }
// }
// let reverse=new rev();
// reverse.initdata();
// reverse.caldata();
// reverse.printdata();
// 11-PROGRAM TO GENERATE TABLE OF ANY NUMBER
// class table{
//     n:number;
//     initdata(){
//         this.n=2;
//     }
//     caldata(){
//         for(let i=1;i<=10;i++){
//             console.log(`${this.n}x${i}=${this.n*i}`); 
//          }
//     }
// }
// let t=new table();
// t.initdata();
// t.caldata();
// EXPONENTIATION
// 12-PROGRAM TO CALCULATE a^b
// class pow{
//     a:number;
//     b:number;
//     result:number;
//     initdata(){
//         this.a=2;
//         this.b=5;
//         this.result=1;
//     }
//     caldata(){
//         for(let i=1;i<=this.b;i++){
//             this.result*=this.a;
//         }
//     }
//     printdata(){
//         console.log(`a is :${this.a}`);
//         console.log(`b is: ${this.b}`);
//         console.log(`a^b is: ${this.result}`);
//     }
// }
// let power = new pow();
// power.initdata();
// power.caldata();
// power.printdata();
// 13- PROGRAM TO FIND THE FACTORIAL OF GIVEN NUMBER
// class fact{
//     num:number;
//     factorial:number;
//     initdata(){
//         this.num=5;
//         this.factorial=1;
//     }
//     caldata(){
//         for(let i=1;i<=this.num;i++){
//             this.factorial*=i;
//         }
//     }
//     printdata(){
//         console.log(`The given number is: ${this.num}`);
//         console.log(`The Factorial of given number is: ${this.factorial}`);
//     }
// }
// let facto=new fact();
// facto.initdata();
// facto.caldata();
// facto.printdata();
// 20-  PROGRAM TO CHECK A NUMBER IS PERFECT OR NOT
// class PER{
//     num:number;
//     sum:number;
//     initdata(){
//         this.num=8;
//         this.sum=0;
//     }
//     caldata(){
//         for(let i=1; i<this.num;i++){
//             if(this.num%i==0){
//                 this.sum+=i;
//             }
//         }
//     }
//     printdata(){
//         if(this.sum==this.num){
//             console.log(`The given number ${this.num} is a perfect number`);
//         }
//         else{
//             console.log(`The given number ${this.num} is not a perfect number`);
//         }
//     }
// }
// let perfect = new PER();
// perfect.initdata();
// perfect.caldata();
// perfect.printdata();
// 22- PROGRAM TO SWAP TWO NUMBERS
// class swap{
//     a:number;
//     b:number;
//     temp:number;
//     initdata(){
//         this.a=19;
//         this.b=30;
//         this.temp=0;
//         console.log(`Before swapping a: ${this.a}`);
//         console.log(`Before swapping b: ${this.b}`);
//     }
//     caldata(){
//         this.temp=this.a;
//         this.a=this.b;
//         this.b=this.temp;
//     }
//     printdata(){
//         console.log(`After Swapping a: ${this.a}`);
//         console.log(`After Swapping b: ${this.b}`);
//     }
// }
// let swapping=new swap();
// swapping.initdata();
// swapping.caldata();
// swapping.printdata();
// 18-WAP TO CHECK TGHE NUMBER IS PRIME OR NOT
// class prim{
//     num:number;
//     prime:number;
//     r=0;
//     initdata(){
//         this.num=1;
//         this.prime=1;
//     }
//     caldata(){
//         if(this.num<=1) this.prime=0;
//         for(let i=2;i<=this.num/2;i++){
//             if(this.num%i==0){
//                 this.r=1;
//                 break;
//             }
//         }
//         if(this.r==0){
//             console.log(`The given number is prime: ${this.num}`);
//         }
//         else{
//             console.log(`The given number is not a prime number: ${this.num}`);
//         }
//     }
// }
// let prime=new prim();
// prime.initdata();
// prime.caldata();
// 19-FECTORS OF A NUMBER
// class fector{
//     num:number;
//     initdata(){
//         this.num=28;
//     }
//     caldata(){
//         for(let i=1;i<=this.num;i++){
//             if(this.num%i==0){
//                 console.log(i);
//             }
//         }
//     }
// }
// let fect=new fector();
// fect.initdata();
// fect.caldata();
// )
// THIS EXERSIZE BUT ANOTHER WAYS
//1- PROGRAM TO ADD TWO VALUES
// class add{
//     a:number;
//     b:number;
//     sum:number;
//     constructor(x,y){
//         this.a=x;
//         this.b=y;
//     }
//     adddata(){
//         this.sum=this.a + this.b;
//     }
//     printdata(){
//         console.log(this.sum);
//     }
// }
// let addition = new add(34,56);
// // addition.initdata(23,65);
// addition.adddata();
// addition.printdata();
//2- PROGRAM TO MULTIPLY TWO VALUES
// class multi{
//     a:number;
//     b:number;
//     product:number;
//     constructor(x,y){
//         this.a=x;
//         this.b=y;
//     }
//     caldata(){
//         this.product=this.a*this.b;
//     }
//     printdata(){
//         console.log(this.product);
//     }
// }
// let multipliction=new multi(3,5);
// // multipliction.initdata(2,3);
// multipliction.caldata();
// multipliction.printdata();
//3- PROGRAM TO CHECK A NUMBER IS POSITIVE OR NEGATIVE
// class n{     
//     num:number;
//     constructor(x){
//         this.num=x;
//     }
//     caldata(){
//       (this.num<=0) 
//         ? (this.num==0)
//            ? console.log(`The given number is Zero: ${this.num}`)   
//            : console.log(`The given number is negative: ${this.num}`) 
//         : console.log(`The given number is Positive: ${this.num}`);
//     }      
//     printdata(){
//         console.log(this.num);
//     }
// }
// let check = new n(4);
// // check.initdata();
// check.caldata();
// check.printdata();
//4- PROGRAM TO CHECK A NUMBER IS EVEN OR ODD
// class n{
//     num:number;
//     constructor(a){
//         this.num=a;
//     }
//     caldata(){
//         (this.num%2==0) 
//          ? console.log(`The given number ${this.num} is Even`) 
//          : console.log(`The given number ${this.num} is odd`);
//         console.log(this.num);
// }
// // printdata(){
// //     console.log(this.num)
// // }
// }
// let check = new n(35);
// // check.initdata();
// check.caldata();
// // check.printdata();
//5- PROGRAM TO FIND THE MAXIMUM OF TWO NUMBER 
// class max{
//     a:number;
//     b:number;
//     constructor(x,y){
//         this.a=x;
//         this.b=y;
//     }
//     caldata(){
//         (this.a>this.b)  
//         ? console.log(`The Given number ${this.a} is larger than ${this.b}`) 
//         : console.log(`The Given number ${this.b} is larger than ${this.a}`);
//     }
//     printdata(){
//         console.log(this.a,this.b);
//     }
// }
// let adi = new max(34,56);
// // adi.initdata();
// adi.caldata();
//6- PROGRAM TO FIND THE MAXIMUM OF THREE NUMBER 
// class max{
//     a:number;
//     b:number;
//     c:number;
//     constructor(x,y,z){
//         this.a=x;
//         this.b=y;
//         this.c=z;
//     }
//     caldata(){
//         (this.a>this.b && this.a>this.c)
//          ? console.log(`The maximum number among (${this.a}, ${this.b}, ${this.c}) is: ${this.a}`)
//            : (this.b>this.a && this.b>this.c)
//            ? console.log(`The maximum number among (${this.a}, ${this.b}, ${this.c}) is: ${this.b}`)
//          : console.log(`The maximum number among (${this.a}, ${this.b}, ${this.c}) is: ${this.c}`);
//     }
// }
// let adi = new max(23,54,64);
// // adi.initdata();
// adi.caldata();
// 7-PROGRAM TO CALCULATE THE SUM OF THE FIRST N NUMBERS
// class sumof{
//     n:number;
//     sum:number;
//     constructor(x){
//         this.n=x;
//         this.sum=0;
//     }
//     caldata(){
//          let i=1;
//         while(i<=this.n){
//             this.sum+=i;
//             i++;
//         }
//     }
//     printdata(){
//         console.log(`The sum of given number is:${this.sum}`);
//     }
// }
// let ad= new sumof(4);
// // ad.initdata();
// ad.caldata();
// ad.printdata();
// 7-PROGRAM TO CALCULATE THE SUM OF THE FIRST N NUMBERS
// class sumof{
//     n:number;
//     sum:number;
//     constructor(x){
//         this.n=x;
//         this.sum=0;
//     }
//     caldata(){
//          let i=1;
//          do{
//              this.sum+=i;
//             i++;
//          }
//         while(i<=this.n);
//     }
//     printdata(){
//         console.log(`The sum of given number is:${this.sum}`);
//     }
// }
// let ad= new sumof(4);
// // ad.initdata();
// ad.caldata();
// ad.printdata();
//8- PROGRAM TO FIND THE SUM OF GIVEN N NUMBERS
// class sumof{
//     n:number[];
//     sum:number=0;
//     constructor(x){
//         this.n=x;
//     }
//     caldata(){
//         let i=0;
//         while(i<this.n.length){
//              this.sum += this.n[i];
//              i++;
//         }
//     }
//     printdata(){
//         console.log(`The sum of given number is:${this.sum}`);
//     }
// }
// let ad= new sumof([23,45,45,45,45,45,34,34,56]);
// // let n=[23,45,45,45,45,45,34,34,56]
// // ad.initdata(n);
// ad.caldata();
// ad.printdata();
//8- PROGRAM TO FIND THE SUM OF GIVEN N NUMBERS
// class sumof{
//     n:number[];
//     sum:number=0;
//     constructor(x){
//         this.n=x;
//     }
//     caldata(){
//         let i=0;
//         do{
//             this.sum += this.n[i];
//              i++;
//         }
//         while(i<this.n.length)
//     }
//     printdata(){
//         console.log(`The sum of given number is:${this.sum}`);
//     }
// }
// let ad= new sumof([23,45,45,45,45,45,34,34,56]);
// // let n=[23,45,45,45,45,45,34,34,56]
// // ad.initdata(n);
// ad.caldata();
// ad.printdata();
//9- PROGRAM TO PERFORM INTEGER DIVISION
// class div{
//     num:number;
//     divi:number;
//     quotient:number;
//     reminder:number;
//     constructor(x,y){
//         this.num=x;
//         this.divi=y;
//     }
//     caldata(){
//         this.quotient=Math.floor(this.num/this.divi);
//         this.reminder=this.num%this.divi;
//     }
//     printdata(){
//         console.log(`The quotien is: ${this.quotient} `);
//         console.log(`THe reminder is: ${this.reminder}`);
//     }
// }
// let division = new div(17,5);
// // division.initdata();
// division.caldata();
// division.printdata();
// 10-PROGRAM TO REVERSE THE DIGITS OF A NUMBER
// class rev{
//     num:number;
//     reversed:number;
//     sum:number;
//     constructor(x){
//         this.num=x;
//         this.reversed=0;
//         this.sum=0;
//     }
//     caldata(){
//           let i=this.num;
//            while(i>0){
//              let digit = i % 10;
//              this.reversed = this.reversed * 10 + digit;
//              i= Math.floor(i / 10);
// }
//     }
//     printdata(){
//         console.log(`The given number is: ${this.num}`);
//         console.log(`The reversed number is: ${this.reversed}`);
//     }
// }
// let reverse=new rev(1234);
// // reverse.initdata();
// reverse.caldata();
// reverse.printdata();
// 10-PROGRAM TO REVERSE THE DIGITS OF A NUMBER
// class rev{
//     num:number;
//     reversed:number;
//     sum:number;
//     constructor(x){
//         this.num=x;
//         this.reversed=0;
//         this.sum=0;
//     }
//     caldata(){
//           let i=this.num;
//           do{
//              let digit = i % 10;
//              this.reversed = this.reversed * 10 + digit;
//              i= Math.floor(i / 10);
//             }
//           while(i>0)
//     }
//     printdata(){
//         console.log(`The given number is: ${this.num}`);
//         console.log(`The reversed number is: ${this.reversed}`);
//     }
// }
// let reverse=new rev(1234);
// // reverse.initdata();
// reverse.caldata();
// reverse.printdata();
// import * as prompt from 'prompt-sync'
// const input =prompt();
// const num1=input('Num 1:');
// const num2=input('Num 2:');
// const sum=parseInt(num1) + parseInt(num2);
// console.log(sum);
// 1.
// class add{
//     a;
//     b;
//     sum;
//     constructor(){
//         this.a=parseInt(input('Num 1:'));
//         this.b=input('Num 2:');
//     }
//     adddata(){
//         this.sum=parseInt(this.a) + parseInt(this.b);
//     }
//     printdata(){
//         console.log(this.sum);
//     }
// }
// let addition = new add();
// addition.adddata();
// addition.printdata();
//2- PROGRAM TO MULTIPLY TWO VALUES
// class multi{
//     a;
//     b;
//     product;
//     constructor(){
//         this.a=input("number 1 :");
//         this.b=input("number 2 :");
//     }
//     caldata(){
//         this.product=parseInt(this.a)*parseInt(this.b);
//     }
//     printdata(){
//         console.log(this.product);
//     }
// }
// let multipliction=new multi();
// // multipliction.initdata(2,3);
// multipliction.caldata();
// multipliction.printdata();
// 3.PROGRAM TO CHECK A NUMBER IS POSITIVE OR NEGATIVE
// class n{     
//     num:number;
//     constructor(){
//         this.num=parseInt(input("enter number :"));
//     }
//     caldata(){
//       (this.num<=0) 
//         ? (this.num==0)
//            ? console.log(`The given number is Zero: ${this.num}`)   
//            : console.log(`The given number is negative: ${this.num}`) 
//         : console.log(`The given number is Positive: ${this.num}`);
//     }      
//     printdata(){
//         console.log(this.num);
//     }
// }
// let check = new n();
// // check.initdata();
// check.caldata();
// check.printdata();
//4- PROGRAM TO CHECK A NUMBER IS EVEN OR ODD
// class n{
//     num:number;
//     constructor(){
//         this.num=parseInt(input("enter number to check (Even or Odd):"));
//     }
//     caldata(){
//         (this.num%2==0) 
//          ? console.log(`The given number ${this.num} is Even`) 
//          : console.log(`The given number ${this.num} is odd`);
//         // console.log(this.num);
// }
// // printdata(){
// //     console.log(this.num)
// // }
// }
// let check = new n();
// // check.initdata();
// check.caldata();
// // check.printdata();
// //5- PROGRAM TO FIND THE MAXIMUM OF TWO NUMBER 
// class max{
//     a:number;
//     b:number;
//     constructor(){
//         this.a=parseInt(input("enter first number:"));
//         this.b=parseInt(input("enter Second number :"));
//     }
//     caldata(){
//         (this.a>this.b)  
//         ? console.log(`The Given number ${this.a} is larger than ${this.b}`) 
//         : console.log(`The Given number ${this.b} is larger than ${this.a}`);
//     }
//     printdata(){
//         console.log(this.a,this.b);
//     }
// }
// let adi = new max();
// // adi.initdata();
// adi.caldata();
// // 6- PROGRAM TO FIND THE MAXIMUM OF THREE NUMBER 
// class max{
//     a:number;
//     b:number;
//     c:number;
//     constructor(){
//         this.a=parseInt(input("enter first number :"));
//         this.b=parseInt(input("enter second number :"));
//         this.c=parseInt(input("enter third number :"));
//     }
//     caldata(){
//         (this.a>this.b && this.a>this.c)
//          ? console.log(`The maximum number among (${this.a}, ${this.b}, ${this.c}) is: ${this.a}`)
//            : (this.b>this.a && this.b>this.c)
//            ? console.log(`The maximum number among (${this.a}, ${this.b}, ${this.c}) is: ${this.b}`)
//          : console.log(`The maximum number among (${this.a}, ${this.b}, ${this.c}) is: ${this.c}`);
//     }
// }
// let adi = new max();
// // adi.initdata();
// adi.caldata();
// 7-PROGRAM TO CALCULATE THE SUM OF THE FIRST N NUMBERS
// class sumof{
//     n:number;
//     sum:number;
//     constructor(){
//         this.n=parseInt(input("enter number:"));
//         this.sum=0;
//     }
//     caldata(){
//          let i=1;
//         while(i<=this.n){
//             this.sum+=i;
//             i++;
//         }
//     }
//     printdata(){
//         console.log(`The sum of given number is:${this.sum}`);
//     }
// }
// let ad= new sumof();
// // ad.initdata();
// ad.caldata();
// ad.printdata();
// 8- PROGRAM TO FIND THE SUM OF GIVEN N NUMBERS
// class sumof{
//     n:number;
//     ele:number[]=[];
//     sum:number=0;
//     constructor(){
//         this.n=parseInt(input("enter how many number you want to sum:"));
//             for (let i=0; i<this.n; i++){
//             this.ele.push(parseInt(input(`enter ${i+1} number:`)));
//             }
//     }
//     caldata(){
//         let i=0;
//         while(i<this.n){
//              this.sum += this.ele[i];
//              i++;
//         }
//     }
//     printdata(){
//         console.log(`The sum of given number is:${this.sum}`);
//     }
// }
// let ad= new sumof();
// // let n=[23,45,45,45,45,45,34,34,56]
// // ad.initdata(n);
// ad.caldata();
// ad.printdata();
// // 9- PROGRAM TO PERFORM INTEGER DIVISION
// class div{
//     num:number;
//     divi:number;
//     quotient:number;
//     reminder:number;
//     constructor(){
//         this.num=parseInt(input("enter divident number :"));
//         this.divi=parseInt(input("enter number devisor:"));
//     }
//     caldata(){
//         this.quotient=Math.floor(this.num/this.divi);
//         this.reminder=this.num%this.divi;
//     }
//     printdata(){
//         console.log(`The quotien is: ${this.quotient} `);
//         console.log(`THe reminder is: ${this.reminder}`);
//     }
// }
// let division = new div();
// // division.initdata();
// division.caldata();
// division.printdata();
// // 10-PROGRAM TO REVERSE THE DIGITS OF A NUMBER
// class rev{
//     num:number;
//     reversed:number;
//     sum:number;
//     constructor(){
//         this.num=parseInt(input("enter number you want to reverse:"));
//         this.reversed=0;
//         this.sum=0;
//     }
//     caldata(){
//           let i=this.num;
//            while(i>0){
//              let digit = i % 10;
//              this.reversed = this.reversed * 10 + digit;
//              i= Math.floor(i / 10);
// }
//     }
//     printdata(){
//         console.log(`The given number is: ${this.num}`);
//         console.log(`The reversed number is: ${this.reversed}`);
//     }
// }
// let reverse=new rev();
// // reverse.initdata();
// reverse.caldata();
// reverse.printdata();
