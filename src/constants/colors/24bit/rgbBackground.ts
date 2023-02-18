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
     * `48;2`
     * 
     * @desc RGB background color
     */
    RGB = '48;2'
}
