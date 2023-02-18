/**
 * @desc ANSI 24-Bit foreground color rgb
 * @readonly
 * @example
 * 
 * '<CSI>38;2;{r};{g};{b}m'
 * 
 * @enum {string}
 */
export enum rgbForeground {
    /**
     * @desc RGB foreground color
     * @default rgbForeground.RGB = '38;2'
     */
    RGB = '38;2'
}
