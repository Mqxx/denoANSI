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
     * `0`
     * 
     * @desc Reset bright foreground
     */
    RESET = '0',
    
    /**
     * `39`
     * 
     * @desc Default foreground
     */
    DEFAULT = '39',
    
    /**
     * `90`
     * 
     * @desc Bright black foreground
     */
    BRIGHT_BLACK = '90',

    /**
     * `91`
     * 
     * @desc Bright red foreground
     */
    BRIGHT_RED = '91',

    /**
     * `92`
     * 
     * @desc Bright green foreground
     */
    BRIGHT_GREEN = '92',

    /**
     * `93`
     * 
     * @desc Bright yellow foreground
     */
    BRIGHT_YELLOW = '93',

    /**
     * `94`
     * 
     * @desc Bright blue foreground
     */
    BRIGHT_BLUE = '94',

    /**
     * `95`
     * 
     * @desc Bright magenta foreground
     */
    BRIGHT_MAGENTA = '95',

    /**
     * `96`
     * 
     * @desc Bright cyan foreground
     */
    BRIGHT_CYAN = '96',

    /**
     * `97`
     * 
     * @desc Bright white foreground
     */
    BRIGHT_WHITE = '97'
}
