"use strict";

const name = "Peter Heronimous Lind";

const firstspace = name.indexOf(" ");

const firstName = name.slice(0, firstspace);
console.log("first name:" + firstName);

const firstafter = firstspace + 1;

const secondspace = name.indexOf(" ", firstafter);

const middleName = name.slice(firstafter, secondspace);
console.log("middle name:" + middleName);


const lastName = name.slice(secondspace + 1)
console.log("last  name:" + lastName);