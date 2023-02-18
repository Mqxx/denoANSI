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
     * `38;2`
     * 
     * @desc RGB foreground color
     */
    RGB = '38;2'
}
