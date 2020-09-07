"use strict";

// function hexToRGB(color) {

//     let r = color.substring(1, 3)
//     let convertedred = parseInt(r, 16)
//     let g = color.substring(3, 5)
//     let convertedgreen = parseInt(g, 16)
//     let b = color.substring(5)
//     let convertedblue = parseInt(b, 16)
//     let newcolorhexToRGB = "r=" +
//         convertedred + ", " + "g=" +
//         convertedgreen + ", " + "b=" +
//         convertedblue
//     console.log(newcolorhexToRGB)
// }

// hexToRGB("#bada55")
// hexToRGB("#facade")

// function rgbToHex(r, g, b) {

//     let red = r.toString(16);
//     let green = g.toString(16);
//     let blue = b.toString(16);


//     if (red.length == 1) {
//         red = "0" + red;
//     } else
//     if (green.length == 1) {
//         green = "0" + green;
//     }
//     if (blue.length == 1) {
//         blue = "0" + blue;
//     }

//     let newcolorrgbToHex = "#" + red + "" + green + "" + blue

//     console.log(` Hex value of ${r}${g}${b} is ${newcolorrgbToHex}`)
// }
// rgbToHex(186, 218, 85)
// rgbToHex(12, 2, 17)


function cssToRGB(color) {

    console.log(color)
    let removename = color.substring(4, color.length - 1)
    let removecommas = removename.replace(/,/g, '')
    console.log(removecommas)

    let values = removename.split(",")
    console.log(values)

    let red = values[0].trim()
    console.log(red)

    let green = values[1].trim()
    console.log(green)

    let blue = values[2].trim()
    console.log(blue)

    console.log(`Color values for ${color} are: red ${red}, green ${green}, blue ${blue}  `)
}

cssToRGB("rgb(192, 13, 1)")