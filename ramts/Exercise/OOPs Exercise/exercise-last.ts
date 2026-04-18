/**Q-Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created. */


// class BUS {
//     make : string ;
//     model : string ;
//     year : number ;

//     constructor ( make : string , model : string , year : number ) {
//         this.make = make ;
//         this.model = model ;
//         this.year = year ;
//     }
// }

// let myobj = new BUS ( "mercedes-Benz" , "Rsm" , 2026 ) ;
// console.log ( "Make : " , myobj.make ) ;
// console.log ( ` model : ${myobj.model} \n year : ${myobj.year} ` ) ;

                        //OR



    // class BUS {
    //     constructor ( make : string , model : string , year : number ) {
    //         this.make = make ;
    //         this.model = model ;
    //         this.year = year ;
    //     }
    // }
    
    // let myobj = new BUS ( "mercedes-Benz" , "Rsm" , 2026 ) ;
    
    // console.log ( ` make : ${myobj.make} \n model : ${myobj.model} \n year : ${myobj.year} ` ) ;                        

                    
      
    // sIR CODE



    // class Bus {
    //   // Properties
    //   make: string;
    //   model: string;
    //   year: number;
    
    //   // Constructor
    //   constructor(make: string, model: string, year: number) {
    //     this.make = make;
    //     this.model = model;
    //     this.year = year;
    //   }
    // }
    
    // // Create a Bus object
    // const myBus = new Bus("Volvo", "9400 B11R", 2019);
    
    // // Access and print the properties
    // console.log("Make:", myBus.make);  // Output: Make: Volvo
    // console.log("Model:", myBus.model); // Output: Model: 9400 B11Rr
    // console.log("Year:", myBus.year);


// ========================================================================


/**Q-Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting. */



// class Bus {
//         // Properties
//         make: string;
//         model: string;
//         year: number;
      
//         // Constructor
//         constructor(make: string, model: string, year: number) {
//           this.make = make;
//           this.model = model;
//           this.year = year;
//         }

//         // Method to start the car
//      start() {
//          console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
//   }
//       }
      
//       // Create a Bus object
//       const myBus = new Bus("Volvo", "9400 B11R", 2019);
      
//       // Access and print the properties
//       console.log("Make:", myBus.make);  // Output: Make: Volvo
//       console.log("Model:", myBus.model); // Output: Model: 9400 B11Rr
//       console.log("Year:", myBus.year); 
//       myBus.start()                   
//     // =======================================================




/**Q-Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. Add a property to represent whether the SUV is suitable for off-road driving. Implement a method that toggles off-road capability and prints a message accordingly. */



// Define a base class 'Car'
// class Car {
//   // Properties
//   make: string;
//   model: string;
//   year: number;

//   // Constructor
//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   // Method to start the car
//   start() {
//     console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
//   }
// }

// // Define a derived class 'SUV' that extends 'Car'
// class SUV extends Car {
//   // Property to represent off-road capability
//   offRoadCapable: boolean;

//   // Constructor for SUV
//   constructor(make: string, model: string, year: number, offRoadCapable: boolean) {
//     // Call the base class constructor
//     super(make, model, year);

//     // Initialize the off-road capability property
//     this.offRoadCapable = offRoadCapable;
//   }

//   // Method to toggle off-road capability and print a message
//   toggleOffRoadMode() {
//     if (this.offRoadCapable) {
//       console.log(`The ${this.make} ${this.model} is now in off-road mode.`);
//     } else {
//       console.log(`The ${this.make} ${this.model} is not suitable for off-road driving.`);
//     }
//   }
// }

// // Create an SUV object
// const mySUV = new SUV("Toyota", "Fortuner", 2023, true);

// // Call the start method to start the SUV
// mySUV.start();

// // Toggle the off-road mode
// mySUV.toggleOffRoadMode();

// ===============================================================================




/**Q-Write a TypeScript class that defines a base class Car with properties like make, model, and year, along with a start() method that prints a starting message. Now create a class called Engine with the properties horsepower and fuelType. Modify the Car class to include an instance of the Engine class as a property. Implement a method printCarDetails() in the Car class that prints both car and engine details. */




// // Define a class 'Engine'
// class Engine {
//   // Properties
//   horsepower: number;
//   fuelType: string;

//   // Constructor for Engine
//   constructor(horsepower: number, fuelType: string) {
//     this.horsepower = horsepower;
//     this.fuelType = fuelType;
//   }
// }

// // Modify the 'Car' class to include an 'Engine' instance
// class Car {
//   // Properties
//   make: string;
//   model: string;
//   year: number;
//   engine: Engine; // Include an 'Engine' instance as a property

//   // Constructor for Car
//   constructor(make: string, model: string, year: number, engine: Engine) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.engine = engine; // Initialize the 'engine' property with an 'Engine' instance
//   }

//   // Method to start the car
//   start() {
//     console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
//   }

//   // Method to print car and engine details
//   printCarDetails() {
//     console.log(`Car Details:`);
//     console.log(`Make: ${this.make}`);
//     console.log(`Model: ${this.model}`);
//     console.log(`Year: ${this.year}`);
//     console.log(`Engine Details:`);
//     console.log(`Horsepower: ${this.engine.horsepower}`);
//     console.log(`Fuel Type: ${this.engine.fuelType}`);
//   }
// }

// // Create an 'Engine' object
// const myEngine = new Engine(200, "Gasoline");

// // Create a 'Car' object with the 'Engine' instance
// const myCar = new Car("Audi", "A3", 2023, myEngine);

// // Call the start method to start the car
// myCar.start();

// // Print car and engine details
// myCar.printCarDetails();
    
// ======================================================================



/**5. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these properties when a Student object is created. */


// class Student{
//   name:string;
//   roll: number;

//   constructor(name:string,roll:number){
//     this.name = name;
//     this.roll = roll;
//   }
// }

// let stu = new Student("Ramsarvesh Maurya",123456);

// console.log("Name is : ",stu.name);

// console.log("Roll Number : ",stu.roll);

// ======================================================================


/**6. Write a TypeScript program that creates a class called Student with properties name and roll number. Add constructor overloading to support multiple ways of initializing a Student object. Implement one constructor that takes both name and roll number as parameters and another constructor that takes only name, assuming the roll number is unknown. */




// class Student {
//   // Properties
//   name: string;
//   rollNumber: number | undefined;

//   // Constructor with both name and roll number
//   constructor(name: string, rollNumber: number) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//   }

//   // Constructor with only name (roll number is optional)
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// // Create Student objects using different constructors
// const studentWithRollNumber = new Student("Mateo Ishita", 11);
// const studentWithoutRollNumber = new Student("Dvsch Gbpjiij");

// // Access and print the properties
// console.log("Student with Roll Number:");
// console.log("Name:", studentWithRollNumber.name);
// console.log("Roll Number:", studentWithRollNumber.rollNumber);

// console.log("\nStudent without Roll Number:");
// console.log("Name:", studentWithoutRollNumber.name);
// console.log("Roll Number:", studentWithoutRollNumber.rollNumber); // This

// =======================================================================



/**7. Write a TypeScript class called Shape with properties like color. Implement a constructor that initializes the color property when a Shape object is created. Then, create a derived class Circle that extends Shape. Implement a constructor for the Circle class that takes color and radius as parameters and initializes them along with the color property of the base class. */



// class Shape {
//   // Property
//   color: string;

//   // Constructor for Shape
//   constructor(color: string) {
//     this.color = color;
//   }
// }

// // Derived class 'Circle' extends 'Shape'
// class Circle extends Shape {
//   // Additional property for Circle
//   radius: number;

//   // Constructor for Circle
//   constructor(color: string, radius: number) {
//     // Call the constructor of the base class 'Shape'
//     super(color);

//     // Initialize the 'radius' property
//     this.radius = radius;
//   }
// }

// // Create a Circle object
// const myCircle = new Circle("Black", 7);

// // Access and print the properties
// console.log("Color:", myCircle.color); // Output: Color: Black
// console.log("Radius:", myCircle.radius); // Output: Radius: 7

// =================================================================



/**8. Write a TypeScript class called Student with properties name and age. Implement a constructor that initializes these properties when a Student object is created. Additionally, add validation to ensure that the age provided is a positive number. If the age is not positive, set it to a default value of 0. */



// class Student {
//   // Properties
//   name: string;
//   age: number;

//   // Constructor with validation
//   constructor(name: string, age: number) {
//     this.name = name;

//     // Validate and set the age property
//     if (age > 0) {
//       this.age = age;
//     } else {
//       // Default to 0 if age is not positive
//       this.age = 0;
//     }
//   }
// }

// // Create Student objects with different ages
// const student1 = new Student("Erland Clive", 22); // Age is positive
// const student2 = new Student("Bastet Aneta", -7); // Age is not positive

// // Access and print the properties
// console.log("Student 1 - Name:", student1.name, "Age:", student1.age); 
// // Output: Student 1 - Name: Erland Clive Age: 22

// console.log("Student 2 - Name:", student2.name, "Age:", student2.age); 
// // Output: Student 2 - Name: Bastet Aneta Age: 0 (default)

// ===================================================================



/**9. Write a TypeScript class called Animal with properties name and species. Implement a constructor that initializes these properties when an Animal object is created. Next, create a derived class Tiger that extends Animal. Add a method roar() to the Tiger class that prints a message indicating that the tiger is roaring. */



// Define the base class 'Animal'
// class Animal {
//   // Properties
//   name: string;
//   species: string;

//   // Constructor for Animal
//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }
// }

// // Define the derived class 'Tiger' extending 'Animal'
// class Tiger extends Animal {

//   constructor(name:string,species :string){
//       super(name,species);
//   }
//   // Method to roar
//   roar() {
//     console.log(`The tiger named ${this.name} is roaring.`);
//   }
// }

// // Create a Tiger object
// const myTiger = new Tiger("Saber", "Bengal Tiger");

// // Access and call the roar method
// myTiger.roar(); 
// // Output: The tiger named Saber is roaring.

// ======================================================================================================



/**10. Write a TypeScript class called Person with properties name and age. Implement a constructor that initializes these properties when a Person object is created. Then, create a derived class Employee that extends Person. Override the constructor of the Employee class to include an additional property employeeId. */



// class Person{
//  #name : string;
//  #age : string; 
 
//  constructor(name:string,age:string){
//     this.#name = name;
//     this.#age = age;
//  }

//  getName(){
//     console.log("Name is : ",this.#name);
//  }

//  getAge(){
//     console.log("Age is : ",this.#age);    
//  }

// }

// class Employee extends Person{
//     #EmployeeId : string;

//     constructor(name:string,age:string,EmployeeId:string){
//         super(name,age);
//         this.#EmployeeId = EmployeeId;
//     }

//     getEmployeeId(){
//         console.log("Employee-Id is : ",this.#EmployeeId);
//     }
// }

// const person = new Employee("Ramsarvesh Maurya","20 year","1234RSM");

// person.getName();
// person.getAge();
// person.getEmployeeId();

// ===========================================================


/**11. Write a TypeScript program that creates a class called Shape with properties color and a method draw(). This program prints a message indicating that the shape is being drawn. Then, create a derived class Circle that extends Shape. Override the draw() method in the Circle class to provide a specific implementation for drawing a circle. */


// class Shape{
//     #color:string;

//     constructor(color:string){
//         this.#color = color;
//     }
//     draw(){
//         console.log(`The shape is beang drawn... with color : ${this.#color}`);
        
//     }
// }

// class circle extends Shape{
//     #radius:string;
   
//     constructor(color:string,radius:string){
//         super(color);

//         this.#radius = radius;
//     }

//     draw(){
//         console.log(`Drawing a circle with radius : ${this.#radius}`);
        
//     }
// }

// let shape = new circle("Red","10");
// shape.draw();

// ========================================================================================


/**12. Write a TypeScript program that defines a class called Vehicle with properties make and model. Implement a constructor that initializes these properties when a Vehicle object is created. Then, create a derived class Car that extends Vehicle. Finally, create a derived class SportsCar that extends Car. Ensure that properties are inherited correctly and each class has its own constructor. */

class Vehicle{
    
}