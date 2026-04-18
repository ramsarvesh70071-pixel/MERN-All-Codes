// class A{
//     a:string;
//     constructor(a:string){
//         this.a = a;

//     }

//     showA(){
//         console.log(this.a);
        
//     }
// }

// class B extends A{
//                                                     //Single
//     b:string;

//     constructor(a:string,b:string){
//         super(a);
//         this.b = b;

//     }

//     showB(){
//         console.log(this.b);
        
//     }
// }

// let objB = new B("A","B");
// objB.showA();
// objB.showB();


// ========================================================================


// class A{
//     a:string;
//     constructor(a:string){
//         this.a = a;

//     }

//     showA(){
//         console.log(this.a);
        
//     }
// }
                                                        // Multilevel
// class B extends A{

//     b:string;

//     constructor(a:string,b:string){
//         super(a);
//         this.b = b;

//     }

//     showB(){
//         console.log(this.b);
        
//     }
// }

// class C extends B{

//     c:string;
//     constructor(a:string,b:string,c:string){
//         super(a ,b);
//         this.c = c;

//     }

//     showC(){
//         console.log(this.c);
        
//     }
// }

// let objC = new C("A",'B',"C");

// objC.showA();
// objC.showB();
// objC.showC();

// ===============================================================



// class A{
//     a:string;
//     constructor(a:string){
//         this.a = a;

//     }

//     showA(){
//         console.log(this.a);
        
//     }
// }

// class B extends A{

//     b:string;

//     constructor(a:string,b:string){
//         super(a);
//         this.b = b;

//     }

//     showB(){
//         console.log(this.b);
        
//     }                                                      // Hierarical
// }

// class C extends A{

//     c:string;
//     constructor(a:string,c:string){
//         super(a);
//         this.c = c;

//     }

//     showC(){
//         console.log(this.c);
        
//     }
// }

// let objB = new B("A","B");
// objB.showA();
// objB.showB();

// let objC = new C("A","C");
// objC.showA();
// objC.showC();

// ============================================================================




// class A{
//     a:string;
//     constructor(a:string){
//         this.a = a;

//     }

//     showA(){
//         console.log(this.a);
        
//     }
// }
                                                        
// class B extends A{

//     b:string;

//     constructor(a:string,b:string){
//         super(a);
//         this.b = b;

//     }

//     showB(){
//         console.log(this.b);
        
//     }
// }

// class C extends B{

//     c:string;
//     constructor(a:string,b:string,c:string){
//         super(a ,b);
//         this.c = c;

//     }

//     showC(){
//         console.log(this.c);
        
//     }                                                       //Hibrid
// }

// class D extends B{

//     d:string;
//     constructor(a:string,b:string,d:string){
//         super(a,b);
//         this.d = d;
//     }

//     showD(){
//         console.log(this.d);
        
//     }
// }

// let objC = new C("A","B","C");
// objC.showA();
// objC.showB();
// objC.showC();

// let objD = new D("A","B","C");
// objD.showA();
// objD.showB(); 