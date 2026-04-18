//let age = 45;
// console.log('older age value :',age);
// age = 60;
// console.log('Updated age value :',age);
// var age = 45;
// console.log('Older age value :',age);
// age = 60;
// console.log('Updated age value :',age);
// const age = 45;
// console.log('Older age value :',age);
// age = 60;
// console.log('Updated age value :',age);
// var age = 45;
if (true) {
    //   let age = 45;
    //   var age = 50;
    var age_1 = 45;
}
// console.log(age);
// =======================================
// DATA TYPE
// number data type
// let age = 56;
//let age = "Ten";
// let age :number = 10.5;
// let age: string = "56";
// let age:boolean = false;
// let age:undifined = 70; 
// STRING DATATYPE
var first_name = "Ram"; // Double quoted string
var middle_name = 'sarvesh'; // single quoted string
var last_name = "Maurya"; // templating string
console.log(first_name, middle_name, last_name);
var marital_status = false;
console.log('My marital status :', marital_status);
var salary;
salary = undefined;
console.log(salary); // the value of variable is not defined.
// let passport_number: null;
// passport_number: null;
//NON-PRIMITIVE DATA TYPEES
// ARRAY
var marks;
marks = [123, 456, 789, 1023];
console.log(marks[3]);
// OBJECT DATATYPE
var address;
address = {
    house_no: 35,
    street_no: 7,
    house_name: 'RSM Haveli'
};
var s1;
s1 = {
    roll: 112,
    name: 'John',
    college: 'JMI',
    branch: 'CSE',
    fee: 10000
};
console.log(s1);
console.log(s1.college);
// ENUM DATA TYPE
//-----------------------
var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["wed"] = 3] = "wed";
    Days[Days["thu"] = 4] = "thu";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["sat"] = 6] = "sat";
})(Days || (Days = {}));
;
var day;
day = Days.thu;
console.log(day);
var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["Feb"] = 1] = "Feb";
    Months[Months["Mar"] = 10] = "Mar";
    Months[Months["Apr"] = 11] = "Apr";
    Months[Months["May"] = 12] = "May";
})(Months || (Months = {}));
;
var m;
m = Months.Apr;
console.log(m); // Output: 11
var age;
age = 10;
console.log(age); // 10
age = 'ten';
console.log(age); // ten
var ms;
ms = 0;
console.log(ms);
ms = "married";
console.log(ms);
ms = true;
console.log(ms);
