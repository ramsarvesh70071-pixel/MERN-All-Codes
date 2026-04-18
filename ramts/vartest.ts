//NON-PRIMITIVE DATA TYPEES

// ARRAY

let marks: number[];

marks = [123,456,789,1023];
console.log(marks[3]);

// OBJECT DATATYPE

let address: object;
address = {
    house_no:35,
    street_no:7,
    house_name:'RSM Haveli'
};



//Tupple DATA TYPE
// --------------------------

/*
name - string,
ms - boolean,
salary - number
*/

// let person :[string,boolean,number];

// person = ['Ramsarvesh', true, 900000000];

// person = [true, 'Ramsarvesh', 900000000];

 


// Interface DATA TYPE


interface Student {
    roll: number,
    name: string,
    college: string,
    branch: string,
    fee: number
}

let s1: Student;

s1 = {
    roll: 112,
    name: 'John',
    college: 'JMI',
    branch: 'CSE',
    fee: 10000
}

console.log(s1);

console.log(s1.college);



// ENUM DATA TYPE
//-----------------------

enum Days { sun, mon, tue, wed, thu, fri, sat };

let day: Days;

day = Days.thu;

console.log(day);


enum Months { Jan, Feb, Mar = 10, Apr, May };

let m: Months;

m = Months.Apr;

console.log(m); // Output: 11


let age: number | string;

age = 10;
console.log(age); // 10

age = 'ten';
console.log(age); // ten


// Union Datatype
// ===============================

let ms: number | string | boolean;

ms = 0;
console.log(ms);

ms = "married";
console.log(ms);

ms = true;
console.log(ms);

// Function Datatype
// ==================

function calArea() {
    let radius = 2;

    let area = 3.14 * radius * radius;

    return area;
}


//             OR


//             console.log(calArea());


// function calArea(radius: number): number {
//     return 3.14 * radius * radius;
// }

// console.log(calArea(5)); // Ab aap koi bhi value pass kar sakte hain



// let a;

// a = 10;
// console.log(a);
// a = 'ten';
// console.log(a);
// a = true;
// console.log(a);
// a = [10,20,30]
// console.log(a);


let a = 10;//  Datatype inference rule

a = 20.0;
// a = 'ten';




// TURNARY OPERATOR
// ================================



// let age = 10;
// age <= 10 ? console.log("Child") : console.log("Adult");


// let msg = age <=18 ? "Child" : "Adult";
// console.log(msg);



let age = 11;
age <= 18 ?(age <=5 ? console.log("Playway") :  console.log("Child")) : console.log("Adult");




