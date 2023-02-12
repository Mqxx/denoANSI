import { sequences } from "./sequences.ts"

const textEncoder = new TextEncoder()

interface ANSI {
    bell : Function,
    cursorUp : Function,
    cursorDown : Function
}

export const ansi : ANSI = {

    bell: function() {
        
    },

    cursorUp: function(amount = 1) {
        Deno.stdout.write(textEncoder.encode(sequences.ESC + sequences.CSI + `${amount}A`))
    },

    cursorDown: function(amount = 1) {
        Deno.stdout.write(textEncoder.encode(sequences.ESC + sequences.CSI + `${amount}B`))
    }
}
