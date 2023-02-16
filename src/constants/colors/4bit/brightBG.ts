/**
 * `<CSI>` `{color 1};{color 2};{color n}m`
 * 
 * @desc ANSI 4-Bit background colors bright
 * @readonly
 * @enum {string}
 */
export enum brightBG {
    /**
     * `<CSI>` `0`
     * 
     * @desc Reset bright background
     */
    RESET = '0',

    /**
     * `<CSI>` `100`
     * 
     * @desc Bright black background
     */
    BRIGHT_BLACK = '100',

    /**
     * `<CSI>` `101`
     * 
     * @desc Bright red background
     */
    BRIGHT_RED = '101',

    /**
     * `<CSI>` `102`
     * 
     * @desc Bright green background
     */
    BRIGHT_GREEN = '102',

    /**
     * `<CSI>` `103`
     * 
     * @desc Bright yellow background
     */
    BRIGHT_YELLOW = '103',

    /**
     * `<CSI>` `104`
     * 
     * @desc Bright blue background
     */
    BRIGHT_BLUE = '104',

    /**
     * `<CSI>` `105`
     * 
     * @desc Bright magenta background
     */
    BRIGHT_MAGENTA = '105',

    /**
     * `<CSI>` `106`
     * 
     * @desc Bright cyan background
     */
    BRIGHT_CYAN = '106',

    /**
     * `<CSI>` `107`
     * 
     * @desc Bright white background
     */
    BRIGHT_WHITG = '107',

    /**
     * `<CSI>` `39`
     * 
     * @desc Default background
     */
    DEFAULT = '39',
}
