/*=========================
; Title: Exercise 1.3
; Author: George Henderson
; Date: 07 January 2021
; Description: Demonstrates making a constructor and calling it to
; instantiate a new cellphone object & then output the details.
;=========================*/

const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 1.3') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 1.3
  Date: 1/7/2021

  -- DISPLAYING CELL PHONE DETAILS --
  Manufacturer: Apple
  Model: iPhone X
  Color: Silver
  Price: $400
*/

let myCellphone = new CellPhone('Apple', 'iPhone X', '400', 'Silver');

// CellPhone Constructor Function
/* Params (string, string, string, string) */
function CellPhone(manufacturer, model, price, color) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.price = price;
  this.color = color;

  this.getPrice = () => {return '$' + this.price}
  this.getModel = () => {return this.model}
  // Returns all of the information about the cellphone.
  this.getDetails = () => {
    return 'Manufacturer: ' + this.manufacturer + '\nModel: ' + this.getModel() + '\nColor: ' + this.color + '\nPrice: ' + this.getPrice();
  }
}

// Output
console.log('-- DISPLAYING CELL PHONE DETAILS --');
console.log(myCellphone.getDetails());
