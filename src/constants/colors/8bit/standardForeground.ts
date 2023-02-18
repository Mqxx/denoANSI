/**
 * @desc ANSI 8-Bit foreground colors standard
 * @readonly
 * @example
 * 
 * '<CSI>{hex 1};{hex 2};{hex n}m'
 * 
 * @enum {string}
 */
export enum standardForeground {

    /**
     * `38;5;0`
     * 
     * @desc Foreground #000000
     */
    X000000 = '38;5;0',

    /**
     * `38;5;1`
     * 
     * @desc Foreground #800000
     */
    X800000 = '38;5;1',

    /**
     * `38;5;2`
     * 
     * @desc Foreground #008000
     */
    X008000 = '38;5;2',

    /**
     * `38;5;3`
     * 
     * @desc Foreground #808000
     */
    X808000 = '38;5;3',

    /**
     * `38;5;4`
     * 
     * @desc Foreground #000080
     */
    X000080 = '38;5;4',

    /**
     * `38;5;5`
     * 
     * @desc Foreground #800080
     */
    X800080 = '38;5;5',

    /**
     * `38;5;6`
     * 
     * @desc Foreground #008080
     */
    X008080 = '38;5;6',

    /**
     * `38;5;7`
     * 
     * @desc Foreground #C0C0C0
     */
    XC0C0C0 = '38;5;7',

    /**
     * `38;5;8`
     * 
     * @desc Foreground #808080
     */
    X808080 = '38;5;8',

    /**
     * `38;5;9`
     * 
     * @desc Foreground #FF0000
     */
    XFF0000 = '38;5;9',

    /**
     * `38;5;10`
     * 
     * @desc Foreground #00FF00
     */
    X00FF00 = '38;5;10',

    /**
     * `38;5;11`
     * 
     * @desc Foreground #FFFF00
     */
    XFFFF00 = '38;5;11',

    /**
     * `38;5;12`
     * 
     * @desc Foreground #0000FF
     */
    X0000FF = '38;5;12',

    /**
     * `38;5;13`
     * 
     * @desc Foreground #FF00FF
     */
    XFF00FF = '38;5;13',

    /**
     * `38;5;14`
     * 
     * @desc Foreground #00FFFF
     */
    X00FFFF = '38;5;14',

    /**
     * `38;5;15`
     * 
     * @desc Foreground #FFFFFF
     */
    XFFFFFF = '38;5;15'


}
