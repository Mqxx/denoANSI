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
    TO_COLUMN = 'G',

    /**
     * @desc Cursor to ending sequence
     * @default cursor.TO = 'H'
     */
    TO = 'H',

    /**
     * @desc Cursor home ending sequence
     * @default cursor.HOME = 'H'
     */
    HOME = 'H',
    
    /**
     * @desc Cursor get position ending sequence
     * @default cursor.GET_POSITION = 'n'
     */
    GET_POSITION = '6n',

    /**
     * @desc Cursor save position ending sequence
     * @default cursor.SAVE_POSITION = '7'
     */
    SAVE_POSITION = '7',

    /**
     * @desc Cursor restore position ending sequence
     * @default cursor.RESTORE_POSITION = '8'
     */
    RESTORE_POSITION = '8',

    /**
     * @desc Cursor restore position ending sequence
     * @default cursor.SHOW = '25h'
     */
    SHOW = '25h',

    /**
     * @desc Cursor restore position ending sequence
     * @default cursor.HIDE = '25l'
     */
    HIDE = '25l'
}
