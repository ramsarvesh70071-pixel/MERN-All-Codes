
// Functions 
// =====================================================


// FUNCTION DEFINITION

// function additions(){
//     let a, b,c; 

//     a = 10;
//     b = 20;
//     c = a+b;

//     console.log(c);
// }

// // FUNCTION CALL

// additions();

// --------------------------------------------------------------------------
// NON-PARAMETERIZED FUNCTION

// function cal_si(){
// let p,r,t,si;
// p = 1000;
// r = 1.5;
// t = 5;

// si = (p*r*t)/100;
// console.log(si);
// }
// cal_si();

// -------------------------------------------------------------------------
// PARAMETERIZED FUNCTION


// function cal_si(a,b,c) {
//     let p, r, t, si;
//     p = a;
//     r = b;
//     t = c;

//     si = (p * r * t) / 100;
//     console.log(si);
// }
// cal_si(1000,1.7,4);


// -----------------------------------------------------------------------
// RETURN VALUE

// function cal_si(a, b, c) {
//     let p, r, t, si;
//     p = a;
//     r = b;
//     t = c;

//     si = (p * r * t) / 100;

//     return si;
//     // console.log(si);
// }
// let result = (cal_si(1000, 1.7, 4));

// console.log(result);


// ------------------------------------------------------

// DEFAULT PARAMETER

// function cal_si(a, b, c = 5) {
//     let p, r, t, si;
//     p = a;
//     r = b;
//     t = c;

//     si = (p * r * t) / 100;

//     return si;
//     // console.log(si);
// }
// let result = (cal_si(1000, 1.7));

// console.log(result);

// ==============================================================

// LAMBDA

// const cal_si = () => {
//     let p, r, t, si;
//     p = 1000;
//     r = 1.5;
//     t = 5;

//     si = (p * r * t) / 100;
//     console.log(si);
// }
// cal_si();
    
const cal_si = (a, b, c = 5) => {
    let p, r, t, si;
    p = a;
    r = b;
    t = c;

    si = (p * r * t) / 100;

    return si;
    // console.log(si);
}
let result = (cal_si(1000, 1.7));

console.log(result);