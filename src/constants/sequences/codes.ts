/**
 * @desc ANSI control codes
 * @readonly
 * @enum {string}
 */
export enum codes {
    /**
     * @desc Escape character `\e*`
     * 
     * *\*not guaranteed to work in all languages and compilers*
     * @default codes.ESC = '\x1B'
     */
    ESC = '\x1B',

    /**
     * @desc Terminal bell `\a`
     * @default codes.BEL = '\x07'
     */
    BEL = '\x07',

    /**
     * @desc Backspace `\b`
     * @default codes.BS = '\x08'
     */
    BS = '\x08',

    /**
     * @desc Horizontal TAB `\t`
     * @default codes.HT = '\x09'
     */
    HT = '\x09',

    /**
     * @desc Linefeed (newline) `\n`
     * @default codes.LF = '\x0A'
     */
    LF = '\x0A',

    /**
     * @desc Vertical TAB `\v`
     * @default codes.VT = '\x0B'
     */
    VT = '\x0B',

    /**
     * @desc Formfeed `\f`
     * @default codes.FF = '\x0C'
     */
    FF = '\x0C',

    /**
     * @desc Carriage return (linestart) `\r`
     * @default codes.CR = '\x0D'
     */
    CR = '\x0D',

    /**
     * @desc Delete character
     * @default codes.DEL = '\x7F'
     */
    DEL = '\x7F'
}
