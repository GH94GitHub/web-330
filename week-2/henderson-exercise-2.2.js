/*==========================
; Title: Exercise 2.2
; Author: George Henderson
; Date: 13 January 2021
; Description: Creates an object that inherits from 'Person'
;==========================*/

const header = require('../henderson-header');
console.log(header.display('George', 'Henderson', 'Exercise 2.2') + '\n');

/*
  Expected output:

  George Henderson
  Exercise 2.2
  Date: 1/13/2021

  The person's full name is Jim Jameson.
  The person's age is 24.
*/

// Prototype
let Person = {
  getAge: function() { return this.age }
};

// Uses 'Person' as the prototype
let jim = Object.create(Person, {
  age:{
    value: 24
  },
  fullName:{
    value: 'Jim Jameson'
  }
});

// Output
console.log("The person's full name is " + jim.fullName + ".");
console.log();
console.log("The person's age is " + jim.getAge() + ".");
