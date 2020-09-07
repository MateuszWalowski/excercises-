"use strict";



// function presentPet(firstName, animalType, animalName) {

//     if (animalName !== undefined) {
//         console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`)
//     } else {
//         console.log(`My name is ${firstName}, I have a ${animalType} without any name`)
//     }
// }

// let me = "Peter"
// const animalType = "cat"
// const animalName = "Mandu"

// presentPet(me, animalType, animalName)


function presentPet(obj) {

    const capitalizedname = obj.name.substring(0, 1).toUpperCase() + obj.name.substring(1).toLowerCase();

    if (obj.animalName !== undefined) {
        console.log(`My name is ${capitalizedname}, I have a ${obj.animalType} called ${obj.animalName}`)
    } else {
        console.log(`My name is ${capitalizedname}, I have a ${obj.animalType} without any name`)
    }
}
const data = {
    name: "peter",
    animalType: "cat",
    animalName: "Mandu"

}


presentPet(data)