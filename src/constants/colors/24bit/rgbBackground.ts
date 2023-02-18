/**
 * @desc ANSI 24-Bit background color rgb
 * @readonly
 * @example
 * 
 * '<CSI>48;2;{r};{g};{b}m'
 * 
 * @enum {string}
 */
export enum rgbBackground {
    /**
     * @desc RGB background color
     * @default rgbBackground.RGB = '48;2'
     */
    RGB = '48;2'
}
