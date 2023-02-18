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
     * `48;5;0`
     * 
     * @desc Background #000000
     */
    X000000 = '48;5;0',

    /**
     * `48;5;1`
     * 
     * @desc Background #800000
     */
    X800000 = '48;5;1',

    /**
     * `48;5;2`
     * 
     * @desc Background #008000
     */
    X008000 = '48;5;2',

    /**
     * `48;5;3`
     * 
     * @desc Background #808000
     */
    X808000 = '48;5;3',

    /**
     * `48;5;4`
     * 
     * @desc Background #000080
     */
    X000080 = '48;5;4',

    /**
     * `48;5;5`
     * 
     * @desc Background #800080
     */
    X800080 = '48;5;5',

    /**
     * `48;5;6`
     * 
     * @desc Background #008080
     */
    X008080 = '48;5;6',

    /**
     * `48;5;7`
     * 
     * @desc Background #C0C0C0
     */
    XC0C0C0 = '48;5;7',

    /**
     * `48;5;8`
     * 
     * @desc Background #808080
     */
    X808080 = '48;5;8',

    /**
     * `48;5;9`
     * 
     * @desc Background #FF0000
     */
    XFF0000 = '48;5;9',

    /**
     * `48;5;10`
     * 
     * @desc Background #00FF00
     */
    X00FF00 = '48;5;10',

    /**
     * `48;5;11`
     * 
     * @desc Background #FFFF00
     */
    XFFFF00 = '48;5;11',

    /**
     * `48;5;12`
     * 
     * @desc Background #0000FF
     */
    X0000FF = '48;5;12',

    /**
     * `48;5;13`
     * 
     * @desc Background #FF00FF
     */
    XFF00FF = '48;5;13',

    /**
     * `48;5;14`
     * 
     * @desc Background #00FFFF
     */
    X00FFFF = '48;5;14',

    /**
     * `48;5;15`
     * 
     * @desc Background #FFFFFF
     */
    XFFFFFF = '48;5;15'


}
