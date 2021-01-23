/*=====================
; Title: Exercise 3.2
; Author: Richard Krasso
; Date: 23 January 2021
; Modified By: George Henderson
; Description: Using the factory design pattern
; to create objects.
;=====================*/

var header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 3.2') + '\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
// Constructors
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties) {
this.username = properties.username || 'admin';
this.password = properties.password || 'password';
this.server = properties.server || 'localhost:5000';
this.version = properties.version || 2.1;
}

function Informix(properties) {
  this.username = properties.username || 'admin';
  this.password = properties.password || 'password';
  this.server = properties.server || 'localhost:6000';
}

// Creating the Factory
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    else if(properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    else if(properties.databaseType === "Oracle") {
      this.databaseClass = Oracle;
    }
    else {
      this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

// Using the DatabaseFactory to instantiate objects
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: 'default',
    password: 'password'
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType:'Oracle',
  username: 'username1',
  password: 'regpassword1'
});

var informixFactory = new DatabaseFactory();
informix = informixFactory.createDatabase({
  databaseType: 'Informix',
  username: 'adminuser',
  password: 'adminpassword'
});

// Output
console.log(oracle);
console.log(informix);



// end program
