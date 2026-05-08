import * as promptSync from 'prompt-sync';
const prompt = promptSync();

/*

1.
----------------------------------------------
class Addition {
    a ;
    b ;
    sum :number;

    initData() {
        let prompt = promptSync();
        
        this.a = prompt("Enter first Number : ");
        this.b = prompt("Enter second number : ");
    }

    addData() {
        this.sum = (parseInt(this.a) + parseInt(this.b));
    }

    printData() {
        console.log(`Sum is: ${this.sum}`);
    }
}

let add = new Addition();
add.initData();
add.addData();
add.printData();
=============================================================

2.------


 class Multiplication {
    a :number;
    b : number;
    product : number;

    initData(x, y) {
        this.a = x;
        this.b = y;
    }

    multiplyData() {
        this.product = this.a * this.b;
    }

    printData() {
        console.log(`Multiplication is: ${this.product}`);
    }
}

let multi = new Multiplication();
multi.initData(20, 40);
multi.multiplyData();
multi.printData();
// =======================================================

// 3.--------



class PosiNega {
    a : number;

    initData(x) {
        this.a = x;
    }

    TestData() {
        if (this.a < 0) {
            console.log(`Number is Negative (${this.a})`);
        } else if (this.a > 0) {
            console.log(`Number is Positive (${this.a})`);
        } else {
            console.log(`Number is zero`);
        }
    }
}

let test1 = new PosiNega();
test1.initData(20);
test1.TestData();

=======================================================


4.



class EvenOdd {
    num;

    initData(x) {
        this.num = x;
    }

    TestData() {
        if (this.num % 2 == 0) {
            console.log(`Number is even!`);
        } else {
            console.log(`Number is Odd`);
        }
    }
}

let test2 = new EvenOdd();
test2.initData(13);
test2.TestData();
============================================================

5.------


class Maximum2{
    a: number;
    b: number;
    
    initData(x,y){
        this.a = x;
        this.b = y;
    }

    cal_max(){
        if(this.a>this.b){
            console.log(`Maximum: ${this.a}`);
            
        }
        else{
            console.log(`Maximum : ${this.b}`);
            
        }
    }
}

let max = new Maximum2();
max.initData(12,15.6);
max.cal_max();

=====================================================================


6.------



class Maximum3{
    a: number;
    b: number;
    c: number;
    
     initData(x,y,z){
        this.a = x;
        this.b = y;
        this.c = z;
    }

    testMax(){
        if(this.a>=this.b && this.a>=this.c){
            console.log(`Maximum is : ${this.a}`);
            
        }
        else if(this.b>=this.a && this.b>=this.c){
            console.log(`Maximum is : ${this.b}`);
            
        }

        else{
            console.log(`Maximum is : ${this.c}`);
            
        }
    }
}

    let max3 = new Maximum3();

    max3.initData(12.5,1000,200);
    max3.testMax();

===============================================================================



7.---


class sumN{
    n: number;
    i: number
    sum: number = 0;

    initData(){
        let prompt = promptSync();
        
         this.n = prompt("Enter number: ");
       
    }

    sumCalculateN(){
        for(this.i = 1; this.i<=this.n; this.i++){
            this.sum = this.sum+this.i;

        }
        console.log(`Sum of first ${this.n} number is :  ${this.sum}`);
        
    }

}

let sum_obj = new sumN();

sum_obj.initData();
sum_obj.sumCalculateN();
==========================================================================================



8.---

class sum{
    n : number;
    sum : number = 0;

    initData(){

        this.n = parseInt(prompt("Enter how many numbers you want to add: "));
    }

    Cal_Data(){
        
        let Number:number[] = [this.n];

        console.log(`Enter ${this.n} numbers :`);

        for(let i=0; i<this.n; i++){
            // for new input each time
            let num = parseInt(prompt(`Number ${i+1} :`));
            Number.push(num); // for add numbers
            this.sum = this.sum + num;
        }

        console.log(`Sum of given ${this.n} number is : ${this.sum}`);
        
    }
}

let nSum = new sum();

nSum.initData();
nSum.Cal_Data();
================================================

9.---


class Division{
    num: number;
    divi_no:number;
    quotient:number; 
    reminder: number;

    constructor(){
        this.num = parseInt(prompt("Enter dividend number: "));
        this.divi_no = parseInt(prompt("Enter divisior number: "));
    }


    cal_Data() {
        this.quotient = Math.floor(this.num / this.divi_no);
        this.reminder = this.num % this.divi_no;
    }
    printData(){
        console.log(`The quotient is: ${this.quotient}`);
        console.log(`The reminder is: ${this.reminder}`);
    }
}

let divi = new Division();
divi.cal_Data();
divi.printData();
==============================================================

10..

class Reverse{
    num : number;
    reversed : number;
    
    constructor(){
        this.num = parseInt(prompt("Enter num you want to reverse : "));
        this.reversed = 0;

    }

    cal_Data(){
        let i = this.num;
        while(i>0){
            let digit = i%10;
            this.reversed = this.reversed * 10 + digit;
            i = Math.floor(i/10);
        
        }
    }

    printData(){
        console.log(`The given no. : ${this.num}`);
        console.log(`The reversed no.is : ${this.reversed}`);
    }
}

let reversed_obj = new Reverse();
reversed_obj.cal_Data();
reversed_obj.printData();
==============================================================

11..


class Table{
    num : number;

    constructor(){
        this.num = parseInt(prompt("Enter a number which you want to table: "));
    }

    table(){
        for(let i = 1; i<=10; i++){
            console.log(`${this.num} x ${i} = ${this.num*i}`);           
        }
    }
}

let tab = new Table();

tab.table();
==================================================================
*/
class Exponention{
num1 : number;
num2 : number;
result : number; 

constructor(){
    this.num1 = parseInt(prompt("Enter a no.: "));
    this.num2 = parseInt(prompt("Enter expontion no.: "));
    this.result = 1;
}
cal_exp(){
    
    for(let i = 1; i<=this.num2; i++){
        this.result = this.result * this.num1;
    }
}

    printData() {
        console.log(`${this.num1} ${this.num2} ${this.result}`);

    }
}

let exp = new Exponention();

exp.cal_exp();
exp.printData();