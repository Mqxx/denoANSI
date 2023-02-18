/**
 * `<CSI>` `{color 1};{color 2};{color n}m`
 * 
 * @desc ANSI 4-Bit background colors bright
 * @readonly
 * @enum {string}
 */
export enum brightBackground {
    /**
     * `0`
     * 
     * @desc Reset bright background
     */
    RESET = '0',

    /**
     * `39`
     * 
     * @desc Default background
     */
    DEFAULT = '39',
    
    /**
     * `100`
     * 
     * @desc Bright black background
     */
    BRIGHT_BLACK = '100',

    /**
     * `101`
     * 
     * @desc Bright red background
     */
    BRIGHT_RED = '101',

    /**
     * `102`
     * 
     * @desc Bright green background
     */
    BRIGHT_GREEN = '102',

    /**
     * `103`
     * 
     * @desc Bright yellow background
     */
    BRIGHT_YELLOW = '103',

    /**
     * `104`
     * 
     * @desc Bright blue background
     */
    BRIGHT_BLUE = '104',

    /**
     * `105`
     * 
     * @desc Bright magenta background
     */
    BRIGHT_MAGENTA = '105',

    /**
     * `106`
     * 
     * @desc Bright cyan background
     */
    BRIGHT_CYAN = '106',

    /**
     * `107`
     * 
     * @desc Bright white background
     */
    BRIGHT_WHITG = '107'
}
