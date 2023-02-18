/**
 * @desc ANSI 4-Bit background colors normal
 * @readonly
 * @example
 * 
 * '<CSI>{color 1};{color 2};{color n}m'
 * 
 * @enum {string}
 */
export enum normalBackground {
    /**
     * @desc Background normal reset
     * @default RESET = '0'
     */
    RESET = '0',

    /**
     * @desc Background normal default
     * @default DEFAULT = '49'
     */
    DEFAULT = '49',

    /**
     * @desc Background normal black
     * @default BLACK = '40'
     */
    BLACK = '40',

    /**
     * @desc Background normal red
     * @default RED = '41'
     */
    RED = '41',

    /**
     * @desc Background normal green
     * @default GREEN = '42'
     */
    GREEN = '42',

    /**
     * @desc Background normal yellow
     * @default YELLOW = '43'
     */
    YELLOW = '43',

    /**
     * @desc Background normal blue
     * @default BLUE = '44'
     */
    BLUE = '44',

    /**
     * @desc Background normal magenta
     * @default MAGENTA = '45'
     */
    MAGENTA = '45',

    /**
     * @desc Background normal cyan
     * @default CYAN = '46'
     */
    CYAN = '46',

    /**
     * @desc Background normal white
     * @default WHITE = '47'
     */
    WHITE = '47'
}
