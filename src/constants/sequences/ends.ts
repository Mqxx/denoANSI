/**
 * ANSI ending sequences
 * 
 * @desc ANSI ending control sequences
 * @readonly
 * @enum {string}
 */
export enum ends {
    /**
     * `A`
     * 
     * @desc Cursor up ending sequence
     */
    CURSOR_UP = 'A',

    /**
     * `B`
     * 
     * @desc Cursor down ending sequence
     */
    CURSOR_DOWN = 'B',

    /**
     * `C`
     * 
     * @desc Cursor right ending sequence
     */
    CURSOR_RIGHT = 'C',

    /**
     * `D`
     * 
     * @desc Cursor left ending sequence
     */
    CURSOR_LEFT = 'D',

    /**
     * `E`
     * 
     * @desc Cursor down start ending sequence
     */
    CURSOR_DOWN_START = 'E',

    /**
     * `F`
     * 
     * @desc Cursor up start ending sequence
     */
    CURSOR_UP_START = 'F',

    /**
     * `G`
     * 
     * @desc Cursor column ending sequence
     */
    CURSOR_COLUMN = 'G',

    /**
     * `H`
     * 
     * @desc Cursor to ending sequence
     */
    CURSOR_TO = 'H',

    /**
     * `J`
     * 
     * @desc Display ending sequence
     */
    DISPLAY = 'J',

    /**
     * `K`
     * 
     * @desc Line ending sequence
     */
    LINE = 'K',

    /**
     * `S`
     * 
     * @desc Scroll up ending sequence
     */
    SCROLL_UP = 'S',

    /**
     * `T`
     * 
     * @desc Scroll down ending sequence
     */
    SCROLL_DOWN = 'T',

    /**
     * `n`
     * 
     * @desc Cursor get position ending sequence
     */
    CURSOR_GET_POSITION = 'n',

    /**
     * `s`
     * 
     * @desc Cursor save position ending sequence
     */
    CURSOR_SAVE_POSITION = 's',

    /**
     * `u`
     * 
     * @desc Cursor restore position ending sequence
     */
    CURSOR_RESTORE_POSITION = 'u',

    /**
     * `m`
     * 
     * @desc Color ending sequence
     */
    COLOR = 'm',

    /**
     * `m`
     * 
     * @desc Format ending sequence
     */
    FORMAT = 'm'
}
