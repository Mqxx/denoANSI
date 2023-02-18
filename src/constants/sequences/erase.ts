/**
 * @desc ANSI erase ending sequences
 * @readonly
 * @enum {string}
 */
export enum formats {
    /**
     * @desc Display ending sequence
     * @default formats.DISPLAY = 'J'
     */
    DISPLAY = 'J',

    /**
     * @desc Line ending sequence
     * @default formats.LINE = 'K'
     */
    LINE = 'K'
}
