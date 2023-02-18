/**
 * @desc ANSI erase ending sequences
 * @readonly
 * @enum {string}
 */
export enum eraseEnds {
    /**
     * @desc Display ending sequence
     * @default erase.DISPLAY = 'J'
     */
    DISPLAY = 'J',

    /**
     * @desc Line ending sequence
     * @default erase.LINE = 'K'
     */
    LINE = 'K'
}
