/**
 * ANSI sequences
 * 
 * @desc ANSI control sequences
 * @readonly
 * @enum {string}
 */
export enum controls {
    /**
     * @desc Sequence start (Escape)
     * @default controls.ESC = '\x1B'
     */
    ESC = '\x1B',

    /**
     * @desc Control Sequence Introducer
     * @default controls.CSI = '\x1B['
     */
    CSI = '\x1B[',

    /**
     * @desc Device Control String
     * @default controls.DCS = '\x1BP'
     */
    DCS = '\x1BP',

    /**
     * @desc Operating System Command
     * @default controls.OSC = '\x1B]'
     */
    OSC = '\x1B]',

    /**
     * @desc Separator
     * @default controls.SEP = ';'
     */
    SEP = ';'
}
