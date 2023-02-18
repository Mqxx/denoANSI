/**
 * @desc ANSI 8-Bit background colors standard
 * @readonly
 * @example
 * 
 * '<CSI>{hex 1};{hex 2};{hex n}m'
 * 
 * @enum {string}
 */
export enum standardBackground {
    /**
     * @desc Background #000000
     * @default standardBackground.X000000 = '48;5;0'
     */
    X000000 = '48;5;0',

    /**
     * @desc Background #800000
     * @default standardBackground.X800000 = '48;5;1'
     */
    X800000 = '48;5;1',

    /**
     * @desc Background #008000
     * @default standardBackground.X008000 = '48;5;2'
     */
    X008000 = '48;5;2',

    /**
     * @desc Background #808000
     * @default standardBackground.X808000 = '48;5;3'
     */
    X808000 = '48;5;3',

    /**
     * @desc Background #000080
     * @default standardBackground.X000080 = '48;5;4'
     */
    X000080 = '48;5;4',

    /**
     * @desc Background #800080
     * @default standardBackground.X800080 = '48;5;5'
     */
    X800080 = '48;5;5',

    /**
     * @desc Background #008080
     * @default standardBackground.X008080 = '48;5;6'
     */
    X008080 = '48;5;6',

    /**
     * @desc Background #C0C0C0
     * @default standardBackground.XC0C0C0 = '48;5;7'
     */
    XC0C0C0 = '48;5;7',

    /**
     * @desc Background #808080
     * @default standardBackground.X808080 = '48;5;8'
     */
    X808080 = '48;5;8',

    /**
     * @desc Background #FF0000
     * @default standardBackground.XFF0000 = '48;5;9'
     */
    XFF0000 = '48;5;9',

    /**
     * @desc Background #00FF00
     * @default standardBackground.X00FF00 = '48;5;10'
     */
    X00FF00 = '48;5;10',

    /**
     * @desc Background #FFFF00
     * @default standardBackground.XFFFF00 = '48;5;11'
     */
    XFFFF00 = '48;5;11',

    /**
     * @desc Background #0000FF
     * @default standardBackground.X0000FF = '48;5;12'
     */
    X0000FF = '48;5;12',

    /**
     * @desc Background #FF00FF
     * @default standardBackground.XFF00FF = '48;5;13'
     */
    XFF00FF = '48;5;13',

    /**
     * @desc Background #00FFFF
     * @default standardBackground.X00FFFF = '48;5;14'
     */
    X00FFFF = '48;5;14',

    /**
     * @desc Background #FFFFFF
     * @default standardBackground.XFFFFFF = '48;5;15'
     */
    XFFFFFF = '48;5;15'


}
