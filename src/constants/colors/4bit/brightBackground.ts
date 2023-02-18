/**
 * @desc ANSI 4-Bit background colors bright
 * @readonly
 * @example
 * 
 * '<CSI>{color 1};{color 2};{color n}m'
 * 
 * @enum {string}
 */
export enum brightBackground {
    /**
     * @desc Background bright reset
     * @default RESET = '0'
     */
    RESET = '0',
    
    /**
     * @desc Background bright default
     * @default DEFAULT = '39'
     */
    DEFAULT = '39',
    
    /**
     * @desc Background bright black
     * @default BLACK = '100'
     */
    BLACK = '100',

    /**
     * @desc Background bright red
     * @default RED = '101'
     */
    RED = '101',

    /**
     * @desc Background bright green
     * @default GREEN = '102'
     */
    GREEN = '102',

    /**
     * @desc Background bright yellow
     * @default YELLOW = '103'
     */
    YELLOW = '103',

    /**
     * @desc Background bright blue
     * @default BLUE = '104'
     */
    BLUE = '104',

    /**
     * @desc Background bright magenta
     * @default MAGENTA = '105'
     */
    MAGENTA = '105',

    /**
     * @desc Background bright cyan
     * @default CYAN = '106'
     */
    CYAN = '106',

    /**
     * @desc Background bright white
     * @default WHITE = '107'
     */
    WHITE = '107'
}
