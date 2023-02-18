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
     * @desc Foreground #000000
     * @default standardForeground.X000000 = '38;5;0'
     */
    X000000 = '38;5;0',

    /**
     * @desc Foreground #800000
     * @default standardForeground.X800000 = '38;5;1'
     */
    X800000 = '38;5;1',

    /**
     * @desc Foreground #008000
     * @default standardForeground.X008000 = '38;5;2'
     */
    X008000 = '38;5;2',

    /**
     * @desc Foreground #808000
     * @default standardForeground.X808000 = '38;5;3'
     */
    X808000 = '38;5;3',

    /**
     * @desc Foreground #000080
     * @default standardForeground.X000080 = '38;5;4'
     */
    X000080 = '38;5;4',

    /**
     * @desc Foreground #800080
     * @default standardForeground.X800080 = '38;5;5'
     */
    X800080 = '38;5;5',

    /**
     * @desc Foreground #008080
     * @default standardForeground.X008080 = '38;5;6'
     */
    X008080 = '38;5;6',

    /**
     * @desc Foreground #C0C0C0
     * @default standardForeground.XC0C0C0 = '38;5;7'
     */
    XC0C0C0 = '38;5;7',

    /**
     * @desc Foreground #808080
     * @default standardForeground.X808080 = '38;5;8'
     */
    X808080 = '38;5;8',

    /**
     * @desc Foreground #FF0000
     * @default standardForeground.XFF0000 = '38;5;9'
     */
    XFF0000 = '38;5;9',

    /**
     * @desc Foreground #00FF00
     * @default standardForeground.X00FF00 = '38;5;10'
     */
    X00FF00 = '38;5;10',

    /**
     * @desc Foreground #FFFF00
     * @default standardForeground.XFFFF00 = '38;5;11'
     */
    XFFFF00 = '38;5;11',

    /**
     * @desc Foreground #0000FF
     * @default standardForeground.X0000FF = '38;5;12'
     */
    X0000FF = '38;5;12',

    /**
     * @desc Foreground #FF00FF
     * @default standardForeground.XFF00FF = '38;5;13'
     */
    XFF00FF = '38;5;13',

    /**
     * @desc Foreground #00FFFF
     * @default standardForeground.X00FFFF = '38;5;14'
     */
    X00FFFF = '38;5;14',

    /**
     * @desc Foreground #FFFFFF
     * @default standardForeground.XFFFFFF = '38;5;15'
     */
    XFFFFFF = '38;5;15'


}
