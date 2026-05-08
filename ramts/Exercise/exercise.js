/*1. Write a program to accept two integers and check whether they are equal or
not.*/
var a = 10;
var b = 20;
if (a == b) {
    console.log("Both number are equal");
}
else {
    console.log("Both numbers are not equal");
}
// =========================================================
// 2. Write a program to check whether a given number is even or odd.
var c = 15;
if (c % 2 == 0) {
    console.log("Given no. is even!");
}
else {
    console.log("Given number is odd!");
}
// ==========================================================
// 4. Write a program to find whether a given year is a leap year or not.
var year = 2006;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Year is leap year!");
}
else {
    console.log("Year is not leap year");
}
// =====================================================
/*5. Write a program to read the age of a candidate and determine whether he is
eligible to cast his / her own vote.*/
var age = 18;
// if(age>=18){
//     console.log("You are eligible to vote!");
// }
// else{
//     console.log("You are not eligible to vote!");   
// }
age >= 18 ? console.log("You are eligible to vote!") : console.log("You are not eligible to vote!");
// =======================================================
/* 6. Write a program to read the value of an integer m and display the value of n is
1 when m is larger than 0, 0 when m is 0 and - 1 when m is less than 0.*/
var m = 0;
var n;
if (m > 0) {
    n = 1;
    console.log(n);
}
else if (m == 0) {
    n = 0;
    console.log(n);
}
else {
    n = -1;
    console.log(n);
}
// ========================================================
/* 7. Write a program to accept the height of a person in centimeters and categorize
the person according to their height.*/
var height = 150;
if (height <= 150) {
    console.log("Dwarf");
}
else if (height > 150 && height <= 165) {
    console.log("Average");
}
else if (height > 165 && height <= 195) {
    console.log("Tall");
}
else {
    console.log("Very Tall (Abnormal Height)");
}
