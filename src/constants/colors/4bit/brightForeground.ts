/**
 * @desc ANSI 4-Bit foreground colors bright
 * @readonly
 * @example
 * 
 * '<CSI>{color 1};{color 2};{color n}m'
 * 
 * @enum {string}
 */
export enum brightForeground {
    /**
     * @desc Foreground bright reset
     * @default RESET = '0'
     */
    RESET = '0',
    
    /**
     * @desc Foreground bright default
     * @default DEFAULT = '39'
     */
    DEFAULT = '39',
    
    /**
     * @desc Foreground bright black
     * @default BLACK = '90'
     */
    BLACK = '90',

    /**
     * @desc Foreground bright red
     * @default RED = '91'
     */
    RED = '91',

    /**
     * @desc Foreground bright green
     * @default GREEN = '92'
     */
    GREEN = '92',

    /**
     * @desc Foreground bright yellow
     * @default YELLOW = '93'
     */
    YELLOW = '93',

    /**
     * @desc Foreground bright blue
     * @default BLUE = '94'
     */
    BLUE = '94',

    /**
     * @desc Foreground bright magenta
     * @default MAGENTA = '95'
     */
    MAGENTA = '95',

    /**
     * @desc Foreground bright cyan
     * @default CYAN = '96'
     */
    CYAN = '96',

    /**
     * @desc Foreground bright white
     * @default WHITE = '97'
     */
    WHITE = '97'
}
