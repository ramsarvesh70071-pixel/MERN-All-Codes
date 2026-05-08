// class A {
//     showA() {
//         console.log(" A ");
//     }
// }

// class B extends A {
//     showB() {
//         console.log(" B ");
//     }                                                  // Single Inheritance
// }

// let objA = new A();
// objA.showA(); 

// let objB = new B();
// objB.showA();
// objB.showB();

// ======================================================





// class A {
//     showA() {
//         console.log(" A ");
//     }
// }

// class B extends A {
//     showB() {
//         console.log(" B ");
//     }
// }

// class C extends A{
// ShowC(){
//     console.log("C");
//     }                                            // Multiple Inheritance
// }


// let objA = new A();
// objA.showA();

// let objB = new B();
// objB.showA();
// objB.showB();

// let objC = new C();
// objC.showA();
// objC.ShowC();

// // ==================================================================




// class A {
//     showA() {
//         console.log(" A ");
//     }
// }

// class B extends A {
//     showB() {
//         console.log(" B ");
//     }
// }
                                                        
// class C extends B {

//     ShowC() {                                 // Multilevel Inheritance
//         console.log("C");
//     }
// }


// let objA = new A();
// objA.showA();

// let objB = new B();
// objB.showA();
// objB.showB();

// let objC = new C();
// objC.showA();
// objC.showB();
// objC.ShowC();

// =================================================================================================================


class A {
    showA() {
        console.log(" A ");
    }
}

class B extends A {
    showB() {
        console.log(" B ");
    }
}

class D extends B {

    ShowD() {                                 
        console.log("D");
    }
}

class C extends A {

    ShowC() {                                 //  Hybrid Inheritance
        console.log("C");
    }
}


let objA = new A();
objA.showA();

let objB = new B();
objB.showA();
objB.showB();

let objC = new C();                                     
objC.showA();
objC.ShowC();

let objD = new D();
objD.showA();
objD.showB();
objD.ShowD();


// ======================================================================================




// class A {
//     showA() {
//         console.log(" A ");
//     }
// }

// class B extends A {
//     showB() {
//         console.log(" B ");
//     }
// }


// class C extends A {

//     ShowC() {                                 
//         console.log("C");
//     }
// }


// let objA = new A();
// objA.showA();

// let objB = new B();
// objB.showA();
// objB.showB();