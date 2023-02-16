/**
 * `<CSI>` `48;5;{hex 1};{hex 2};{hex n}m`
 * 
 * @desc ANSI 8-Bit background colors standard
 * @readonly
 * @enum {string}
 */
export enum standardBG {

    /**
     * `<CSI>` `48;5;0`
     * 
     * @desc Foreground #000000
     */
    X000000 = '48;5;0',

    /**
     * `<CSI>` `48;5;1`
     * 
     * @desc Foreground #800000
     */
    X800000 = '48;5;1',

    /**
     * `<CSI>` `48;5;2`
     * 
     * @desc Foreground #008000
     */
    X008000 = '48;5;2',

    /**
     * `<CSI>` `48;5;3`
     * 
     * @desc Foreground #808000
     */
    X808000 = '48;5;3',

    /**
     * `<CSI>` `48;5;4`
     * 
     * @desc Foreground #000080
     */
    X000080 = '48;5;4',

    /**
     * `<CSI>` `48;5;5`
     * 
     * @desc Foreground #800080
     */
    X800080 = '48;5;5',

    /**
     * `<CSI>` `48;5;6`
     * 
     * @desc Foreground #008080
     */
    X008080 = '48;5;6',

    /**
     * `<CSI>` `48;5;7`
     * 
     * @desc Foreground #C0C0C0
     */
    XC0C0C0 = '48;5;7',

    /**
     * `<CSI>` `48;5;8`
     * 
     * @desc Foreground #808080
     */
    X808080 = '48;5;8',

    /**
     * `<CSI>` `48;5;9`
     * 
     * @desc Foreground #FF0000
     */
    XFF0000 = '48;5;9',

    /**
     * `<CSI>` `48;5;10`
     * 
     * @desc Foreground #00FF00
     */
    X00FF00 = '48;5;10',

    /**
     * `<CSI>` `48;5;11`
     * 
     * @desc Foreground #FFFF00
     */
    XFFFF00 = '48;5;11',

    /**
     * `<CSI>` `48;5;12`
     * 
     * @desc Foreground #0000FF
     */
    X0000FF = '48;5;12',

    /**
     * `<CSI>` `48;5;13`
     * 
     * @desc Foreground #FF00FF
     */
    XFF00FF = '48;5;13',

    /**
     * `<CSI>` `48;5;14`
     * 
     * @desc Foreground #00FFFF
     */
    X00FFFF = '48;5;14',

    /**
     * `<CSI>` `48;5;15`
     * 
     * @desc Foreground #FFFFFF
     */
    XFFFFFF = '48;5;15'


}
