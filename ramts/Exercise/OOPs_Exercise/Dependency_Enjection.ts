// Define a class 'Engine'
class Engine1 {
    // Properties
    horsepower: number;
    fuelType: string;
  
    // Constructor for Engine
    constructor(horsepower: number, fuelType: string) {
      this.horsepower = horsepower;
      this.fuelType = fuelType;
    }
  }
  
  // Modify the 'Car' class to include an 'Engine' instance
  class Car1 {
    // Properties
    make: string;
    model: string;
    year: number;
    engine: Engine1; // Include an 'Engine' instance as a property
  
    // Constructor for Car
    constructor(make: string, model: string, year: number, engine: Engine1) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.engine = engine; // Initialize the 'engine' property with an 'Engine' instance
    }
  
    // Method to start the car
    start() {
      console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
    }
  
    // Method to print car and engine details
    printCarDetails() {
      console.log(`Car Details:`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Engine Details:`);
      console.log(`Horsepower: ${this.engine.horsepower}`);
      console.log(`Fuel Type: ${this.engine.fuelType}`);
    }
  }
  
  // Create an 'Engine' object
  const myEngine1 = new Engine1(200, "Gasoline");
  
  // Create a 'Car' object with the 'Engine' instance
  const myCar1 = new Car1("Audi", "A3", 2023, myEngine1);
  
  // Call the start method to start the car
  myCar1.start();
  
  // Print car and engine details
  myCar1.printCarDetails();