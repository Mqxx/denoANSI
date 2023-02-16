/**
 * `<CSI>` `{color 1};{color 2};{color n}m`
 * 
 * @desc ANSI background 8 colors normal
 * @readonly
 * @enum {string}
 */
export enum colors8NormalBG {
    /**
     * `<CSI>` `0`
     * 
     * @desc Reset background
     */
    RESET = '0',

    /**
     * `<CSI>` `40`
     * 
     * @desc Black background
     */
    BLACK = '40',

    /**
     * `<CSI>` `41`
     * 
     * @desc Red background
     */
    RED = '41',

    /**
     * `<CSI>` `42`
     * 
     * @desc Green background
     */
    GREEN = '42',

    /**
     * `<CSI>` `43`
     * 
     * @desc Yellow background
     */
    YELLOW = '43',

    /**
     * `<CSI>` `44`
     * 
     * @desc Blue background
     */
    BLUE = '44',

    /**
     * `<CSI>` `45`
     * 
     * @desc Magenta background
     */
    MAGENTA = '45',

    /**
     * `<CSI>` `46`
     * 
     * @desc Cyan background
     */
    CYAN = '46',

    /**
     * `<CSI>` `47`
     * 
     * @desc White background
     */
    WHITE = '47',

    /**
     * `<CSI>` `49`
     * 
     * @desc Default background
     */
    DEFAULT = '49',
}
