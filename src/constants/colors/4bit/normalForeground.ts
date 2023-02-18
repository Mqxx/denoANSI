/**
 * @desc ANSI 4-Bit foreground colors normal
 * @readonly
 * @example
 * 
 * '<CSI>{color 1};{color 2};{color n}m'
 * 
 * @enum {string}
 */
export enum normalForeground {
    /**
     * @desc Foreground normal reset
     * @default RESET = '0'
     */
    RESET = '0',

    /**
     * @desc Foreground normal default
     * @default DEFAULT = '39'
     */
    DEFAULT = '39',

    /**
     * @desc Foreground normal black
     * @default BLACK = '30'
     */
    BLACK = '30',

    /**
     * @desc Foreground normal red
     * @default RED = '31'
     */
    RED = '31',

    /**
     * @desc Foreground normal green
     * @default GREEN = '32'
     */
    GREEN = '32',

    /**
     * @desc Foreground normal yellow
     * @default YELLOW = '33'
     */
    YELLOW = '33',

    /**
     * @desc Foreground normal blue
     * @default BLUE = '34'
     */
    BLUE = '34',

    /**
     * @desc Foreground normal magenta
     * @default MAGENTA = '35'
     */
    MAGENTA = '35',

    /**
     * @desc Foreground normal cyan
     * @default CYAN = '36'
     */
    CYAN = '36',

    /**
     * @desc Foreground normal white
     * @default WHITE = '37'
     */
    WHITE = '37'
}
