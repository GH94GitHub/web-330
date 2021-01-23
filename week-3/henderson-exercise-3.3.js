/*=========================
; Title: Exercise 3.3
; Author: Richard Krasso
; Date: 23 January 2021
; Modified By: George Henderson
; Description: Using the singleton design pattern to
; create and access an object.
;=========================*/

var header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 3.3') + '\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if (!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

/**
 * Tests the singleton
 */
function databaseSingleTest() {
  let database1 = DatabaseSingleton.getInstance();
  let database2 = DatabaseSingleton.getInstance();
  console.log('One database instance? ' + (database1 === database2));
}

// Output
databaseSingleTest();


// end program
