/**
 * ANSI formats
 * 
 * @desc ANSI text format codes
 * @readonly
 * @enum {string}
 */
export enum formats {
    /**
     * @desc Reset all formats
     * @default formats.RESET = '0'
     */
    RESET = '0',

    /**
     * @desc Bold format
     * @default formats.BOLD = '1'
     */
    BOLD = '1',

    /**
     * @desc Dim format
     * @default formats.DIM = '2'
     */
    DIM = '2',
    
    /**
     * @desc Italic format
     * @default formats.ITALIC = '3'
     */
    ITALIC = '3',

    /**
     * @desc Underline format
     * @default formats.UNDERLINE = '4'
     */
    UNDERLINE = '4',

    /**
     * @desc Blinking format
     * @default formats.BLINKING = '5'
     */
    BLINKING = '5',

    /**
     * @desc Blinking rapid format
     * @default formats.BLINKING_RAPID = '6'
     */
    BLINKING_RAPID = '6',

    /**
     * @desc Inverse format
     * @default formats.INVERSE = '7'
     */
    INVERSE = '7',

    /**
     * @desc Hidden format
     * @default formats.HIDDEN = '8'
     */
    HIDDEN = '8',

    /**
     * @desc Strikethrough format
     * @default formats.STRIKETHROUGH = '9'
     */
    STRIKETHROUGH = '9',

    /**
     * @desc Font default format
     * @default formats.FONT_DEFAULT = '10'
     */
    FONT_DEFAULT = '10',

    /**
     * @desc Font alternative 1 format
     * @default formats.FONT_ALTERNATIVE_1 = '11'
     */
    FONT_ALTERNATIVE_1 = '11',
    
    /**
     * @desc Font alternative 2 format
     * @default formats.FONT_ALTERNATIVE_2 = '12'
     */
    FONT_ALTERNATIVE_2 = '12',

    /**
     * @desc Font alternative 3 format
     * @default formats.FONT_ALTERNATIVE_3 = '13'
     */
    FONT_ALTERNATIVE_3 = '13',

    /**
     * @desc Font alternative 4 format
     * @default formats.FONT_ALTERNATIVE_4 = '14'
     */
    FONT_ALTERNATIVE_4 = '14',

    /**
     * @desc Font alternative 5 format
     * @default formats.FONT_ALTERNATIVE_5 = '15'
     */
    FONT_ALTERNATIVE_5 = '15',

    /**
     * @desc Font alternative 6 format
     * @default formats.FONT_ALTERNATIVE_6 = '16'
     */
    FONT_ALTERNATIVE_6 = '16',

    /**
     * @desc Font alternative 7 format
     * @default formats.FONT_ALTERNATIVE_7 = '17'
     */
    FONT_ALTERNATIVE_7 = '17',

    /**
     * @desc Font alternative 8 format
     * @default formats.FONT_ALTERNATIVE_8 = '18'
     */
    FONT_ALTERNATIVE_8 = '18',

    /**
     * @desc Font alternative 9 format
     * @default formats.FONT_ALTERNATIVE_9 = '19'
     */
    FONT_ALTERNATIVE_9 = '19',

    /**
     * @desc Fractur format
     * @default formats.FRACTUR = '20'
     */
    FRACTUR = '20',

    /**
     * @desc Underline double format
     * @default formats.UNDERLINE_DOUBLE = '21'
     */
    UNDERLINE_DOUBLE = '21',

    /**
     * @desc Reset bold format
     * @default formats.BOLD_RESET = '22'
     */
    BOLD_RESET = '22',

    /**
     * @desc Reset dim format
     * @default formats.DIM_RESET = '22'
     */
    DIM_RESET = '22',

    /**
     * @desc Reset italic format
     * @default formats.ITALIC_RESET = '23'
     */
    ITALIC_RESET = '23',

    /**
     * @desc Reset underline format
     * @default formats.UNDERLINE_RESET = '24'
     */
    UNDERLINE_RESET = '24',

    /**
     * @desc Reset blinking format
     * @default formats.BLINKING_RESET = '25'
     */
    BLINKING_RESET = '25',

    /**
     * @desc Proportional spacing format
     * @default formats.PROPORTINAL_SPACING = '26'
     */
    PROPORTINAL_SPACING = '26',
    
    /**
     * @desc Reset inverse format
     * @default formats.INVERSE_RESET = '27'
     */
    INVERSE_RESET = '27',
    
    /**
     * @desc Reset hidden format
     * @default formats.HIDDEN_RESET = '28'
     */
    HIDDEN_RESET = '28',
    
    /**
     * @desc Reset strikethrough format
     * @default formats.STRIKETHROUGH_RESET = '29'
     */
    STRIKETHROUGH_RESET = '29',

    /**
     * @desc Reset proportional spacing format
     * @default formats.PROPORTINAL_SPACING_RESET = '50'
     */
    PROPORTINAL_SPACING_RESET = '50',

    /**
     * @desc Framed format
     * @default formats.FRAMED = '51'
     */
    FRAMED = '51',

    /**
     * @desc Encircled format
     * @default formats.ENCIRCLED = '52'
     */
    ENCIRCLED = '52',

    /**
     * @desc Overline format
     * @default formats.OVERLINE = '53'
     */
    OVERLINE = '53',

    /**
     * @desc Reset framed format
     * @default formats.FRAMED_RESET = '54'
     */
    FRAMED_RESET = '54',

    /**
     * @desc Reset encircled format
     * @default formats.ENCIRCLED_RESET = '54'
     */
    ENCIRCLED_RESET = '54',

    /**
     * @desc Reset overline format
     * @default formats.OVERLINE_RESET = '55'
     */
    OVERLINE_RESET = '55',

    /**
     * @desc Underline color format
     * @default formats.UNDERLINE_COLOR = '58'
     */
    UNDERLINE_COLOR = '58',

    /**
     * @desc Reset underline color format
     * @default formats.UNDERLINE_COLOR_RESET = '59'
     */
    UNDERLINE_COLOR_RESET = '59'
}
