import { ansi } from "./src/ansi.ts";
// import { sequences } from "./src/sequences.ts";

// console.log(sequences.ESC + sequences.CSI + '5;1H', 'Hello World!');

ansi.cursorDown(5)
console.log('Hello World!')
// ansi.cursorUp(5)


