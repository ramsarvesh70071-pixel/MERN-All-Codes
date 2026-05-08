// function add (x:number,y:number) :number{
//    return x+y;
//    console.log(x+y);
// }
// console.log(add('sdd','hdd'));
// function add<T>(x:T,y:T){
//     if(typeof x=="number" && typeof y=="number"){
//     return x+y;
// }
// if(typeof x=="string" && typeof y=="string"){
//     return x+y;
// }
// }
// // let result=add<number>(100,20);
// let result=add<string>('Hello ','world');
// console.log(result);
// // console.log(add);
function add(x, y) {
    var sum;
    if (typeof x == "number" && typeof y == "number") {
        sum = x + y;
    }
    if (typeof x == "string" && typeof y == "string") {
        sum = x + y;
    }
    return sum;
}
var result = add(100, 20);
var result = add('Hello ', 'world');
console.log(result);
// console.log(add);
