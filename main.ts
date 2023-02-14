
let colorString = ''

for (let i = 0; i < 16; i++) {
    colorString += `\x1B[48;5;${i}m   \x1B[0m`
}
console.log(colorString)

colorString = ''

for (let i = 16; i < 232; i+=6) {
    colorString = ''

    for (let y = i; y < i+6; y++) {

        colorString += `\x1B[48;5;${y}m   \x1B[0m`
    }
    console.log(colorString);
}

colorString = ''

for (let i = 232; i < 255; i++) {
    colorString += `\x1B[48;5;${i}m   \x1B[0m`
}
console.log(colorString)

// reading pattern:
// > > > > > +
//           |
// + < < < < +
// |
// + > > > > >
