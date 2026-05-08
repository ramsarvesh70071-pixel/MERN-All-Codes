// // CONDITIONAL CONTROL STATEMENT 
// let age = 19;
// if(age <= 18){
//     console.log("Child");
// }
// let age = 13;
// if(age <= 15){
//     if(age >8 && age<=15){
//     console.log("Teenager");
//     }
//  else{
//     console.log("Playway");
//  }
// }
// else if(age >15 && age<=35){
//     console.log("Young");
// }
// else{
//     console.log("Old");
// }
// ITERATION CONTROL STATEMENTS
// ---------------------------------------------------
// let i;
// for(i=1; i<=100; i++){
//     console.log("Welcome");
// }
// for(i=1; i<=100; i++){
//     console.log(`Iteration no. : ${i}`);
// }
// for(i=1; i<=100; i++){
//     console.log(i);
// }
// for(i =1; i<=10; i++){
//     // 2x1 = 2
//     // console.log("2x" +i+"="+2*i);
//     console.log(`2X${i}=${2*i}`);
// }
// for(i =10; i>=1; i--){
//     // 2x1 = 2
//     // console.log("2x" +i+"="+2*i);
//     console.log(`2X${i}=${2*i}`);
// }
// WHILE LOOP
// ----------------------------------------------
// let i = 1;
// while(i<10){
//     console.log(`2X${i} = ${2*i}`);
//     i++;
// }
// // DO-WHILE LOOP
// // ------------------------------------
// let i = 1;
// do{
//     console.log(`2X${i} = ${2*i}`);
//     i++;
// }while(i<=10);
// CONTINUE AND BREAK STATEMENT
// let i =0;
// while(i<=5){
//     if(i++== 3){
//         continue;
//     }
//     console.log(i);
// }
var i = 0;
while (i <= 5) {
    if (i++ == 3) {
        break;
    }
    console.log(i);
}
