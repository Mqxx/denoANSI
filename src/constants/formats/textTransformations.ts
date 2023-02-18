/**
 * @desc ANSI text transformation codes
 * @readonly
 * @enum {string}
 */
export enum textTransformations {
    /**
     * @desc Reset all text transformations
     * @default textTransformations.RESET = '0'
     */
    RESET = '0',

    /**
     * @desc Blinking text transformation
     * @default textTransformations.BLINKING = '5'
     */
    BLINKING = '5',

    /**
     * @desc Blinking rapid text transformation
     * @default textTransformations.BLINKING_RAPID = '6'
     */
    BLINKING_RAPID = '6',

    /**
     * @desc Inverse text transformation
     * @default textTransformations.INVERSE = '7'
     */
    INVERSE = '7',

    /**
     * @desc Hidden text transformation
     * @default textTransformations.HIDDEN = '8'
     */
    HIDDEN = '8',

    /**
     * @desc Reset blinking text transformation
     * @default textTransformations.BLINKING_RESET = '25'
     */
    BLINKING_RESET = '25',
    
    /**
     * @desc Reset inverse text transformation
     * @default textTransformations.INVERSE_RESET = '27'
     */
    INVERSE_RESET = '27',
    
    /**
     * @desc Reset hidden text transformation
     * @default textTransformations.HIDDEN_RESET = '28'
     */
    HIDDEN_RESET = '28',

    /**
     * @desc Framed text transformation
     * @default textTransformations.FRAMED = '51'
     */
    FRAMED = '51',

    /**
     * @desc Encircled text transformation
     * @default textTransformations.ENCIRCLED = '52'
     */
    ENCIRCLED = '52',

    /**
     * @desc Reset framed text transformation
     * @default textTransformations.FRAMED_RESET = '54'
     */
    FRAMED_RESET = '54',

    /**
     * @desc Reset encircled text transformation
     * @default textTransformations.ENCIRCLED_RESET = '54'
     */
    ENCIRCLED_RESET = '54'
}
