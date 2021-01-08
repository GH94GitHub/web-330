/*=====================
; Title: Exercise 1.4
; Author: George Henderson
; Date: 08 January 2021
; Description: Demonstrates duck typing
;=====================*/

const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 1.4') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 1.4
  Date: 1/8/2021

  Car added to the racetrack!
  Truck added to the racetrack!
  Jeep added to the racetrack!

  -- The following vehicles have been added to the racetrack --
  Car: Civic
  Truck: Sierra 1500
  Jeep: Gladiator
*/

// Constructors -------------------------------------------------------
  /* Params: (string) */
function Car(model) {
  this.model = model;
}
Car.prototype.start = () => {console.log('Car added to the racetrack!')}

  /* Params: (string, string) */
function Truck(model, year) {
  this.model = model;
  this.year = year;
}
Truck.prototype.start = () => {console.log('Truck added to the racetrack!')}

  /* Params: (string, string, string) */
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}
Jeep.prototype.start = () => {console.log('Jeep added to the racetrack!')}
//------------------------------------------------ End Constructors

let raceTrackArr = [];

// Functions------------------
  /*Params: (Vehicle Object),
    Description: Calls the start method on vehicle object & pushes object to raceTrackArr */
function driveIt(vehicle) {
  vehicle.start();
  raceTrackArr.push(vehicle);
}
//-------------- End Functions

let myCar = new Car('Civic');
let myTruck = new Truck('Sierra 1500', '2010');
let myJeep = new Jeep('Gladiator', '2020', 'Silver');

driveIt(myCar);
driveIt(myTruck);
driveIt(myJeep);

// Output ---------------------------------------------------------------------
console.log('\n-- The following vehicles have been added to the racetrack --');
for (let i = 0; i < raceTrackArr.length; i++) {
  console.log(raceTrackArr[i].constructor.name + ': ' + raceTrackArr[i].model);
}
