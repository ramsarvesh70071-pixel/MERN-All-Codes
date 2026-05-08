
// //  Write a program to accept two integers and check whether they are equal or not.
// let a=3;
// let b=3;
// if(a==b){
//     console.log('a is equal to b');
// } 
// else{
//     console.log('a is not equal to b');
// }


// // 2. Write a program to check whether a given number is even or odd.

// let  a=22;
// if (a%2==0){
//     console.log("given number is even");
// }
// else{
//     console.log("given number is odd");
// }



// // 3. Write a program to check whether a given number is positive or negative.

// let  a=-22;
// if (a<0){
//     console.log("given number is negative");
// }
// else{
//     console.log("given number is positive");
// }
// // 4. Write a program to find whether a given year is a leap year or not.  

// let  a=2022;
// if (a%400==0 || a%100 == 0 || a%4 == 0){
//     console.log("given year is leap year");
// }
// else{
//     console.log("given year is not leap year");
// }


// // 5. Write a program to read the age of a candidate and determine whether he is eligible to cast his/her own vote.  
// let  a=12;
// if (a>18){
//     console.log("eligible to cast his/her own vote.");
// }
// else{
//     console.log("Not eligible to cast his/her own vote.");
// }


// // 6. Write a program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 
// 0 when m is 0 and -1 when m is less than 0. 

// let  m=0;
// let n:number;
// if (m>0){
//     n=1;
// }
// else if(m==0){
//     n=0;
// }
// else{
//     n=-1;
    
// }

// console.log(n);


// // 7. Write a program to accept the height of a person in centimeters and categorize the person according to their height.  
// let height=154;

// if (height>145 && height<180){    
//     if (height<=165){
//         console.log("Short categore, the person according to their height")
//     }
//     else if (height>165 && height<172){
//         console.log("Avaerage categore, the person according to their height")
//     }
//     else if (height>=172 &&  height<177){
//         console.log("Tall categore, the person according to their height")
//     }
//     else{
//         console.log("Very Tall categore, the person according to their height")

//     }
// }
// else{
//     console.log("Please enter possible Height!..")
// }


// // 8. Write a program to find the largest of three numbers. 

// let  a=20;
// let b=34;
// let c=102;
// if (a>b&&a>c){
//     console.log("A is laggest number :",a);
// }
// else if(b>a&&b>c){
//     console.log("B is laggest number :",b);
// }
// else{
//     console.log("c is largest number :",c);
// }


// // 9. Write a program to accept a coordinate point in an XY coordinate system and determine
//  in which quadrant the coordinate point lies. 

// let x=4;
// let y=-7;
// if (x>0 && y>0){
//     console.log("First coordinate");
// }
// else if(x>0 && y<0){
// console.log("Second coordinate");
// }
// else if(x<0 && y<0){
// console.log("Third coordinate");
// }
// else {
// console.log("Four coordinate");
// }


// 11. Write a program to calculate the root of a quadratic equation.  






// // 12. Write a program to read the roll no, name and marks of three subjects and calculate the total, percentage and division.  

// let info:[number,string];
// info=[102,"adharsh",]
// let marks=[30,76,93];
// let total=0;
// for (let i=0; i< marks.length;i++){
//     total+=marks[i];
// }

// var percentage=total/3;
// if (percentage>=75){
//     console.log(`${info[0]} ${info[1]},\ntotal marks :"${total}\nPercentage :${percentage}\nGrade :A`);
// }
// else if (percentage>=65 && percentage<75){
//     console.log(`${info[0]} ${info[1]},\ntotal marks :"${total}\nPercentage :${percentage}\nGrade :B`);
   
// }
// else if (percentage>=45 && percentage<65){
//     console.log(`${info[0]} ${info[1]},\ntotal marks :"${total}\nPercentage :${percentage}\nGrade :c`);
   
// }
// else if (percentage>=33 && percentage<45){
//     console.log(`${info[0]} ${info[1]},\ntotal marks :"${total}\nPercentage :${percentage}\nGrade :D`);
   
// }

// else{
//     console.log(`${info[0]} ${info[1]},\ntotal marks :"${total}\nPercentage :${percentage}\nFail`);
// }


// // 13. Write a program to read temperature in centigrade and display a suitable message 
// according to the temperature state below:  
// // Temp < 0 then Freezing weather  
// // Temp 0-10 then Very Cold weather 
// // Temp 10-20 then Cold weather 
// // Temp 20-30 then Normal in Temp  
// // Temp 30-40 then Its Hot  
// // Temp >=40 then Its Very Hot
// let temperature=44;
// if (temperature<0){
//     console.log("Freezing weather");
// }
// else if(temperature>0 && temperature<=10){
// console.log("Very Cold weather ");
// }
// else if(temperature>10 && temperature<=20){
// console.log(" Cold weather ");
// }
// else if(temperature>20 && temperature<=30){
// console.log("Normal in Temp  ");
// }
// else if(temperature>30 && temperature<=40){
// console.log("Its Hot");
// }

// else{
//     console.log("Its Very Hot");
// }






// SOLVE PROBLEM WITH THE HELP OF TERNARY OPERATOR
// //  Write a program to accept two integers and check whether they are equal or not.
// let a=2;
// let b=2;
// console.log(a==b?"The given numbers are equal":"The given numbers are not equal");

// // 2. Write a program to check whether a given number is even or odd.
// let a=32;
// console.log(a%2==0?'The given number is even':'the given number is odd');


// // 3. Write a program to check whether a given number is positive or negative.
// let a=-4;
// console.log(a>=0?'the given number is positive':'the given number is negative');



// // 4. Write a program to find whether a given year is a leap year or not.  
// let a=1900;
// console.log((a%4==0 && a%100!==0) || (a%400==0) ?'Given year is leap year':'Given number is not a leap year');



// // 5. Write a program to read the age of a candidate and determine whether he is eligible to cast his/her own vote.  
// let a=33;
// console.log(a>18?'You are eligible for vote':'You are not eligible for vote');




// // 6. Write a program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 
// 0 when m is 0 and -1 when m is less than 0. 

// let m=0;
// let n;
// console.log(m>=0?(m==0?n=0:n=1):n=-1);


// // 7. Write a program to accept the height of a person in centimeters and categorize the person according to their height.  
// let height=183;
// console.log(height>=140 && height<180 
//        ? height<160
//        ?'Short categore, the person according to their height' 
//        : height<172 
//        ?'Avaerage categore, the person according to their height'
//        : height<177 
//        ? 'Tall categore, the person according to their height'
//        : 'Very Tall categore, the person according to their height'
//     :'please insert posible height ' );



// // 8. Write a program to find the largest of three numbers. 
// let a=3;
// let b=4;
// let c=5;
// console.log(a>b && a>c
//     ?'The given value of a is larger'
//     : b>c && b>a
//     ? 'The given value of b is larger'
//     : 'The given value of c is larger');



// // 9. Write a program to accept a coordinate point in an XY coordinate system and determine
//  in which quadrant the coordinate point lies. 
// let x=3;
// let y=-3;
// console.log(  
//   x > 0 && y > 0 ? "First coordinate" :
//   x < 0 && y > 0 ? "Second coordinate" :
//   x < 0 && y < 0 ? "Third coordinate" :
//   x > 0 && y < 0 ? "Fourth coordinate" :
//   "Point is on axis"
// )




// // 12. Write a program to read the roll no, name and marks of three subjects and calculate the total, percentage and division.

//   interface student{
//    roll:number,
//    name:string,
// }
// let m:student;
//  m={
//    roll:12,
//    name:"aditya",
// }
// console.log(m);
// let info:[number,string];
// info=[123,'aditya'];
// console.log(info);
// let total=0
// let marks=[12,17,11];
// for(let i=0;i<marks.length;i++)
//     total+=marks[i];
// console.log(total);

// let percentage=0;
// percentage=total/marks.length;
// console.log(percentage);
// console.log(
//     percentage>=70? "The student is passed with Grade A":
//     percentage>==50 && percentage<70? "The student is passed with Grade B":
//     percentage>=35 && percentage<50? "The student is passed with Grade C":
//     "Failed"
// );



// // 13. Write a program to read temperature in centigrade and display a suitable message 
// according to the temperature state below:  
// // Temp < 0 then Freezing weather  
// // Temp 0-10 then Very Cold weather 
// // Temp 10-20 then Cold weather 
// // Temp 20-30 then Normal in Temp  
// // Temp 30-40 then Its Hot  
// // Temp >=40 then Its Very Hot

// let temp=4;
// console.log(
//     temp<0 ? "Freezing weather":
//     temp>0 && temp<=10 ? "Very Cold weather":
//     temp>10 && temp<=20 ? "Cold weather":
//     temp>20 && temp<=30 ? "Normal tempreture":
//     temp>30 && temp<=40 ? "Its Hot tempreture":
//     "Its very hot tempreture"
// );








// ITERATION CONTROL EXERSIZE

// 1 Write a program  to display the 5 terms of a harmonic series and their sum. 
//  1 + 1/2 + 1/3 + 1/4 + 1/5  terms 

// var i=1;
// let str:string="";
// var sum=0;
// for(i=1;i<=5;i++){
//     if (i==1){
//         str+=`${i}`;
//     }
//     str+=` + 1/${i}`;
    
//     sum+=1/i;
// }
// console.log(str)
// console.log("Sum of all series : ",sum)


// Problem : Write a program that displays the 5 terms of square natural numbers 
// and their sum. 
// 1 4 9 16 ... 5 Terms 
// let i=1;
// let sum=0;
// for(i=1;i<=5;i++){
//     console.log(i*i);
//     sum+=i*i;
// }
// console.log(sum);



// Problem : Write a program to check whether a given number is a 'Perfect' 
// number or not.
// let a=24;
// let sum=0;
// for(let i=1;i<a;i++)
// {if(a%i==0){
//     sum+=i;
// }

// }
// if(sum==a){
//     console.log('The given number is a perfect number')
// }
// else {
//         console.log('The given number is not a perfect number');
//     }


// Problem : Write a program to find the number and sum of all integers between 
// 100 and 200 which are divisible by 9.  

// let i=100;
// for(let i=100;i<=200;i++){
//     if(i%9==0){
//         console.log(i)
//     }
// }


// Problem : Write a program in ts to display a given number in reverse order. 
// let a=2345;
// let temp:number=1;
// let reverse:number=0
// for(let i=a;i>0;){
//     let digit = i % 10;
//     reverse = reverse * 10 + digit;
//     i= Math.floor(i / 10);
// }
// console.log(reverse)


// Write a  program to check whether a number is a palindrome or not.  

// let a=121;
// let temp:number=1;
// let reverse:number=0
// for(let i=a;i>0;){
//     let digit = i % 10;
//     reverse = reverse * 10 + digit;
//     i= Math.floor(i / 10);
// }
// if (a==reverse){
//     console.log("given number is palindrome : ",reverse)
// }
// else{
//     console.log("given number is not palindrome : ",reverse)
// }


// Problem : Write a C program to find the HCF (Highest Common Factor) of two numbers.  

// let num1 = 24; 
// let num2 = 28;
// let hcf =0;
// let tem=0;

// while(true){
//     if (num2%num1==0){
//         hcf=num1;
        
//         break;
//     }
//     else{
//         tem=num2;
//         num2=num1;
//         num1=tem%num1;
        
//     }
    

// }
// console.log("HCF = ",hcf);


// let num1=1221;
// let num=num1;
// let rev=0;
// let sum=0;
// let digi ="";
// while(num>0){
    
//     rev=(rev*10)+(num%10);
//     sum+=num%10;
//     digi+=` ${num%10}`;
//     // console.log(num%10);
//     num=(num-(num%10))/10;
    
// }
// console.log("actual  number : ",num1)
// console.log("single digit : ",digi);
// console.log("reversed number : ",rev);
// console.log("sum of all digit : ",sum);
// if (num1==rev){
//     console.log("Number is Palindrome")
// }
// else {
//     console.log("Number is not Palindrome");
    
// }