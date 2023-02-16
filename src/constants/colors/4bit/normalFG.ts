/**
 * `<CSI>` `{color 1};{color 2};{color n}m`
 * 
 * @desc ANSI foreground 8 colors normal
 * @readonly
 * @enum {string}
 */
export enum normalFG {
    /**
     * `<CSI>` `0`
     * 
     * @desc Reset foreground
     */
    RESET = '0',

    /**
     * `<CSI>` `30`
     * 
     * @desc Black foreground
     */
    BLACK = '30',

    /**
     * `<CSI>` `31`
     * 
     * @desc Red foreground
     */
    RED = '31',

    /**
     * `<CSI>` `32`
     * 
     * @desc Green foreground
     */
    GREEN = '32',

    /**
     * `<CSI>` `33`
     * 
     * @desc Yellow foreground
     */
    YELLOW = '33',

    /**
     * `<CSI>` `34`
     * 
     * @desc Blue foreground
     */
    BLUE = '34',

    /**
     * `<CSI>` `35`
     * 
     * @desc Magenta foreground
     */
    MAGENTA = '35',

    /**
     * `<CSI>` `36`
     * 
     * @desc Cyan foreground
     */
    CYAN = '36',

    /**
     * `<CSI>` `37`
     * 
     * @desc White foreground
     */
    WHITE = '37',

    /**
     * `<CSI>` `39`
     * 
     * @desc Deafult foreground
     */
    DEFAULT = '39',

}
