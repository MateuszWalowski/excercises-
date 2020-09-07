"use strict";


function getNameParts(fullname) {

    const firstspace = fullname.name.indexOf(" ");
    const firstName = fullname.name.slice(0, firstspace);
    const firstafter = firstspace + 1;
    const secondspace = fullname.name.indexOf(" ", firstafter);
    const middleName = fullname.name.slice(firstafter, secondspace);
    const lastName = fullname.name.slice(secondspace + 1);

    console.log({
        firstName,
        middleName,
        lastName
    });
}

const name = {
    name: "Peter Heronimous Lind"
}

getNameParts(name)