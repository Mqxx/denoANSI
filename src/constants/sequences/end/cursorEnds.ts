/**
 * @desc ANSI cursor sequence
 * @readonly
 * @enum {string}
 */
export enum cursorEnds {
    /**
     * @desc Cursor up ending sequence
     * @default cursor.UP = 'A'
     */
    UP = 'A',

    /**
     * @desc Cursor down ending sequence
     * @default cursor.DOWN = 'B'
     */
    DOWN = 'B',

    /**
     * @desc Cursor right ending sequence
     * @default cursor.RIGHT = 'C'
     */
    RIGHT = 'C',

    /**
     * @desc Cursor left ending sequence
     * @default cursor.LEFT = 'D'
     */
    LEFT = 'D',

    /**
     * @desc Cursor down start ending sequence
     * @default cursor.DOWN_START = 'E'
     */
    DOWN_START = 'E',

    /**
     * @desc Cursor up start ending sequence
     * @default cursor.UP_START = 'F'
     */
    UP_START = 'F',

    /**
     * @desc Cursor column ending sequence
     * @default cursor.COLUMN = 'G'
     */
    COLUMN = 'G',

    /**
     * @desc Cursor to ending sequence
     * @default cursor.TO = 'H'
     */
    TO = 'H',
    
    /**
     * @desc Cursor get position ending sequence
     * @default cursor.GET_POSITION = 'n'
     */
    GET_POSITION = '6n',

    /**
     * @desc Cursor save position ending sequence
     * @default cursor.SAVE_POSITION = 's'
     */
    SAVE_POSITION = 's',

    /**
     * @desc Cursor restore position ending sequence
     * @default cursor.RESTORE_POSITION = 'u'
     */
    RESTORE_POSITION = 'u',

    /**
     * @desc Cursor restore position ending sequence
     * @default cursor.SHOW = 'h'
     */
    SHOW = 'h',

    /**
     * @desc Cursor restore position ending sequence
     * @default cursor.HIDE = 'l'
     */
    HIDE = 'l'
}
