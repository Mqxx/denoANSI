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
     * `0`
     * 
     * @desc Reset foreground
     */
    RESET = '0',

    /**
     * `30`
     * 
     * @desc Black foreground
     */
    BLACK = '30',

    /**
     * `31`
     * 
     * @desc Red foreground
     */
    RED = '31',

    /**
     * `32`
     * 
     * @desc Green foreground
     */
    GREEN = '32',

    /**
     * `33`
     * 
     * @desc Yellow foreground
     */
    YELLOW = '33',

    /**
     * `34`
     * 
     * @desc Blue foreground
     */
    BLUE = '34',

    /**
     * `35`
     * 
     * @desc Magenta foreground
     */
    MAGENTA = '35',

    /**
     * `36`
     * 
     * @desc Cyan foreground
     */
    CYAN = '36',

    /**
     * `37`
     * 
     * @desc White foreground
     */
    WHITE = '37',

    /**
     * `39`
     * 
     * @desc Deafult foreground
     */
    DEFAULT = '39',

}
