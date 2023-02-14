/**
 * `<CSI>` `{color 1};{color 2};{color n}m`
 * 
 * @desc ANSI normal foreground colors
 * @readonly
 * @enum {string}
 */
export enum colors8NormalFG {
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

/**
 * `<CSI>` `{color 1};{color 2};{color n}m`
 * 
 * @desc ANSI normal background colors
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

/**
 * `<CSI>` `{color 1};{color 2};{color n}m`
 * 
 * @desc ANSI bright foreground colors
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

/**
 * `<CSI>` `{color 1};{color 2};{color n}m`
 *
 * @desc ANSI bright background colors
 * @readonly
 * @enum {string}
*/
export enum colors8BrightBG {
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

// TODO // TODO // TODO // TODO // TODO // TODO // TODO // TODO // TODO // TODO // TODO // TODO // TODO // TODO // TODO // TODO //



export enum colors256FG {

    /**
     * `<CSI>` `38;5;`
     * 
     * @desc Foreground
     */
    FG = '38;5;',
}

export enum colors256BG {

    /**
     * `<CSI>` `48;5;`
     * 
     * @desc Background
     */
    DARK_VOID = '48;5;'
}
