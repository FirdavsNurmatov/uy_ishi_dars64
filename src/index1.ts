// interface IUser {
//   name: string;
//   age: number;
//   sayHello(): void;
// }

// class Person implements IUser {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello(): void {
//     console.log("Hello, my name is " + this.name);
//   }
// }

// const person = new Person("Firdavs", 16);
// person.sayHello();

// =======1=======
interface IShape {
  accountArea(): void;
}

class Circle implements IShape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  accountArea(): void {
    console.log("Surface of circle: " + 3.14 * this.radius ** 2);
  }
}

const circleRadius = new Circle(2);
circleRadius.accountArea();

class Rectangle implements IShape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  accountArea(): void {
    console.log(`Surface of rectangle: ` + this.width * this.height);
  }
}

const rectangleWidthAndHeight = new Rectangle(4, 5);
rectangleWidthAndHeight.accountArea();

// =======2=======
abstract class Vehicle {
  abstract start(): void;
  abstract stop(): void;
}

class Car extends Vehicle {
  start(): void {
    console.log("Car started.");
  }

  stop(): void {
    console.log("Car stopped.");
  }
}

const car = new Car();
car.start();
car.stop();

class MotorCycle extends Vehicle {
  start(): void {
    console.log("MotorCycle started.");
  }

  stop(): void {
    console.log("MotorCycle stopped.");
  }
}

const moto = new MotorCycle();
moto.start();
moto.stop();

// =======3=======
interface IUser {
  user_list: Array<string>;
}

class Users implements IUser {
  user_list: string[];

  constructor(user_list: string[]) {
    this.user_list = user_list;
  }
}
