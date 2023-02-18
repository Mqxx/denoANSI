/**
 * @desc ANSI control general
 * @readonly
 * @enum {string}
 */
export enum general {
    /**
     * @desc Escape character `\e*`
     * 
     * *\*not guaranteed to work in all languages and compilers*
     * @default general.ESC = '\x1B'
     */
    ESC = '\x1B',

    /**
     * @desc Delete character
     * @default general.DEL = '\x7F'
     */
    DEL = '\x7F',

    /**
     * @desc Terminal bell `\a`
     * @default general.BEL = '\x07'
     */
    BEL = '\x07',

    /**
     * @desc Backspace `\b`
     * @default general.BS = '\x08'
     */
    BS = '\x08',

    /**
     * @desc Horizontal TAB `\t`
     * @default general.HT = '\x09'
     */
    HT = '\x09',

    /**
     * @desc Linefeed (newline) `\n`
     * @default general.LF = '\x0A'
     */
    LF = '\x0A',

    /**
     * @desc Vertical TAB `\v`
     * @default general.VT = '\x0B'
     */
    VT = '\x0B',

    /**
     * @desc Formfeed `\f`
     * @default general.FF = '\x0C'
     */
    FF = '\x0C',

    /**
     * @desc Carriage return (linestart) `\r`
     * @default general.CR = '\x0D'
     */
    CR = '\x0D'
}
