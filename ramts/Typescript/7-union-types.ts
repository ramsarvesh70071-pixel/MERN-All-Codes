
// Simple type alias

// type xyz = string ;
// function AI(aii:xyz){
//     console.log(aii);
// }
// AI('Artificial inteligence');



// Union type alias

type xz= number | string;
function square(ai:xz){
    if (typeof ai === 'string'){
        ai=parseInt(ai);
    }
    return Math.pow(ai,3);
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


