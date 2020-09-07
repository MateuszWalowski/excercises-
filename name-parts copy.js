"use strict";


function fullName(lastName, firstName, middleName) {

    if (middleName !== undefined) {
        let combine = firstName + " " + middleName + " " + lastName
        console.log(combine)

    } else {
        let combine = firstName + " " + lastName
        console.log(combine)
    }

}

fullName("Potter", "Harry", "James");
fullName("Potter", "Harry");
fullName("Harry", "Potter");
fullName("Potter", "Harry", "James", "Pottypotpot")