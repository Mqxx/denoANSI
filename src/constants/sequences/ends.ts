/**
 * ANSI ending sequences
 * 
 * @desc ANSI ending sequences
 * @readonly
 * @enum {string}
 */
export enum ends {
    /**
     * @desc Cursor up ending sequence
     * @default ends.CURSOR_UP = 'A'
     */
    CURSOR_UP = 'A',

    /**
     * @desc Cursor down ending sequence
     * @default ends.CURSOR_DOWN = 'B'
     */
    CURSOR_DOWN = 'B',

    /**
     * @desc Cursor right ending sequence
     * @default ends.CURSOR_RIGHT = 'C'
     */
    CURSOR_RIGHT = 'C',

    /**
     * @desc Cursor left ending sequence
     * @default ends.CURSOR_LEFT = 'D'
     */
    CURSOR_LEFT = 'D',

    /**
     * @desc Cursor down start ending sequence
     * @default ends.CURSOR_DOWN_START = 'E'
     */
    CURSOR_DOWN_START = 'E',

    /**
     * @desc Cursor up start ending sequence
     * @default ends.CURSOR_UP_START = 'F'
     */
    CURSOR_UP_START = 'F',

    /**
     * @desc Cursor column ending sequence
     * @default ends.CURSOR_COLUMN = 'G'
     */
    CURSOR_COLUMN = 'G',

    /**
     * @desc Cursor to ending sequence
     * @default ends.CURSOR_TO = 'H'
     */
    CURSOR_TO = 'H',

    /**
     * @desc Display ending sequence
     * @default ends.DISPLAY = 'J'
     */
    DISPLAY = 'J',

    /**
     * @desc Line ending sequence
     * @default ends.LINE = 'K'
     */
    LINE = 'K',

    /**
     * @desc Scroll up ending sequence
     * @default ends.SCROLL_UP = 'S'
     */
    SCROLL_UP = 'S',

    /**
     * @desc Scroll down ending sequence
     * @default ends.SCROLL_DOWN = 'T'
     */
    SCROLL_DOWN = 'T',
    
    /**
     * @desc Color ending sequence
     * @default ends.COLOR = 'm'
     */
    COLOR = 'm',

    /**
     * @desc Format ending sequence
     * @default ends.FORMAT = 'm'
     */
    FORMAT = 'm',

    /**
     * @desc Cursor get position ending sequence
     * @default ends.CURSOR_GET_POSITION = 'n'
     */
    CURSOR_GET_POSITION = 'n',

    /**
     * @desc Cursor save position ending sequence
     * @default ends.CURSOR_SAVE_POSITION = 's'
     */
    CURSOR_SAVE_POSITION = 's',

    /**
     * @desc Cursor restore position ending sequence
     * @default ends.CURSOR_RESTORE_POSITION = 'u'
     */
    CURSOR_RESTORE_POSITION = 'u',

    /**
     * @desc Cursor restore position ending sequence
     * @default ends.CURSOR_SHOW = 'h'
     */
    CURSOR_SHOW = 'h',

    /**
     * @desc Cursor restore position ending sequence
     * @default ends.CURSOR_HIDE = 'l'
     */
    CURSOR_HIDE = 'l'
}
