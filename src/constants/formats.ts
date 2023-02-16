/**
 * ANSI formats
 * 
 * @desc ANSI text format codes
 * @readonly
 * @enum {string}
 */
export enum formats {
    /**
     * `<CSI>` `0`
     * 
     * @desc Reset all formats
     */
    RESET = '0',

    /**
     * `<CSI>` `1`
     * 
     * @desc Bold format
     */
    BOLD = '1',

    /**
     * `<CSI>` `22`
     * 
     * @desc Reset bold format
     */
    BOLD_RESET = '22',

    /**
     * `<CSI>` `2`
     * 
     * @desc Dim format
     */
    DIM = '2',
    
    /**
     * `<CSI>` `22`
     * 
     * @desc Reset dim format
     */

    DIM_RESET = '22',
    
    /**
     * `<CSI>` `3`
     * 
     * @desc Italic format
     */
    ITALIC = '3',
    
    /**
     * `<CSI>` `23`
     * 
     * @desc Reset italic format
     */
    ITALIC_RESET = '23',

    /**
     * `<CSI>` `4`
     * 
     * @desc Underline format
     */
    UNDERLINE = '4',
    
    /**
     * `<CSI>` `24`
     * 
     * @desc Reset underline format
     */
    UNDERLINE_RESET = '24',

    /**
     * `<CSI>` `5`
     * 
     * @desc Blinking format
     */
    BLINKING = '5',
    
    /**
     * `<CSI>` `25`
     * 
     * @desc Reset blinking format
     */
    BLINKING_RESET = '25',

    /**
     * `<CSI>` `7`
     * 
     * @desc Inverse format
     */
    INVERSE = '7',
    
    /**
     * `<CSI>` `25`
     * 
     * @desc Reset inverse format
     */
    INVERSE_RESET = '27',

    /**
     * `<CSI>` `8`
     * 
     * @desc Hidden format
     */
    HIDDEN = '8',
    
    /**
     * `<CSI>` `28`
     * 
     * @desc Reset hidden format
     */
    HIDDEN_RESET = '28',

    /**
     * `<CSI>` `8`
     * 
     * @desc Strikethrough format
     */
    STRIKETHROUGH = '9',
    
    /**
     * `<CSI>` `29`
     * 
     * @desc Reset strikethrough format
     */
    STRIKETHROUGH_RESET = '29',
    
}
