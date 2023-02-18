/**
 * ANSI sequences
 * 
 * @desc ANSI control sequences
 * @readonly
 * @enum {string}
 */
export enum sequences {
    /**
     * `\x1B`
     * 
     * @desc Sequence start (Escape)
     */
    ESC = '\x1B',

    /**
     * `\x1B[`
     * 
     * @desc Control Sequence Introducer
     */
    CSI = '\x1B[',

    /**
     * `\x1BP`
     * 
     * @desc Device Control String
     */
    DCS = '\x1BP',

    /**
     * `\x1B]`
     * 
     * @desc Operating System Command
     */
    OSC = '\x1B]',

    /**
     * `;`
     * 
     * @desc Separator
     */
    SEP = ';',

    /**
     * `m`
     * 
     * @desc Color end
     */
    COLOR_END = 'm',

    /**
     * `m`
     * 
     * @desc Format end
     */
    FORMAT_END = 'm'
}
