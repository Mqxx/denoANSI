/**
 * `<CSI>` `48;5;{hex 1};{hex 2};{hex n}m`
 * 
 * @desc ANSI 8-Bit background colors normal
 * @readonly
 * @enum {string}
 */
export enum normalBG {
    
    /**
     * `<CSI>` `48;5;16`
     * 
     * @desc Background #000000
     */
    X000000 = '48;5;16',

    /**
     * `<CSI>` `48;5;17`
     * 
     * @desc Background #00005F
     */
    X00005F = '48;5;17',

    /**
     * `<CSI>` `48;5;18`
     * 
     * @desc Background #000087
     */
    X000087 = '48;5;18',

    /**
     * `<CSI>` `48;5;19`
     * 
     * @desc Background #0000AF
     */
    X0000AF = '48;5;19',

    /**
     * `<CSI>` `48;5;20`
     * 
     * @desc Background #0000D7
     */
    X0000D7 = '48;5;20',

    /**
     * `<CSI>` `48;5;21`
     * 
     * @desc Background #0000FF
     */
    X0000FF = '48;5;21',

    /**
     * `<CSI>` `48;5;22`
     * 
     * @desc Background #005F00
     */
    X005F00 = '48;5;22',

    /**
     * `<CSI>` `48;5;23`
     * 
     * @desc Background #005F5F
     */
    X005F5F = '48;5;23',

    /**
     * `<CSI>` `48;5;24`
     * 
     * @desc Background #005F87
     */
    X005F87 = '48;5;24',

    /**
     * `<CSI>` `48;5;25`
     * 
     * @desc Background #005FAF
     */
    X005FAF = '48;5;25',

    /**
     * `<CSI>` `48;5;26`
     * 
     * @desc Background #005FD7
     */
    X005FD7 = '48;5;26',

    /**
     * `<CSI>` `48;5;27`
     * 
     * @desc Background #005FFF
     */
    X005FFF = '48;5;27',

    /**
     * `<CSI>` `48;5;28`
     * 
     * @desc Background #008700
     */
    X008700 = '48;5;28',

    /**
     * `<CSI>` `48;5;29`
     * 
     * @desc Background #00875F
     */
    X00875F = '48;5;29',

    /**
     * `<CSI>` `48;5;30`
     * 
     * @desc Background #008787
     */
    X008787 = '48;5;30',

    /**
     * `<CSI>` `48;5;31`
     * 
     * @desc Background #0087AF
     */
    X0087AF = '48;5;31',

    /**
     * `<CSI>` `48;5;32`
     * 
     * @desc Background #0087D7
     */
    X0087D7 = '48;5;32',

    /**
     * `<CSI>` `48;5;33`
     * 
     * @desc Background #0087FF
     */
    X0087FF = '48;5;33',

    /**
     * `<CSI>` `48;5;34`
     * 
     * @desc Background #00AF00
     */
    X00AF00 = '48;5;34',

    /**
     * `<CSI>` `48;5;35`
     * 
     * @desc Background #00AF5F
     */
    X00AF5F = '48;5;35',

    /**
     * `<CSI>` `48;5;36`
     * 
     * @desc Background #00AF87
     */
    X00AF87 = '48;5;36',

    /**
     * `<CSI>` `48;5;37`
     * 
     * @desc Background #00AFAF
     */
    X00AFAF = '48;5;37',

    /**
     * `<CSI>` `48;5;38`
     * 
     * @desc Background #00AFD7
     */
    X00AFD7 = '48;5;38',

    /**
     * `<CSI>` `48;5;39`
     * 
     * @desc Background #00AFFF
     */
    X00AFFF = '48;5;39',

    /**
     * `<CSI>` `48;5;40`
     * 
     * @desc Background #00D700
     */
    X00D700 = '48;5;40',

    /**
     * `<CSI>` `48;5;41`
     * 
     * @desc Background #00D75F
     */
    X00D75F = '48;5;41',

    /**
     * `<CSI>` `48;5;42`
     * 
     * @desc Background #00D787
     */
    X00D787 = '48;5;42',

    /**
     * `<CSI>` `48;5;43`
     * 
     * @desc Background #00D7AF
     */
    X00D7AF = '48;5;43',

    /**
     * `<CSI>` `48;5;44`
     * 
     * @desc Background #00D7D7
     */
    X00D7D7 = '48;5;44',

    /**
     * `<CSI>` `48;5;45`
     * 
     * @desc Background #00D7FF
     */
    X00D7FF = '48;5;45',

    /**
     * `<CSI>` `48;5;46`
     * 
     * @desc Background #00FF00
     */
    X00FF00 = '48;5;46',

    /**
     * `<CSI>` `48;5;47`
     * 
     * @desc Background #00FF5F
     */
    X00FF5F = '48;5;47',

    /**
     * `<CSI>` `48;5;48`
     * 
     * @desc Background #00FF87
     */
    X00FF87 = '48;5;48',

    /**
     * `<CSI>` `48;5;49`
     * 
     * @desc Background #00FFAF
     */
    X00FFAF = '48;5;49',

    /**
     * `<CSI>` `48;5;50`
     * 
     * @desc Background #00FFD7
     */
    X00FFD7 = '48;5;50',

    /**
     * `<CSI>` `48;5;51`
     * 
     * @desc Background #00FFFF
     */
    X00FFFF = '48;5;51',

    /**
     * `<CSI>` `48;5;52`
     * 
     * @desc Background #5F0000
     */
    X5F0000 = '48;5;52',

    /**
     * `<CSI>` `48;5;53`
     * 
     * @desc Background #5F005F
     */
    X5F005F = '48;5;53',

    /**
     * `<CSI>` `48;5;54`
     * 
     * @desc Background #5F0087
     */
    X5F0087 = '48;5;54',

    /**
     * `<CSI>` `48;5;55`
     * 
     * @desc Background #5F00AF
     */
    X5F00AF = '48;5;55',

    /**
     * `<CSI>` `48;5;56`
     * 
     * @desc Background #5F00D7
     */
    X5F00D7 = '48;5;56',

    /**
     * `<CSI>` `48;5;57`
     * 
     * @desc Background #5F00FF
     */
    X5F00FF = '48;5;57',

    /**
     * `<CSI>` `48;5;58`
     * 
     * @desc Background #5F5F00
     */
    X5F5F00 = '48;5;58',

    /**
     * `<CSI>` `48;5;59`
     * 
     * @desc Background #5F5F5F
     */
    X5F5F5F = '48;5;59',

    /**
     * `<CSI>` `48;5;60`
     * 
     * @desc Background #5F5F87
     */
    X5F5F87 = '48;5;60',

    /**
     * `<CSI>` `48;5;61`
     * 
     * @desc Background #5F5FAF
     */
    X5F5FAF = '48;5;61',

    /**
     * `<CSI>` `48;5;62`
     * 
     * @desc Background #5F5FD7
     */
    X5F5FD7 = '48;5;62',

    /**
     * `<CSI>` `48;5;63`
     * 
     * @desc Background #5F5FFF
     */
    X5F5FFF = '48;5;63',

    /**
     * `<CSI>` `48;5;64`
     * 
     * @desc Background #5F8700
     */
    X5F8700 = '48;5;64',

    /**
     * `<CSI>` `48;5;65`
     * 
     * @desc Background #5F875F
     */
    X5F875F = '48;5;65',

    /**
     * `<CSI>` `48;5;66`
     * 
     * @desc Background #5F8787
     */
    X5F8787 = '48;5;66',

    /**
     * `<CSI>` `48;5;67`
     * 
     * @desc Background #5F87AF
     */
    X5F87AF = '48;5;67',

    /**
     * `<CSI>` `48;5;68`
     * 
     * @desc Background #5F87D7
     */
    X5F87D7 = '48;5;68',

    /**
     * `<CSI>` `48;5;69`
     * 
     * @desc Background #5F87FF
     */
    X5F87FF = '48;5;69',

    /**
     * `<CSI>` `48;5;70`
     * 
     * @desc Background #5FAF00
     */
    X5FAF00 = '48;5;70',

    /**
     * `<CSI>` `48;5;71`
     * 
     * @desc Background #5FAF5F
     */
    X5FAF5F = '48;5;71',

    /**
     * `<CSI>` `48;5;72`
     * 
     * @desc Background #5FAF87
     */
    X5FAF87 = '48;5;72',

    /**
     * `<CSI>` `48;5;73`
     * 
     * @desc Background #5FAFAF
     */
    X5FAFAF = '48;5;73',

    /**
     * `<CSI>` `48;5;74`
     * 
     * @desc Background #5FAFD7
     */
    X5FAFD7 = '48;5;74',

    /**
     * `<CSI>` `48;5;75`
     * 
     * @desc Background #5FAFFF
     */
    X5FAFFF = '48;5;75',

    /**
     * `<CSI>` `48;5;76`
     * 
     * @desc Background #5FD700
     */
    X5FD700 = '48;5;76',

    /**
     * `<CSI>` `48;5;77`
     * 
     * @desc Background #5FD75F
     */
    X5FD75F = '48;5;77',

    /**
     * `<CSI>` `48;5;78`
     * 
     * @desc Background #5FD787
     */
    X5FD787 = '48;5;78',

    /**
     * `<CSI>` `48;5;79`
     * 
     * @desc Background #5FD7AF
     */
    X5FD7AF = '48;5;79',

    /**
     * `<CSI>` `48;5;80`
     * 
     * @desc Background #5FD7D7
     */
    X5FD7D7 = '48;5;80',

    /**
     * `<CSI>` `48;5;81`
     * 
     * @desc Background #5FD7FF
     */
    X5FD7FF = '48;5;81',

    /**
     * `<CSI>` `48;5;82`
     * 
     * @desc Background #5FFF00
     */
    X5FFF00 = '48;5;82',

    /**
     * `<CSI>` `48;5;83`
     * 
     * @desc Background #5FFF5F
     */
    X5FFF5F = '48;5;83',

    /**
     * `<CSI>` `48;5;84`
     * 
     * @desc Background #5FFF87
     */
    X5FFF87 = '48;5;84',

    /**
     * `<CSI>` `48;5;85`
     * 
     * @desc Background #5FFFAF
     */
    X5FFFAF = '48;5;85',

    /**
     * `<CSI>` `48;5;86`
     * 
     * @desc Background #5FFFD7
     */
    X5FFFD7 = '48;5;86',

    /**
     * `<CSI>` `48;5;87`
     * 
     * @desc Background #5FFFFF
     */
    X5FFFFF = '48;5;87',

    /**
     * `<CSI>` `48;5;88`
     * 
     * @desc Background #870000
     */
    X870000 = '48;5;88',

    /**
     * `<CSI>` `48;5;89`
     * 
     * @desc Background #87005F
     */
    X87005F = '48;5;89',

    /**
     * `<CSI>` `48;5;90`
     * 
     * @desc Background #870087
     */
    X870087 = '48;5;90',

    /**
     * `<CSI>` `48;5;91`
     * 
     * @desc Background #8700AF
     */
    X8700AF = '48;5;91',

    /**
     * `<CSI>` `48;5;92`
     * 
     * @desc Background #8700D7
     */
    X8700D7 = '48;5;92',

    /**
     * `<CSI>` `48;5;93`
     * 
     * @desc Background #8700FF
     */
    X8700FF = '48;5;93',

    /**
     * `<CSI>` `48;5;94`
     * 
     * @desc Background #875F00
     */
    X875F00 = '48;5;94',

    /**
     * `<CSI>` `48;5;95`
     * 
     * @desc Background #875F5F
     */
    X875F5F = '48;5;95',

    /**
     * `<CSI>` `48;5;96`
     * 
     * @desc Background #875F87
     */
    X875F87 = '48;5;96',

    /**
     * `<CSI>` `48;5;97`
     * 
     * @desc Background #875FAF
     */
    X875FAF = '48;5;97',

    /**
     * `<CSI>` `48;5;98`
     * 
     * @desc Background #875FD7
     */
    X875FD7 = '48;5;98',

    /**
     * `<CSI>` `48;5;99`
     * 
     * @desc Background #875FFF
     */
    X875FFF = '48;5;99',

    /**
     * `<CSI>` `48;5;100`
     * 
     * @desc Background #878700
     */
    X878700 = '48;5;100',

    /**
     * `<CSI>` `48;5;101`
     * 
     * @desc Background #87875F
     */
    X87875F = '48;5;101',

    /**
     * `<CSI>` `48;5;102`
     * 
     * @desc Background #878787
     */
    X878787 = '48;5;102',

    /**
     * `<CSI>` `48;5;103`
     * 
     * @desc Background #8787AF
     */
    X8787AF = '48;5;103',

    /**
     * `<CSI>` `48;5;104`
     * 
     * @desc Background #8787D7
     */
    X8787D7 = '48;5;104',

    /**
     * `<CSI>` `48;5;105`
     * 
     * @desc Background #8787FF
     */
    X8787FF = '48;5;105',

    /**
     * `<CSI>` `48;5;106`
     * 
     * @desc Background #87AF00
     */
    X87AF00 = '48;5;106',

    /**
     * `<CSI>` `48;5;107`
     * 
     * @desc Background #87AF5F
     */
    X87AF5F = '48;5;107',

    /**
     * `<CSI>` `48;5;108`
     * 
     * @desc Background #87AF87
     */
    X87AF87 = '48;5;108',

    /**
     * `<CSI>` `48;5;109`
     * 
     * @desc Background #87AFAF
     */
    X87AFAF = '48;5;109',

    /**
     * `<CSI>` `48;5;110`
     * 
     * @desc Background #87AFD7
     */
    X87AFD7 = '48;5;110',

    /**
     * `<CSI>` `48;5;111`
     * 
     * @desc Background #87AFFF
     */
    X87AFFF = '48;5;111',

    /**
     * `<CSI>` `48;5;112`
     * 
     * @desc Background #87D700
     */
    X87D700 = '48;5;112',

    /**
     * `<CSI>` `48;5;113`
     * 
     * @desc Background #87D75F
     */
    X87D75F = '48;5;113',

    /**
     * `<CSI>` `48;5;114`
     * 
     * @desc Background #87D787
     */
    X87D787 = '48;5;114',

    /**
     * `<CSI>` `48;5;115`
     * 
     * @desc Background #87D7AF
     */
    X87D7AF = '48;5;115',

    /**
     * `<CSI>` `48;5;116`
     * 
     * @desc Background #87D7D7
     */
    X87D7D7 = '48;5;116',

    /**
     * `<CSI>` `48;5;117`
     * 
     * @desc Background #87D7FF
     */
    X87D7FF = '48;5;117',

    /**
     * `<CSI>` `48;5;118`
     * 
     * @desc Background #87FF00
     */
    X87FF00 = '48;5;118',

    /**
     * `<CSI>` `48;5;119`
     * 
     * @desc Background #87FF5F
     */
    X87FF5F = '48;5;119',

    /**
     * `<CSI>` `48;5;120`
     * 
     * @desc Background #87FF87
     */
    X87FF87 = '48;5;120',

    /**
     * `<CSI>` `48;5;121`
     * 
     * @desc Background #87FFAF
     */
    X87FFAF = '48;5;121',

    /**
     * `<CSI>` `48;5;122`
     * 
     * @desc Background #87FFD7
     */
    X87FFD7 = '48;5;122',

    /**
     * `<CSI>` `48;5;123`
     * 
     * @desc Background #87FFFF
     */
    X87FFFF = '48;5;123',

    /**
     * `<CSI>` `48;5;124`
     * 
     * @desc Background #AF0000
     */
    XAF0000 = '48;5;124',

    /**
     * `<CSI>` `48;5;125`
     * 
     * @desc Background #AF005F
     */
    XAF005F = '48;5;125',

    /**
     * `<CSI>` `48;5;126`
     * 
     * @desc Background #AF0087
     */
    XAF0087 = '48;5;126',

    /**
     * `<CSI>` `48;5;127`
     * 
     * @desc Background #AF00AF
     */
    XAF00AF = '48;5;127',

    /**
     * `<CSI>` `48;5;128`
     * 
     * @desc Background #AF00D7
     */
    XAF00D7 = '48;5;128',

    /**
     * `<CSI>` `48;5;129`
     * 
     * @desc Background #AF00FF
     */
    XAF00FF = '48;5;129',

    /**
     * `<CSI>` `48;5;130`
     * 
     * @desc Background #AF5F00
     */
    XAF5F00 = '48;5;130',

    /**
     * `<CSI>` `48;5;131`
     * 
     * @desc Background #AF5F5F
     */
    XAF5F5F = '48;5;131',

    /**
     * `<CSI>` `48;5;132`
     * 
     * @desc Background #AF5F87
     */
    XAF5F87 = '48;5;132',

    /**
     * `<CSI>` `48;5;133`
     * 
     * @desc Background #AF5FAF
     */
    XAF5FAF = '48;5;133',

    /**
     * `<CSI>` `48;5;134`
     * 
     * @desc Background #AF5FD7
     */
    XAF5FD7 = '48;5;134',

    /**
     * `<CSI>` `48;5;135`
     * 
     * @desc Background #AF5FFF
     */
    XAF5FFF = '48;5;135',

    /**
     * `<CSI>` `48;5;136`
     * 
     * @desc Background #AF8700
     */
    XAF8700 = '48;5;136',

    /**
     * `<CSI>` `48;5;137`
     * 
     * @desc Background #AF875F
     */
    XAF875F = '48;5;137',

    /**
     * `<CSI>` `48;5;138`
     * 
     * @desc Background #AF8787
     */
    XAF8787 = '48;5;138',

    /**
     * `<CSI>` `48;5;139`
     * 
     * @desc Background #AF87AF
     */
    XAF87AF = '48;5;139',

    /**
     * `<CSI>` `48;5;140`
     * 
     * @desc Background #AF87D7
     */
    XAF87D7 = '48;5;140',

    /**
     * `<CSI>` `48;5;141`
     * 
     * @desc Background #AF87FF
     */
    XAF87FF = '48;5;141',

    /**
     * `<CSI>` `48;5;142`
     * 
     * @desc Background #AFAF00
     */
    XAFAF00 = '48;5;142',

    /**
     * `<CSI>` `48;5;143`
     * 
     * @desc Background #AFAF5F
     */
    XAFAF5F = '48;5;143',

    /**
     * `<CSI>` `48;5;144`
     * 
     * @desc Background #AFAF87
     */
    XAFAF87 = '48;5;144',

    /**
     * `<CSI>` `48;5;145`
     * 
     * @desc Background #AFAFAF
     */
    XAFAFAF = '48;5;145',

    /**
     * `<CSI>` `48;5;146`
     * 
     * @desc Background #AFAFD7
     */
    XAFAFD7 = '48;5;146',

    /**
     * `<CSI>` `48;5;147`
     * 
     * @desc Background #AFAFFF
     */
    XAFAFFF = '48;5;147',

    /**
     * `<CSI>` `48;5;148`
     * 
     * @desc Background #AFD700
     */
    XAFD700 = '48;5;148',

    /**
     * `<CSI>` `48;5;149`
     * 
     * @desc Background #AFD75F
     */
    XAFD75F = '48;5;149',

    /**
     * `<CSI>` `48;5;150`
     * 
     * @desc Background #AFD787
     */
    XAFD787 = '48;5;150',

    /**
     * `<CSI>` `48;5;151`
     * 
     * @desc Background #AFD7AF
     */
    XAFD7AF = '48;5;151',

    /**
     * `<CSI>` `48;5;152`
     * 
     * @desc Background #AFD7D7
     */
    XAFD7D7 = '48;5;152',

    /**
     * `<CSI>` `48;5;153`
     * 
     * @desc Background #AFD7FF
     */
    XAFD7FF = '48;5;153',

    /**
     * `<CSI>` `48;5;154`
     * 
     * @desc Background #AFFF00
     */
    XAFFF00 = '48;5;154',

    /**
     * `<CSI>` `48;5;155`
     * 
     * @desc Background #AFFF5F
     */
    XAFFF5F = '48;5;155',

    /**
     * `<CSI>` `48;5;156`
     * 
     * @desc Background #AFFF87
     */
    XAFFF87 = '48;5;156',

    /**
     * `<CSI>` `48;5;157`
     * 
     * @desc Background #AFFFAF
     */
    XAFFFAF = '48;5;157',

    /**
     * `<CSI>` `48;5;158`
     * 
     * @desc Background #AFFFD7
     */
    XAFFFD7 = '48;5;158',

    /**
     * `<CSI>` `48;5;159`
     * 
     * @desc Background #AFFFFF
     */
    XAFFFFF = '48;5;159',

    /**
     * `<CSI>` `48;5;160`
     * 
     * @desc Background #D70000
     */
    XD70000 = '48;5;160',

    /**
     * `<CSI>` `48;5;161`
     * 
     * @desc Background #D7005F
     */
    XD7005F = '48;5;161',

    /**
     * `<CSI>` `48;5;162`
     * 
     * @desc Background #D70087
     */
    XD70087 = '48;5;162',

    /**
     * `<CSI>` `48;5;163`
     * 
     * @desc Background #D700AF
     */
    XD700AF = '48;5;163',

    /**
     * `<CSI>` `48;5;164`
     * 
     * @desc Background #D700D7
     */
    XD700D7 = '48;5;164',

    /**
     * `<CSI>` `48;5;165`
     * 
     * @desc Background #D700FF
     */
    XD700FF = '48;5;165',

    /**
     * `<CSI>` `48;5;166`
     * 
     * @desc Background #D75F00
     */
    XD75F00 = '48;5;166',

    /**
     * `<CSI>` `48;5;167`
     * 
     * @desc Background #D75F5F
     */
    XD75F5F = '48;5;167',

    /**
     * `<CSI>` `48;5;168`
     * 
     * @desc Background #D75F87
     */
    XD75F87 = '48;5;168',

    /**
     * `<CSI>` `48;5;169`
     * 
     * @desc Background #D75FAF
     */
    XD75FAF = '48;5;169',

    /**
     * `<CSI>` `48;5;170`
     * 
     * @desc Background #D75FD7
     */
    XD75FD7 = '48;5;170',

    /**
     * `<CSI>` `48;5;171`
     * 
     * @desc Background #D75FFF
     */
    XD75FFF = '48;5;171',

    /**
     * `<CSI>` `48;5;172`
     * 
     * @desc Background #D78700
     */
    XD78700 = '48;5;172',

    /**
     * `<CSI>` `48;5;173`
     * 
     * @desc Background #D7875F
     */
    XD7875F = '48;5;173',

    /**
     * `<CSI>` `48;5;174`
     * 
     * @desc Background #D78787
     */
    XD78787 = '48;5;174',

    /**
     * `<CSI>` `48;5;175`
     * 
     * @desc Background #D787AF
     */
    XD787AF = '48;5;175',

    /**
     * `<CSI>` `48;5;176`
     * 
     * @desc Background #D787D7
     */
    XD787D7 = '48;5;176',

    /**
     * `<CSI>` `48;5;177`
     * 
     * @desc Background #D787FF
     */
    XD787FF = '48;5;177',

    /**
     * `<CSI>` `48;5;178`
     * 
     * @desc Background #D7AF00
     */
    XD7AF00 = '48;5;178',

    /**
     * `<CSI>` `48;5;179`
     * 
     * @desc Background #D7AF5F
     */
    XD7AF5F = '48;5;179',

    /**
     * `<CSI>` `48;5;180`
     * 
     * @desc Background #D7AF87
     */
    XD7AF87 = '48;5;180',

    /**
     * `<CSI>` `48;5;181`
     * 
     * @desc Background #D7AFAF
     */
    XD7AFAF = '48;5;181',

    /**
     * `<CSI>` `48;5;182`
     * 
     * @desc Background #D7AFD7
     */
    XD7AFD7 = '48;5;182',

    /**
     * `<CSI>` `48;5;183`
     * 
     * @desc Background #D7AFFF
     */
    XD7AFFF = '48;5;183',

    /**
     * `<CSI>` `48;5;184`
     * 
     * @desc Background #D7D700
     */
    XD7D700 = '48;5;184',

    /**
     * `<CSI>` `48;5;185`
     * 
     * @desc Background #D7D75F
     */
    XD7D75F = '48;5;185',

    /**
     * `<CSI>` `48;5;186`
     * 
     * @desc Background #D7D787
     */
    XD7D787 = '48;5;186',

    /**
     * `<CSI>` `48;5;187`
     * 
     * @desc Background #D7D7AF
     */
    XD7D7AF = '48;5;187',

    /**
     * `<CSI>` `48;5;188`
     * 
     * @desc Background #D7D7D7
     */
    XD7D7D7 = '48;5;188',

    /**
     * `<CSI>` `48;5;189`
     * 
     * @desc Background #D7D7FF
     */
    XD7D7FF = '48;5;189',

    /**
     * `<CSI>` `48;5;190`
     * 
     * @desc Background #D7FF00
     */
    XD7FF00 = '48;5;190',

    /**
     * `<CSI>` `48;5;191`
     * 
     * @desc Background #D7FF5F
     */
    XD7FF5F = '48;5;191',

    /**
     * `<CSI>` `48;5;192`
     * 
     * @desc Background #D7FF87
     */
    XD7FF87 = '48;5;192',

    /**
     * `<CSI>` `48;5;193`
     * 
     * @desc Background #D7FFAF
     */
    XD7FFAF = '48;5;193',

    /**
     * `<CSI>` `48;5;194`
     * 
     * @desc Background #D7FFD7
     */
    XD7FFD7 = '48;5;194',

    /**
     * `<CSI>` `48;5;195`
     * 
     * @desc Background #D7FFFF
     */
    XD7FFFF = '48;5;195',

    /**
     * `<CSI>` `48;5;196`
     * 
     * @desc Background #FF0000
     */
    XFF0000 = '48;5;196',

    /**
     * `<CSI>` `48;5;197`
     * 
     * @desc Background #FF005F
     */
    XFF005F = '48;5;197',

    /**
     * `<CSI>` `48;5;198`
     * 
     * @desc Background #FF0087
     */
    XFF0087 = '48;5;198',

    /**
     * `<CSI>` `48;5;199`
     * 
     * @desc Background #FF00AF
     */
    XFF00AF = '48;5;199',

    /**
     * `<CSI>` `48;5;200`
     * 
     * @desc Background #FF00D7
     */
    XFF00D7 = '48;5;200',

    /**
     * `<CSI>` `48;5;201`
     * 
     * @desc Background #FF00FF
     */
    XFF00FF = '48;5;201',

    /**
     * `<CSI>` `48;5;202`
     * 
     * @desc Background #FF5F00
     */
    XFF5F00 = '48;5;202',

    /**
     * `<CSI>` `48;5;203`
     * 
     * @desc Background #FF5F5F
     */
    XFF5F5F = '48;5;203',

    /**
     * `<CSI>` `48;5;204`
     * 
     * @desc Background #FF5F87
     */
    XFF5F87 = '48;5;204',

    /**
     * `<CSI>` `48;5;205`
     * 
     * @desc Background #FF5FAF
     */
    XFF5FAF = '48;5;205',

    /**
     * `<CSI>` `48;5;206`
     * 
     * @desc Background #FF5FD7
     */
    XFF5FD7 = '48;5;206',

    /**
     * `<CSI>` `48;5;207`
     * 
     * @desc Background #FF5FFF
     */
    XFF5FFF = '48;5;207',

    /**
     * `<CSI>` `48;5;208`
     * 
     * @desc Background #FF8700
     */
    XFF8700 = '48;5;208',

    /**
     * `<CSI>` `48;5;209`
     * 
     * @desc Background #FF875F
     */
    XFF875F = '48;5;209',

    /**
     * `<CSI>` `48;5;210`
     * 
     * @desc Background #FF8787
     */
    XFF8787 = '48;5;210',

    /**
     * `<CSI>` `48;5;211`
     * 
     * @desc Background #FF87AF
     */
    XFF87AF = '48;5;211',

    /**
     * `<CSI>` `48;5;212`
     * 
     * @desc Background #FF87D7
     */
    XFF87D7 = '48;5;212',

    /**
     * `<CSI>` `48;5;213`
     * 
     * @desc Background #FF87FF
     */
    XFF87FF = '48;5;213',

    /**
     * `<CSI>` `48;5;214`
     * 
     * @desc Background #FFAF00
     */
    XFFAF00 = '48;5;214',

    /**
     * `<CSI>` `48;5;215`
     * 
     * @desc Background #FFAF5F
     */
    XFFAF5F = '48;5;215',

    /**
     * `<CSI>` `48;5;216`
     * 
     * @desc Background #FFAF87
     */
    XFFAF87 = '48;5;216',

    /**
     * `<CSI>` `48;5;217`
     * 
     * @desc Background #FFAFAF
     */
    XFFAFAF = '48;5;217',

    /**
     * `<CSI>` `48;5;218`
     * 
     * @desc Background #FFAFD7
     */
    XFFAFD7 = '48;5;218',

    /**
     * `<CSI>` `48;5;219`
     * 
     * @desc Background #FFAFFF
     */
    XFFAFFF = '48;5;219',

    /**
     * `<CSI>` `48;5;220`
     * 
     * @desc Background #FFD700
     */
    XFFD700 = '48;5;220',

    /**
     * `<CSI>` `48;5;221`
     * 
     * @desc Background #FFD75F
     */
    XFFD75F = '48;5;221',

    /**
     * `<CSI>` `48;5;222`
     * 
     * @desc Background #FFD787
     */
    XFFD787 = '48;5;222',

    /**
     * `<CSI>` `48;5;223`
     * 
     * @desc Background #FFD7AF
     */
    XFFD7AF = '48;5;223',

    /**
     * `<CSI>` `48;5;224`
     * 
     * @desc Background #FFD7D7
     */
    XFFD7D7 = '48;5;224',

    /**
     * `<CSI>` `48;5;225`
     * 
     * @desc Background #FFD7FF
     */
    XFFD7FF = '48;5;225',

    /**
     * `<CSI>` `48;5;226`
     * 
     * @desc Background #FFFF00
     */
    XFFFF00 = '48;5;226',

    /**
     * `<CSI>` `48;5;227`
     * 
     * @desc Background #FFFF5F
     */
    XFFFF5F = '48;5;227',

    /**
     * `<CSI>` `48;5;228`
     * 
     * @desc Background #FFFF87
     */
    XFFFF87 = '48;5;228',

    /**
     * `<CSI>` `48;5;229`
     * 
     * @desc Background #FFFFAF
     */
    XFFFFAF = '48;5;229',

    /**
     * `<CSI>` `48;5;230`
     * 
     * @desc Background #FFFFD7
     */
    XFFFFD7 = '48;5;230',

    /**
     * `<CSI>` `48;5;231`
     * 
     * @desc Background #FFFFFF
     */
    XFFFFFF = '48;5;231'
}


