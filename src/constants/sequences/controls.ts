/**
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
     * @default controls.CSI = '['
     */
    CSI = '[',

    /**
     * @desc Device Control String
     * @default controls.DCS = 'P'
     */
    DCS = 'P',

    /**
     * @desc Operating System Command
     * @default controls.OSC = ']'
     */
    OSC = ']',

    /**
     * @desc Separator
     * @default controls.SEP = ';'
     */
    SEP = ';',

    /**
     * @desc Private mode
     * @default controls.SEP = '?'
     */
    PRIVATE = '?'
}
