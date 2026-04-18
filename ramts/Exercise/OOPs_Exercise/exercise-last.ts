// /**Q-Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created. */


// // class BUS {
// //     make : string ;
// //     model : string ;
// //     year : number ;

// //     constructor ( make : string , model : string , year : number ) {
// //         this.make = make ;
// //         this.model = model ;
// //         this.year = year ;
// //     }
// // }

// // let myobj = new BUS ( "mercedes-Benz" , "Rsm" , 2026 ) ;
// // console.log ( "Make : " , myobj.make ) ;
// // console.log ( ` model : ${myobj.model} \n year : ${myobj.year} ` ) ;

//                         //OR



//     // class BUS {
//     //     constructor ( make : string , model : string , year : number ) {
//     //         this.make = make ;
//     //         this.model = model ;
//     //         this.year = year ;
//     //     }
//     // }

//     // let myobj = new BUS ( "mercedes-Benz" , "Rsm" , 2026 ) ;

//     // console.log ( ` make : ${myobj.make} \n model : ${myobj.model} \n year : ${myobj.year} ` ) ;                        



//     // sIR CODE



//     // class Bus {
//     //   // Properties
//     //   make: string;
//     //   model: string;
//     //   year: number;

//     //   // Constructor
//     //   constructor(make: string, model: string, year: number) {
//     //     this.make = make;
//     //     this.model = model;
//     //     this.year = year;
//     //   }
//     // }

//     // // Create a Bus object
//     // const myBus = new Bus("Volvo", "9400 B11R", 2019);

//     // // Access and print the properties
//     // console.log("Make:", myBus.make);  // Output: Make: Volvo
//     // console.log("Model:", myBus.model); // Output: Model: 9400 B11Rr
//     // console.log("Year:", myBus.year);


// // ========================================================================


// /**Q-Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting. */



// // class Bus {
// //         // Properties
// //         make: string;
// //         model: string;
// //         year: number;

// //         // Constructor
// //         constructor(make: string, model: string, year: number) {
// //           this.make = make;
// //           this.model = model;
// //           this.year = year;
// //         }

// //         // Method to start the car
// //      start() {
// //          console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
// //   }
// //       }

// //       // Create a Bus object
// //       const myBus = new Bus("Volvo", "9400 B11R", 2019);

// //       // Access and print the properties
// //       console.log("Make:", myBus.make);  // Output: Make: Volvo
// //       console.log("Model:", myBus.model); // Output: Model: 9400 B11Rr
// //       console.log("Year:", myBus.year); 
// //       myBus.start()                   
// //     // =======================================================




// /**Q-Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. Add a property to represent whether the SUV is suitable for off-road driving. Implement a method that toggles off-road capability and prints a message accordingly. */



// // Define a base class 'Car'
// // class Car {
// //   // Properties
// //   make: string;
// //   model: string;
// //   year: number;

// //   // Constructor
// //   constructor(make: string, model: string, year: number) {
// //     this.make = make;
// //     this.model = model;
// //     this.year = year;
// //   }

// //   // Method to start the car
// //   start() {
// //     console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
// //   }
// // }

// // // Define a derived class 'SUV' that extends 'Car'
// // class SUV extends Car {
// //   // Property to represent off-road capability
// //   offRoadCapable: boolean;

// //   // Constructor for SUV
// //   constructor(make: string, model: string, year: number, offRoadCapable: boolean) {
// //     // Call the base class constructor
// //     super(make, model, year);

// //     // Initialize the off-road capability property
// //     this.offRoadCapable = offRoadCapable;
// //   }

// //   // Method to toggle off-road capability and print a message
// //   toggleOffRoadMode() {
// //     if (this.offRoadCapable) {
// //       console.log(`The ${this.make} ${this.model} is now in off-road mode.`);
// //     } else {
// //       console.log(`The ${this.make} ${this.model} is not suitable for off-road driving.`);
// //     }
// //   }
// // }

// // // Create an SUV object
// // const mySUV = new SUV("Toyota", "Fortuner", 2023, true);

// // // Call the start method to start the SUV
// // mySUV.start();

// // // Toggle the off-road mode
// // mySUV.toggleOffRoadMode();

// // ===============================================================================




// /**Q-Write a TypeScript class that defines a base class Car with properties like make, model, and year, along with a start() method that prints a starting message. Now create a class called Engine with the properties horsepower and fuelType. Modify the Car class to include an instance of the Engine class as a property. Implement a method printCarDetails() in the Car class that prints both car and engine details. */




// // // Define a class 'Engine'
// // class Engine {
// //   // Properties
// //   horsepower: number;
// //   fuelType: string;

// //   // Constructor for Engine
// //   constructor(horsepower: number, fuelType: string) {
// //     this.horsepower = horsepower;
// //     this.fuelType = fuelType;
// //   }
// // }

// // // Modify the 'Car' class to include an 'Engine' instance
// // class Car {
// //   // Properties
// //   make: string;
// //   model: string;
// //   year: number;
// //   engine: Engine; // Include an 'Engine' instance as a property

// //   // Constructor for Car
// //   constructor(make: string, model: string, year: number, engine: Engine) {
// //     this.make = make;
// //     this.model = model;
// //     this.year = year;
// //     this.engine = engine; // Initialize the 'engine' property with an 'Engine' instance
// //   }

// //   // Method to start the car
// //   start() {
// //     console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
// //   }

// //   // Method to print car and engine details
// //   printCarDetails() {
// //     console.log(`Car Details:`);
// //     console.log(`Make: ${this.make}`);
// //     console.log(`Model: ${this.model}`);
// //     console.log(`Year: ${this.year}`);
// //     console.log(`Engine Details:`);
// //     console.log(`Horsepower: ${this.engine.horsepower}`);
// //     console.log(`Fuel Type: ${this.engine.fuelType}`);
// //   }
// // }

// // // Create an 'Engine' object
// // const myEngine = new Engine(200, "Gasoline");

// // // Create a 'Car' object with the 'Engine' instance
// // const myCar = new Car("Audi", "A3", 2023, myEngine);

// // // Call the start method to start the car
// // myCar.start();

// // // Print car and engine details
// // myCar.printCarDetails();

// // ======================================================================



// /**5. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these properties when a Student object is created. */


// // class Student{
// //   name:string;
// //   roll: number;

// //   constructor(name:string,roll:number){
// //     this.name = name;
// //     this.roll = roll;
// //   }
// // }

// // let stu = new Student("Ramsarvesh Maurya",123456);

// // console.log("Name is : ",stu.name);

// // console.log("Roll Number : ",stu.roll);

// // ======================================================================


// /**6. Write a TypeScript program that creates a class called Student with properties name and roll number. Add constructor overloading to support multiple ways of initializing a Student object. Implement one constructor that takes both name and roll number as parameters and another constructor that takes only name, assuming the roll number is unknown. */




// // class Student {
// //   // Properties
// //   name: string;
// //   rollNumber: number | undefined;

// //   // Constructor with both name and roll number
// //   constructor(name: string, rollNumber: number) {
// //     this.name = name;
// //     this.rollNumber = rollNumber;
// //   }

// //   // Constructor with only name (roll number is optional)
// //   constructor(name: string) {
// //     this.name = name;
// //   }
// // }

// // // Create Student objects using different constructors
// // const studentWithRollNumber = new Student("Mateo Ishita", 11);
// // const studentWithoutRollNumber = new Student("Dvsch Gbpjiij");

// // // Access and print the properties
// // console.log("Student with Roll Number:");
// // console.log("Name:", studentWithRollNumber.name);
// // console.log("Roll Number:", studentWithRollNumber.rollNumber);

// // console.log("\nStudent without Roll Number:");
// // console.log("Name:", studentWithoutRollNumber.name);
// // console.log("Roll Number:", studentWithoutRollNumber.rollNumber); // This

// // =======================================================================



// /**7. Write a TypeScript class called Shape with properties like color. Implement a constructor that initializes the color property when a Shape object is created. Then, create a derived class Circle that extends Shape. Implement a constructor for the Circle class that takes color and radius as parameters and initializes them along with the color property of the base class. */



// // class Shape {
// //   // Property
// //   color: string;

// //   // Constructor for Shape
// //   constructor(color: string) {
// //     this.color = color;
// //   }
// // }

// // // Derived class 'Circle' extends 'Shape'
// // class Circle extends Shape {
// //   // Additional property for Circle
// //   radius: number;

// //   // Constructor for Circle
// //   constructor(color: string, radius: number) {
// //     // Call the constructor of the base class 'Shape'
// //     super(color);

// //     // Initialize the 'radius' property
// //     this.radius = radius;
// //   }
// // }

// // // Create a Circle object
// // const myCircle = new Circle("Black", 7);

// // // Access and print the properties
// // console.log("Color:", myCircle.color); // Output: Color: Black
// // console.log("Radius:", myCircle.radius); // Output: Radius: 7

// // =================================================================



// /**8. Write a TypeScript class called Student with properties name and age. Implement a constructor that initializes these properties when a Student object is created. Additionally, add validation to ensure that the age provided is a positive number. If the age is not positive, set it to a default value of 0. */



// // class Student {
// //   // Properties
// //   name: string;
// //   age: number;

// //   // Constructor with validation
// //   constructor(name: string, age: number) {
// //     this.name = name;

// //     // Validate and set the age property
// //     if (age > 0) {
// //       this.age = age;
// //     } else {
// //       // Default to 0 if age is not positive
// //       this.age = 0;
// //     }
// //   }
// // }

// // // Create Student objects with different ages
// // const student1 = new Student("Erland Clive", 22); // Age is positive
// // const student2 = new Student("Bastet Aneta", -7); // Age is not positive

// // // Access and print the properties
// // console.log("Student 1 - Name:", student1.name, "Age:", student1.age); 
// // // Output: Student 1 - Name: Erland Clive Age: 22

// // console.log("Student 2 - Name:", student2.name, "Age:", student2.age); 
// // // Output: Student 2 - Name: Bastet Aneta Age: 0 (default)

// // ===================================================================



// /**9. Write a TypeScript class called Animal with properties name and species. Implement a constructor that initializes these properties when an Animal object is created. Next, create a derived class Tiger that extends Animal. Add a method roar() to the Tiger class that prints a message indicating that the tiger is roaring. */



// // Define the base class 'Animal'
// // class Animal {
// //   // Properties
// //   name: string;
// //   species: string;

// //   // Constructor for Animal
// //   constructor(name: string, species: string) {
// //     this.name = name;
// //     this.species = species;
// //   }
// // }

// // // Define the derived class 'Tiger' extending 'Animal'
// // class Tiger extends Animal {

// //   constructor(name:string,species :string){
// //       super(name,species);
// //   }
// //   // Method to roar
// //   roar() {
// //     console.log(`The tiger named ${this.name} is roaring.`);
// //   }
// // }

// // // Create a Tiger object
// // const myTiger = new Tiger("Saber", "Bengal Tiger");

// // // Access and call the roar method
// // myTiger.roar(); 
// // // Output: The tiger named Saber is roaring.

// // ======================================================================================================



// /**10. Write a TypeScript class called Person with properties name and age. Implement a constructor that initializes these properties when a Person object is created. Then, create a derived class Employee that extends Person. Override the constructor of the Employee class to include an additional property employeeId. */



// // class Person{
// //     name : string;
// //     age : string; 

// //  constructor(name:string,age:string){
// //     this.name = name;
// //     this.age = age;
// //  }
// // }

// // class Employee extends Person{
// //     EmployeeId : string;

// //     constructor(name:string,age:string,EmployeeId:string){
// //         super(name,age);
// //         this.EmployeeId = EmployeeId;
// //     }

// //     getEmployeeDetails(){
// //         console.log("Name is : ",this.name);
// //         console.log("Age is : ",this.age);
// //         console.log("Employee-Id is : ",this.EmployeeId);
// //      }

// // }

// // const person = new Employee("Ramsarvesh Maurya","20 year","1234RSM");

// // person.getEmployeeDetails();


// // ===========================================================


// /**11. Write a TypeScript program that creates a class called Shape with properties color and a method draw(). This program prints a message indicating that the shape is being drawn. Then, create a derived class Circle that extends Shape. Override the draw() method in the Circle class to provide a specific implementation for drawing a circle. */


// // class Shape{
// //     color:string;

// //     constructor(color:string){
// //         this.color = color;
// //     }
// //     draw(){
// //         console.log(`The shape is beang drawn... with color : ${this.color}`);

// //     }
// // }

// // class circle extends Shape{
// //     constructor(color:string){
// //         super(color);
// //     }

// //     draw(){
// //         console.log(`Drawing a circle `);

// //     }
// // }

// // let shap= new circle("Red");
// // shap.draw();

// // ========================================================================================


// /**12. Write a TypeScript program that defines a class called Vehicle with properties make and model. Implement a constructor that initializes these properties when a Vehicle object is created. Then, create a derived class Car that extends Vehicle. Finally, create a derived class SportsCar that extends Car. Ensure that properties are inherited correctly and each class has its own constructor. */


// // class Vehicle{
// //  make:string;
// //  model:string;

// //  constructor(make:string,model:string){
// //     this.make  = make;
// //     this.model = model;
// //  }

// //  getData(){
// //     console.log("Make is : ",this.make);
// //     console.log("Make is : ",this.model);
// //  }
// // }

// // class Car extends Vehicle{
// //     constructor(make:string,model:string){
// //         super(make,model);
// //     }
// // }

// // class SportsCar extends Car{
// //     constructor(make:string,model:string){
// //         super(make,model);
// //     }
// // }

// // let spt = new SportsCar("Mercedes-Benz","Fortuner");
// // spt.getData();

// // // ===============================================================================


// // /**13. Write a TypeScript program that creates an abstract class called Shape with properties like color and an abstract method getPerimeter(). Implement derived classes for specific shapes (e.g., Circle, Rectangle) that extend Shape and provide concrete implementations for calculating their perimeters. */



// // abstract class Shape{
// //     color:string;

// //     constructor(color:string){
// //         this.color = color;
// //     }

// //     abstract getPerimeter():number;
// // }

// // class Circle extends Shape{
// //     radius:number;
// //     constructor(color:string,radius:number){
// //         super(color);
// //         this.radius = radius;
// //     }

// //     getColor(){
// //         console.log("Color of circle is : ",this.color);

// //     }

// //     getPerimeter(){
// //         let result:number;
// //         result = 2 * 3.14 * this.radius;

// //         return result;

// //     }
// // }

// // class Rectangle extends Shape{

// //     length:number;
// //     width:number;

// //     constructor(color:string,length:number,width:number){
// //         super(color);
// //         this.length = length;
// //         this.width = width;
// //     }

// //     getColor(){
// //         console.log("Color of rectangle is : ",this.color);
// //     }

// //     getPerimeter(){
// //         let result:number;
// //         result = 2+(this.length * this.width);

// //         return result;
// //     }
// // }

// // let circle = new Circle("Red",12);
// // console.log("Parameter of Circle : ",circle.getPerimeter());
// // circle.getColor();

// // let rectangle = new Rectangle("Blue",10,5);
// // console.log("Parameter of Circle : ",rectangle.getPerimeter());
// // rectangle.getColor();

// // ==========================================================================================


// /**14. Write a TypeScript exercise that defines an abstract class called Animal with properties like name and an abstract method makeSound(). Create derived classes (e.g., Tiger, Lion) that extend Animal and implement the makeSound() method with the unique sound each animal makes. */


// // abstract class Animal{
// //     name:string;

// //     constructor(name:string){
// //         this.name = name;
// //     }

// //     abstract makeSound():void;
// // }

// // class Lion extends Animal{

// //     constructor(name:string){
// //         super(name);
// //     }

// //     makeSound(): void {
// //         console.log(`${this.name} is Roaring...`);
// //     }
// // }

// // class Dog extends Animal{

// //     constructor(name:string){
// //         super(name);
// //     }

// //     makeSound(): void {
// //         console.log(`${this.name} is Barking...`);
// //     }
// // }

// // let myLion = new Lion("Sher Khan");
// // myLion.makeSound();

// // let myDog = new Dog("Moti");
// // myDog.makeSound();

// // ======================================================


// // abstract class Animal {
// //     name: string;

// //     constructor(name: string) {
// //       this.name = name;
// //     }

// //     abstract makeSound(): void;
// //   }


// //   class Dog extends Animal {

// //     makeSound() {
// //       console.log(`${this.name} says: Bhau! Bhau!`);
// //     }
// //   }

// //   class Cat extends Animal {
// //     makeSound() {
// //       console.log(`${this.name} says: Meow! Meow!`);
// //     }
// //   }

// //   const dog = new Dog("Tommy");
// //   const cat = new Cat("Mini");

// //   dog.makeSound();   
// //   cat.makeSound();

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``


// // abstract class Animal{
// //     name:string;

// //     constructor(name:string){
// //         this.name = name;
// //     }

// //     abstract makeSound(sound:string):void;
// // }

// // class Lion extends Animal{

// //     constructor(name:string){
// //         super(name);
// //     }

// //     makeSound(sound:string): void {
// //         console.log(`${this.name} is ${sound}...`);
// //     }
// // }

// // class Dog extends Animal{

// //     constructor(name:string){
// //         super(name);
// //     }

// //     makeSound(sound:string): void {
// //         console.log(`${this.name} is ${sound}...`);
// //     }
// // }

// // let myLion = new Lion("Sher Khan");
// // myLion.makeSound("Roaring");

// // let myDog = new Dog("Moti");
// // myDog.makeSound("Barking");

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// // abstract class Bank{
// //     accountHolderName:string;
// //     accountHolderId:string;

// //     constructor(accountHolderName:string,accountHolderId:string){
// //         this.accountHolderName = accountHolderName;
// //         this.accountHolderId = accountHolderId;
// //     }

// //     abstract cal_Interest(amount:number,interest:number):number;
// // }

// // class SBI extends Bank{

// //     constructor(accountHolderName:string,accountHolderId:string){
// //         super(accountHolderName,accountHolderId);
// //     }

// //     cal_Interest(amount:number){
// //         let interest: number = 5;
// //         amount = amount+amount* (interest/100);
// //         return amount;
// //     }
// // }

// // class HDFC extends Bank{

// //     constructor(accountHolderName:string,accountHolderId:string){
// //         super(accountHolderName,accountHolderId);
// //     }

// //     cal_Interest(amount:number){
// //         let interest: number = 3;
// //         amount = amount+amount* (interest/100);
// //         return amount;
// //     }
// // }

// // let mySBI = new SBI("Ramsarvesh Maurya","1234567890");
// // console.log(`Total Amount With interest : ${mySBI.cal_Interest(100)}`);

// // let myHDFC = new HDFC("javed","987654321");
// // console.log(`Total Amount With interest : ${myHDFC.cal_Interest(200)}`);


// /**15. Write a TypeScript program that defines an abstract class Employee with properties such as name, employeeId, and an abstract method calculateSalary(). Create derived classes (e.g., FullTimeEmployee, PartTimeEmployee) that extend Employee and provide salary calculation logic based on employment type. */

// // =======================================================================


// abstract class Employee{
//     name:string;
//     employeeId:string;

//     constructor(name:string,employeeId:string){
//         this.name = name;
//         this.employeeId = employeeId;
//     }

//     abstract calculateSalary(salaryPerHour:number):number;

// }

// class FullTimeEmployee extends Employee{

//     constructor(name:string,employeeId:string){
//         super(name,employeeId);
//     }

//     getEmployeedata(){
//         console.log(`Full Time Employee Name : ${this.name}`);
//         console.log(`Full Time Employee Id : ${this.employeeId}`);
//     }

//     calculateSalary(salaryPerHour: number){
//         let workingTime:number = 8;
//         let salary:number = (workingTime * salaryPerHour);

//         return salary;
//     }

// }

// class PartTimeEmployee extends Employee{

//     constructor(name:string,employeeId:string){
//         super(name,employeeId);
//     }

//     getEmployeedata(){
//         console.log(`Part Time Employee Name : ${partTimeEmp.name}`);
//         console.log(`Part Time Employee Id : ${partTimeEmp.employeeId}`);
//     }

//     calculateSalary(salaryPerHour: number){
//         let workingTime:number = 4;
//         let salary:number = (workingTime * salaryPerHour);

//         return salary;
//     }

// }

// let fullTimeEmp =  new FullTimeEmployee("Javed Khan","123JAVED");
// fullTimeEmp.getEmployeedata();
// console.log(`Full Time Employee Total Salary is : ${fullTimeEmp.calculateSalary(1000)}\n`);

// let partTimeEmp = new PartTimeEmployee("Adarsh Yadav","321Adarsh");
// partTimeEmp.getEmployeedata();
// console.log(`Part Time Employee Total Salary is : ${partTimeEmp.calculateSalary(500)}`);

// // // =========================================================================================================



// // /**17. Write a TypeScript class called Student with the following properties and methods:

// // private name: string
// // protected studentId: number
// // The class should have a constructor that accepts a name and student ID. Implement a method:
// // public displayInfo(): void that displays the student's name and ID.Make sure that the studentId property is accessible only within the class and its subclasses. */



// class Student{
//     private name: string;
//     protected studentId: number;

//     constructor(name:string,studentId:number){
//         this.name = name;
//         this.studentId = studentId;
//     }

//     public displayInfo(): void{
//         console.log(`Student's name is : ${this.name}`);
//         console.log(`Student ID is : ${this.studentId}`);

//     }
// }

// let std = new Student("Ramsarvesh Maurya", 1234567890);
// std.displayInfo();

// // Check
// // console.log(std.studentId);


// // ================================================================================================


// /**18. Write a TypeScript class called BankAccount with the following properties and methods:

// private accountNumber: string
// protected balance: number
// The class should have a constructor that accepts an account number and initializes the balance to 0. It should also include methods:
// public deposit(amount: number): void to add funds to the account.
// public withdraw(amount: number): void to deduct funds from the account.


// Only the class and its subclasses should have access to the balance property. */



// // class BankAccount{
// //     private accountNumber: string;
// //     protected balance: number;

// //     constructor(accountNumber: string){
// //         this.accountNumber = accountNumber;
// //         this.balance = 0;
// //     }

// //     public deposit(amount: number): void{
// //         console.log(`Previous Balance after deposit is : ${this.balance}`);

// //         this.balance += amount;
// //         console.log(`${this.balance} is deposited in account ${this.accountNumber}`);
// //         console.log(`Total Balance after deposit is : ${this.balance}\n`);
// //     }

// //     public withdraw(amount: number): void{
// //         console.log(`Previous Balance after withdrawl is : ${this.balance}`);
// //         this.balance -= amount;

// //         console.log(`${this.balance} is Withdrawl in account ${this.accountNumber}`);
// //         console.log(`Total Balance after withdrawl is : ${this.balance}`);
// //     }
// // }

// // let bankAc = new BankAccount("12345676890");
// // bankAc.deposit(1000);
// // bankAc.withdraw(500);



// class BankAccount{
//     private accountNumber: string;
//     protected balance: number;

//     constructor(accountNumber: string){
//         this.accountNumber = accountNumber;
//         this.balance = 0;
//     }
// }

// class AccountInfo extends BankAccount{              // Show use of protected data member

//     constructor(accountNumber: string){
//         super(accountNumber);
//     }

//     deposit(amount: number): void{
//         console.log(`Previous Balance after deposit is : ${this.balance}`);

//         this.balance += amount;
//         console.log(amount,` is deposited`);
//         console.log(`Total Balance after deposit is : ${this.balance}\n`);
//     }

//     withdraw(amount: number): void{
//         console.log(`Previous Balance after withdrawl is : ${this.balance}`);
//         this.balance -= amount;

//         console.log(amount,` is Withdrawl`);
//         console.log(`Total Balance after withdrawl is : ${this.balance}`);
//     }
// }

// let bankAc = new AccountInfo("12345676890");
// bankAc.deposit(1000);
// bankAc.withdraw(500);


// // =====================================================================================================



// /**19. Write a TypeScript program that creates a class called Car with the following properties and methods:

// protected make: string
// protected model: string
// The class should have a constructor that accepts make and model. Implement a method:
// public getCarInfo(): string that returns a string containing the make and model of the car.
// Make sure that the make and model properties are only accessible within the class and its subclasses. */



// class Car{
//     protected make: string;
//     protected model: string;

//     constructor(make:string,model:string){
//         this.make = make;
//         this.model = model;
//     }

//     public getCarInfo(): string{
//         return `Make : ${this.make} and\nModel : ${this.model} of the car`;
//     }
// }

// let car = new Car("Mercedece- Benz","Toyota");
// console.log(car.getCarInfo());

// // =====================================================

// /**20. Write a TypeScript program that creates a class called Animal with the following properties and methods:

// protected name: string
// private age: number
// The class should have a constructor that accepts name and age. Implement a method:
// public introduce(): string that returns a string introducing the animal, including its name and age.
// Ensure that the age property is accessible only within the class. */

// class Animal{
//     protected name: string;
//     private age: number;

//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age;
//     }

//     public introduce(): string {
//         return `Animal Name is: ${this.name}\nAnimal age is: ${this.age}`;
//     }
// }

// class Dog extends Animal{

//     constructor(name:string,age:number){
//         super(name,age);
//     }

//     public introduce(): string {
//         return `Animal Name is: ${this.name}`;
//     }
// }

// let dog = new Dog("Dog",10);
// console.log(dog.introduce());

// // =================================================================


// /**21. Write a TypeScript class called Counter with a static property count initialized to 0. Implement a static method increment() that increments the count by 1. Implement another static method getCount() that returns the current count value. Test the class by calling both methods */



// class Counter{
//     static count:number = 0;

//     static increment(){
//         this.count++;
//     }

//     static getCount(){
//         return this.count;
//     }
// }

// Counter.increment();
// console.log(Counter.getCount());

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Student {
    static college: string;
    name: string;
    roll: number;
    branch: string;

    static setCollege(college: string) {
        Student.college = college;
    }

    static getCollege() {
        console.log(` College is: ${Student.college}`);

    }

    setData(name: string, roll: number, branch: string) {
        this.name = name;
        this.roll = roll;
        this.branch = branch;
    }

    getData() {
        console.log(`Name is: ${this.name}\n Roll is: ${this.roll}\n Branch is : ${this.branch}`);
    }
}

let stu1 = new Student();
Student.setCollege("DDU");
Student.getCollege();
stu1.setData("Ramsarvesh Maurya", 123456, "CSE");
stu1.getData();

let stu2 = new Student();
Student.setCollege("DDU");
Student.getCollege();
stu2.setData("Javed",654321,"IT");
stu2.getData();


/**22. Write a TypeScript program that creates a class with static methods for common mathematical operations, such as add, subtract, multiply, and divide. Each method should accept two numbers as parameters and return the operation result. Test the class by performing various mathematical operations using its static methods. */




/** 23. Write a TypeScript class called Singleton that follows the Singleton design pattern. The class should have a private static instance of itself and a static method getInstance() that returns the instance. Ensure that only one instance of the class can be created. Test the Singleton pattern by creating multiple instances and checking if they are the same instance.*/



/** 24. Write a TypeScript utility class with static methods for common utility functions, such as formatDate, generateRandomString, and capitalizeString. Each method should provide the respective utility functionality and be accessible without creating an instance of the class. Test the utility class by using its static methods to perform various tasks.*/