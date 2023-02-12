/**
 * ANSI codes
 * @enum {string}
 */
export enum codes {
    /**
     * `\x07` | `\a`
     * 
     * @desc Terminal bell
     * 
     */
    BEL = '\x07',
    /**
     * `\x08` | `\b`
     * 
     * @desc Backspace
     */
    BS = '\x08',
    /**
     * `\x09` | `\t`
     * 
     * @desc Horizontal TAB
     */
    HT = '\x09',
    /**
     * `\x0A` | `\n`
     * 
     * @desc Linefeed (newline)
     */
    LF = '\x0A',
    /**
     * `\x0B` | `\v`
     * 
     * @desc Vertical TAB
     */
    VT = '\x0B',
    /**
     * `\x0C` | `\f`
     * 
     * @desc Formfeed
     */
    FF = '\x0C',
    /**
     * `\x0D` | `\r`
     * 
     * @desc Carriage return (linestart)
     */
    CR = '\x0D',
    /**
     * `\x1B` | `\e*`
     * 
     * <i>*not guaranteed to work<i>
     * 
     * @desc Escape character
     */
    ESC = '\x1B',
    /**
     * `\x7F`
     * 
     * @desc Delete character
     */
    DEL = '\x7F'
}
