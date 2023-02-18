/**
 * @desc ANSI text sequence
 * @readonly
 * @enum {string}
 */
export enum text {
    /**
     * @desc Escape character `\e*`
     * 
     * *\*not guaranteed to work in all languages and compilers*
     * @default text.ESC = '\x1B'
     */
    ESC = '\x1B',

    /**
     * @desc Delete character
     * @default text.DEL = '\x7F'
     */
    DEL = '\x7F',

    /**
     * @desc Terminal bell `\a`
     * @default text.BEL = '\x07'
     */
    BEL = '\x07',

    /**
     * @desc Backspace `\b`
     * @default text.BS = '\x08'
     */
    BS = '\x08',

    /**
     * @desc Horizontal TAB `\t`
     * @default text.HT = '\x09'
     */
    HT = '\x09',

    /**
     * @desc Linefeed (newline) `\n`
     * @default text.LF = '\x0A'
     */
    LF = '\x0A',

    /**
     * @desc Vertical TAB `\v`
     * @default text.VT = '\x0B'
     */
    VT = '\x0B',

    /**
     * @desc Formfeed `\f`
     * @default text.FF = '\x0C'
     */
    FF = '\x0C',

    /**
     * @desc Carriage return (linestart) `\r`
     * @default text.CR = '\x0D'
     */
    CR = '\x0D'
}
