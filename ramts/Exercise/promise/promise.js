// const delay = seconds =>{
//     return new Promise(resolve =>{
//         setTimeout(resolve,seconds *1000)
//     });
// };
// console.log("Zero seconds");
// delay(1).then(()=>console.log("One second"));
// delay(3).then(()=>console.log("three second"));
// =========================================
// const delay = seconds =>{
//     return new Promise(resolve =>{
//         setTimeout(
//             ()=>resolve(`${seconds} seconds delay is up` ),
//             seconds *1000
//         )
//     });
// };
// console.log("Zero seconds");
// delay(1).then((msg)=>console.log(msg));
// delay(3).then((msg)=>console.log(msg));
// console.log(delay(1));
// ============================================
// const delay = seconds =>{
//     return new Promise(resolve =>{
//         setTimeout(
//             ()=>resolve(`${seconds} seconds delay is up` ),
//             seconds *1000
//         )
//     });
// };
// console.log("Zero seconds");
// delay(1).then(msg=>`Total ${msg}`)
//         .then(msg=>`${msg} !!!!!`)
//         .then(msg=>console.log(msg));
// ==============================================
const delay = seconds => {
    return new Promise((resolve, reject) => {
        if (typeof seconds !== 'number') {
            reject(new Error('Argument seconds must be number!'));
        }
        setTimeout(() => resolve(`${seconds} seconds delay is up`), seconds * 1000);
    });
};
console.log("Zero seconds");
delay("One").then(msg => console.log(msg));
