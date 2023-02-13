/**
 * ANSI graphics mode
 * @enum {string}
 */
export enum colors {
    /**
     * `<CSI>` `0`
     * 
     * @desc Reset foreground
     */
    RESET_FG = '0',

    /**
     * `<CSI>` `0`
     * 
     * @desc Reset background
     */
    RESET_BG = '0',

    /**
     * `<CSI>` `30`
     * 
     * @desc Black foreground
     */
    BLACK_FG = '30',

    /**
     * `<CSI>` `31`
     * 
     * @desc Red foreground
     */
    RED_FG = '31',

    /**
     * `<CSI>` `32`
     * 
     * @desc Green foreground
     */
    GREEN_FG = '32',

    /**
     * `<CSI>` `33`
     * 
     * @desc Yellow foreground
     */
    YELLOW_FG = '33',

    /**
     * `<CSI>` `34`
     * 
     * @desc Blue foreground
     */
    BLUE_FG = '34',

    /**
     * `<CSI>` `35`
     * 
     * @desc Magenta foreground
     */
    MAGENTA_FG = '35',

    /**
     * `<CSI>` `36`
     * 
     * @desc Cyan foreground
     */
    CYAN_FG = '36',

    /**
     * `<CSI>` `37`
     * 
     * @desc White foreground
     */
    WHITE_FG = '37',

    /**
     * `<CSI>` `39`
     * 
     * @desc White foreground
     */
    DEFAULT_FG = '39',

    /**
     * `<CSI>` `40`
     * 
     * @desc Black background
     */
    BLACK_BG = '40',

    /**
     * `<CSI>` `41`
     * 
     * @desc Red background
     */
    RED_BG = '41',

    /**
     * `<CSI>` `42`
     * 
     * @desc Green background
     */
    GREEN_BG = '42',

    /**
     * `<CSI>` `43`
     * 
     * @desc Yellow background
     */
    YELLOW_BG = '43',

    /**
     * `<CSI>` `44`
     * 
     * @desc Blue background
     */
    BLUE_BG = '44',

    /**
     * `<CSI>` `45`
     * 
     * @desc Magenta background
     */
    MAGENTA_BG = '45',

    /**
     * `<CSI>` `46`
     * 
     * @desc Cyan background
     */
    CYAN_BG = '46',

    /**
     * `<CSI>` `47`
     * 
     * @desc White background
     */
    WHITE_BG = '47',

    /**
     * `<CSI>` `49`
     * 
     * @desc White background
     */
    DEFAULT_BG = '49'

    
    
}
