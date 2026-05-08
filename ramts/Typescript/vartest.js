// VAR VS LET VS CONST
// -----------------------
// var age=49;
// console.log(age);
// let age=51;
// console.log(age);
// const age=54;
// console.log(age);
// let is an scoped variable
// if(true){
//     let age=51;
// }
// console.log(age);
// var is not scoped variable
// if(true){
//     var age=51;
// }
// console.log(age);
// const is an scoped variable
// if(true){
//     const age=23;
// }
// console.log(age);
// let age=40;
// console.log('older age:', age);
// age=45;
// console.log('updated age:', age);
// var age=32;
// console.log('older age:', age);
// age=34;
// console.log('updated age:', age);
// const age=45;
// console.log('Older age:', age);
// age=49;
// console.log('updated age:', age);
// DATA TYPE
// number data type
// let age=10;
// let age='ten';
// let age :number='ten';
// let age :number=56;
// string data type
// let age :string="Sixty";
// let age :string=34;
// boolean data type
// let age :boolean=false;
// let age :boolean="false";
// let age :boolean=53;
// undefined data type
// let age :undefined=undefined;
// let age :undefined=34;
// string data type
// let first_name : string="Aditya";  //Double quotes string
// let midle_name : string='Kumar';   //single quotes string
// let last_name : string=`Vishwakarma`; //templating string
// console.log(first_name,midle_name,last_name);
// let marital_status: boolean=false;
// console.log('My marital status:',marital_status)
// let salery:number;
// // salery=1000;
// console.log(salery) //the value of variable is not define yet
// let passport_number:null;  //null data type
// passport_number=null;
// console.log(passport_number)
// arrey
// let marks: number[];
// marks=[23,47,43,54,654,];
// console.log(marks[3]);
// object
// let address:object;
// address={
//     house_no:232,
//     area:"Nautanwa",
//     distric:"maharajganj"
// };
// console.log(address);
// tuple
/* name-string
   ms-boolean
   salary-number
*/
// let person:[string,boolean,number];
// person=["aditya",false,1000];
// person=[false,"aditya",1000]  
// console.log(person);
// Interface data type
// interface student{
//    roll:number,
//    name:string,
//    college:string,
//    branch:string,
//    fee:number
// }
// let m:student;
// m={
//    roll:12,
//    name:"aditya",
//    college:"ICC",
//    branch:"CS",
//    fee:49000
// }
// console.log(m);
// console.log(m.college);
// Enum data type
// --------------------
// enum days{sun,mon,tue,wed,thu,fri,sat}
// let day;
// day=days.thu;
// console.log(day);
// enum months{jan,feb,mar,apr=10,may,jun}
// let mnt;
// mnt=months.may;
// console.log(mnt)
// union data type
// let age:number|string;
// age=10;
// console.log(age);
// age="ten";
// console.log(age);
// let ms:boolean|string|number;
// ms=0;
// console.log(ms);
// ms=false;
// console.log(ms);
// ms='unmaried';
// console.log(ms);
// never data type
// function calarea():never{
//    let radius=2;
//    let area=3.14*radius*radius
//    return area;
// }
// console.log(calarea());
// any data type
// let a:any;      //strongly typed any variable
// a=10;
// console.log(a);            
// a='nsa';
// console.log(a);
// a=false;
// console.log(a);
// a=[12,32,43,54]
// console.log(a[2]);
// let a;         //loogely typed variable 
// a=32;
// console.log(a);
// a='aditya';
// console.log(a);
// a=false;
// console.log(a);
// let a:number;   //strongly typed variable
// a=22;
// console.log(a);
// a='as';
// console.log(a);
// type inference
// let a=43;   //type inference data type(number)
// console.log(a);
// a='23'
// console.log(a);
// let a='aditya'; //type inference data type(string)
// console.log(a);
// a=2;
// console.log(a);
// OPERATOR
//arithmatic operator
// let a=29; //here (=) is an assignment operator
// console.log(a);
// realtional operator
// let a=10;
// let b=32;
// let c=a<b;
// console.log(c);
// INCREMENT OPERATOR
// let a=10;
// console.log(++a);  //pre increment
// console.log(a++);  //post increment
// console.log(a);
// DECREMENT OPERATOR
// let a=20;
// console.log(--a); //pre decrement
// console.log(a--); //post decrement 
// console.log(a);
//post decrement
// let a=123;
// let b=113;
// let c=a<=b;
// console.log(c);
// TERNARY OPERATOR
// let age=19;
// age<=18 ? console.log('child') : console.log('adult');
// let age=19;
// let a=age<=18 ? 'child' : 'Adult'
// console.log(a)
//NESTED TERNARY OPERATOR
// let age=6;
// age<=18 ? (age<=5 ? console.log('playway') : console.log('child')) : console.log('Adult');
// LOGICAL OPERATOR
// LOGICAL AND OPERATOR
// let a=25;
// let b=30;
// console.log(a>b && a==b);
// console.log(a<b && b==a);
// console.log(a>b && a!=b);
// console.log(a<b && a!=b);
// LOGICAL OR
// let a=32;
// let b=54;
// console.log(a==b || b<a);
// console.log(a<b || a==b);
// console.log(a>b || a!=b);
// console.log(b!=a || b>a);
// LOGICAL NOT
// let a=30;
// let b=40;
// // console.log(!(a>b));
// console.log(!(b>a))
// CONTROL STATEMENT
//  CONDITIONAL CONTROL STATEMENT
// IF STATEMENT
// ------------------------
// let age=22;
// if(age<=18){
//    console.log('child');
// }
// MULTIPLE IF
// let age=14;
// if(age<=18){
//    console.log('child');
// }
// if(age>18&&age<=40){
//    console.log('adult');
// }
// if(age>40){
//    console.log('old');
// }
// IF-ELSE
// let age=20;
// if(age<18){
//    console.log('child');
// }
// else{
//    console.log('adult');
// }
// NESTED IF-ELSE
// NESTED IF-ELSE(NESTING INSIDE IF)
// let age=14
// if(age<=18){
//    if(age<=5){
//       console.log('playway');
//    }
//    else{
//       console.log('child');
//    }
// }
// else{
//    console.log('adult');
// }   
// NESTING INSIDE ELSE
// let age=40;
// if(age<=5){
//    console.log('playway');
// }
// else{
//    if(age<=18){
//       console.log('child');
//    }
//    else{
//       console.log('adult');
//    }
// }
// NESTING INSIDE BOTH IF-ELSE
// let age=55;
// if(age<=18){
//    if(age<=5){
//       console.log('playway');
//    }
//    else{
//       console.log('child');
//    }
// }
// else{
//    if(age<=50){
//       console.log('adult');
//    }
//    else{
//       console.log('old');
//    }
// }
// IF-ELSE-IF
// let age=12;
// if(age<=5){
//    console.log('playway');
// }
// else if(age<=18){
//    console.log('child');
// }
// else if(age<=50){
//    console.log('adult');
// }
// else{
//    console.log('old');
// }
// let age=50;
// if(age>50){
//    console.log('old');
// }
// else if(age>18){
//    console.log('adult');
// }
// else if(age>5){
//    console.log('child');
// }
// else{
//    console.log('playway');
// }
// IMPORTENCE OF USING TEMPLATE STRING
// let title='Mr';
// let First_name='aditya';
// let last_name='vishwakarma';
// console.log("Hi"+" "+title+" "+First_name+" "+last_name);
// console.log(`hii ${title} ${First_name} ${last_name}`);
// ITERATION CONTROL STATEMENTS
// ----------------------------
// let i;
// for(i=1;i<=100;i++){
//    console.log(`${i}: 'welcome' `);
// }
// for(i=1;i<=100;i++){
//    console.log(`${i}:`, i);
// }
// for(i=1;i<=100;i++){
// console.log(`iteration number: ${i}`);
// console.log("iteration number:"+i);
// }
// for(i=1;i<=10;i++){
//    // console.log("2x"+i+"="+2*i);
//    console.log(`2x${i}=${2*i}`);
// }
// for(i=10;i>=1;i--){
//    console.log(`2x${i}=${2*i}`);
// }
// WHILE LOOP
//-------------------------
// let i=1  //intialize counter
// while(i<=10){    //test counter
//    console.log(`2x${i}=${2*i}`);  //statement
//    i++;   //update counter
// }
// let i=10;
// while(i>=1){
//    console.log(`2x${i}=${2*i}`);
//    i--;
// }
// DO-WHILE LOOP
// -------------
// let i=1;  //intialize counter
// do{
//    console.log(`2x${i}=${2*i}`);  //statement  here (${})is interpolession
//    i++;                           //update counter
// }while(i<=10);                   //test counter(condition)
// let i=10;
// do{
//    console.log(`2x${i}=${2*i}`);
//    i--;
// }while(i>=1);
// CONTINUE KEYWORD
// let a=0;
// while(a<=5){
//    if(a++==3){
//       continue;
//    }
//    console.log(a);
// }
// BREAK KEYWORD
// let a=0;
// while(a<=10){
//    if(a++==4){
//       break;
//    }
//    console.log(a);
// }
// let a=0;
for (var a = 0; a <= 10; a++) {
    if (a++ == 3) {
        continue;
    }
    console.log(a);
}
