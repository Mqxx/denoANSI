/**
 * @desc ANSI scroll sequences
 * @readonly
 * @enum {string}
 */
export enum scroll {
    /**
     * @desc Scroll up ending sequence
     * @default scroll.UP = 'S'
     */
    UP = 'S',

    /**
     * @desc Scroll down ending sequence
     * @default scroll.DOWN = 'T'
     */
    DOWN = 'T'
}
