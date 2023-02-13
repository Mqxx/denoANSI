/**
 * ANSI graphics mode
 * @enum {string}
 */
export enum graphicsModes {
    /**
     * `<CSI>` `0m`
     * 
     * @desc Reset all modes
     */
    RESET = '0m',

    /**
     * `<CSI>` `1m`
     * 
     * @desc Bold mode
     */
    BOLD = '1m',

    /**
     * `<CSI>` `22m`
     * 
     * @desc Reset bold mode
     */
    BOLD_RESET = '22m',

    /**
     * `<CSI>` `2m`
     * 
     * @desc Dim mode
     */
    DIM = '2m',
    
    /**
     * `<CSI>` `22m`
     * 
     * @desc Reset dim mode
     */

    DIM_RESET = '22m',
    
    /**
     * `<CSI>` `3m`
     * 
     * @desc Italic mode
     */
    ITALIC = '3m',
    
    /**
     * `<CSI>` `23m`
     * 
     * @desc Reset italic mode
     */
    ITALIC_RESET = '23m',

    /**
     * `<CSI>` `4m`
     * 
     * @desc Underline mode
     */
    UNDERLINE = '4m',
    
    /**
     * `<CSI>` `24m`
     * 
     * @desc Reset underline mode
     */
    UNDERLINE_RESET = '24m',

    /**
     * `<CSI>` `5m`
     * 
     * @desc Blinking mode
     */
    BLINKING = '5m',
    
    /**
     * `<CSI>` `25m`
     * 
     * @desc Reset blinking mode
     */
    BLINKING_RESET = '25m',

    /**
     * `<CSI>` `7m`
     * 
     * @desc Inverse mode
     */
    INVERSE = '7m',
    
    /**
     * `<CSI>` `25m`
     * 
     * @desc Reset inverse mode
     */
    INVERSE_RESET = '27m',

    /**
     * `<CSI>` `8m`
     * 
     * @desc Hidden mode
     */
    HIDDEN = '8m',
    
    /**
     * `<CSI>` `28m`
     * 
     * @desc Reset hidden mode
     */
    HIDDEN_RESET = '28m',

    /**
     * `<CSI>` `8m`
     * 
     * @desc Strikethrough mode
     */
    STRIKETHROUGH = '9m',
    
    /**
     * `<CSI>` `29m`
     * 
     * @desc Reset strikethrough mode
     */
    STRIKETHROUGH_RESET = '29m',
    
}
