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
     * `0`
     * 
     * @desc Reset background
     */
    RESET = '0',

    /**
     * `40`
     * 
     * @desc Black background
     */
    BLACK = '40',

    /**
     * `41`
     * 
     * @desc Red background
     */
    RED = '41',

    /**
     * `42`
     * 
     * @desc Green background
     */
    GREEN = '42',

    /**
     * `43`
     * 
     * @desc Yellow background
     */
    YELLOW = '43',

    /**
     * `44`
     * 
     * @desc Blue background
     */
    BLUE = '44',

    /**
     * `45`
     * 
     * @desc Magenta background
     */
    MAGENTA = '45',

    /**
     * `46`
     * 
     * @desc Cyan background
     */
    CYAN = '46',

    /**
     * `47`
     * 
     * @desc White background
     */
    WHITE = '47',

    /**
     * `49`
     * 
     * @desc Default background
     */
    DEFAULT = '49',
}
