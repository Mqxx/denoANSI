/**
 * `<CSI>` `{color 1};{color 2};{color n}m`
 * 
 * @desc ANSI foreground 8 colors bright
 * @readonly
 * @enum {string}
 */
export enum colors8BrightFG {
    /**
     * `<CSI>` `0`
     * 
     * @desc Reset bright foreground
     */
    RESET = '0',

    /**
     * `<CSI>` `90`
     * 
     * @desc Bright black foreground
     */
    BRIGHT_BLACK = '90',

    /**
     * `<CSI>` `91`
     * 
     * @desc Bright red foreground
     */
    BRIGHT_RED = '91',

    /**
     * `<CSI>` `92`
     * 
     * @desc Bright green foreground
     */
    BRIGHT_GREEN = '92',

    /**
     * `<CSI>` `93`
     * 
     * @desc Bright yellow foreground
     */
    BRIGHT_YELLOW = '93',

    /**
     * `<CSI>` `94`
     * 
     * @desc Bright blue foreground
     */
    BRIGHT_BLUE = '94',

    /**
     * `<CSI>` `95`
     * 
     * @desc Bright magenta foreground
     */
    BRIGHT_MAGENTA = '95',

    /**
     * `<CSI>` `96`
     * 
     * @desc Bright cyan foreground
     */
    BRIGHT_CYAN = '96',

    /**
     * `<CSI>` `97`
     * 
     * @desc Bright white foreground
     */
    BRIGHT_WHITE = '97',
    
    /**
     * `<CSI>` `39`
     * 
     * @desc Default foreground
     */
    DEFAULT = '39',
}
