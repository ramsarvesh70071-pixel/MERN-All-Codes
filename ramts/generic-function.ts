// function add(x,y){
//     console.log(x + y);
    
// }
// add(10,20);


// function with return

// function add(x, y) {

//     return x+y;
//     // console.log(x + y);

// }
// console.log(add(10, 20));

// =========================================

// function add(x:number, y:number) : number {

//     return x + y;
//     // console.log(x + y);

// }
// console.log(add(10, 20));

// ================================================

// function add(x: string, y: string): number {

//     return x + y;
//     // console.log(x + y);

// }
// console.log(add('Hello', 'World'));


// ======================================================



// Generic Function


function add<T>(x: T, y: T){

    if(typeof x == 'number' && typeof y == 'number'){
        return x + y;
    }

    if (typeof x == 'string' && typeof y == 'string') {
        return x + y;
    }
    
}

// let result = add<number>(10,30);

let result = add<string>('Hello', 'World');


console.log(result);

