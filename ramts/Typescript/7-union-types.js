// Simple type alias
function square(ai) {
    if (typeof ai === 'string') {
        ai = parseInt(ai);
    }
    return Math.pow(ai, 3);
}
console.log(square(5));
console.log(square('7'));
// type num = number | string;
// function square(n: num) {
//     if (typeof n==='string'){
//         n=parseInt(n);
//     }
//     return Math.pow(n,3);
// }
// console.log(square (3));
// console.log(square('6'));
