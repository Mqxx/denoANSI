/**
 * `<CSI>` `38;5;{hex 1};{hex 2};{hex n}m`
 * 
 * @desc ANSI 8-Bit foreground colors normal
 * @readonly
 * @enum {string}
 */
export enum normalForeground {

    /**
     * `38;5;16`
     * 
     * @desc Foreground #000000
     */
    X000000 = '38;5;16',

    /**
     * `38;5;17`
     * 
     * @desc Foreground #00005F
     */
    X00005F = '38;5;17',

    /**
     * `38;5;18`
     * 
     * @desc Foreground #000087
     */
    X000087 = '38;5;18',

    /**
     * `38;5;19`
     * 
     * @desc Foreground #0000AF
     */
    X0000AF = '38;5;19',

    /**
     * `38;5;20`
     * 
     * @desc Foreground #0000D7
     */
    X0000D7 = '38;5;20',

    /**
     * `38;5;21`
     * 
     * @desc Foreground #0000FF
     */
    X0000FF = '38;5;21',

    /**
     * `38;5;22`
     * 
     * @desc Foreground #005F00
     */
    X005F00 = '38;5;22',

    /**
     * `38;5;23`
     * 
     * @desc Foreground #005F5F
     */
    X005F5F = '38;5;23',

    /**
     * `38;5;24`
     * 
     * @desc Foreground #005F87
     */
    X005F87 = '38;5;24',

    /**
     * `38;5;25`
     * 
     * @desc Foreground #005FAF
     */
    X005FAF = '38;5;25',

    /**
     * `38;5;26`
     * 
     * @desc Foreground #005FD7
     */
    X005FD7 = '38;5;26',

    /**
     * `38;5;27`
     * 
     * @desc Foreground #005FFF
     */
    X005FFF = '38;5;27',

    /**
     * `38;5;28`
     * 
     * @desc Foreground #008700
     */
    X008700 = '38;5;28',

    /**
     * `38;5;29`
     * 
     * @desc Foreground #00875F
     */
    X00875F = '38;5;29',

    /**
     * `38;5;30`
     * 
     * @desc Foreground #008787
     */
    X008787 = '38;5;30',

    /**
     * `38;5;31`
     * 
     * @desc Foreground #0087AF
     */
    X0087AF = '38;5;31',

    /**
     * `38;5;32`
     * 
     * @desc Foreground #0087D7
     */
    X0087D7 = '38;5;32',

    /**
     * `38;5;33`
     * 
     * @desc Foreground #0087FF
     */
    X0087FF = '38;5;33',

    /**
     * `38;5;34`
     * 
     * @desc Foreground #00AF00
     */
    X00AF00 = '38;5;34',

    /**
     * `38;5;35`
     * 
     * @desc Foreground #00AF5F
     */
    X00AF5F = '38;5;35',

    /**
     * `38;5;36`
     * 
     * @desc Foreground #00AF87
     */
    X00AF87 = '38;5;36',

    /**
     * `38;5;37`
     * 
     * @desc Foreground #00AFAF
     */
    X00AFAF = '38;5;37',

    /**
     * `38;5;38`
     * 
     * @desc Foreground #00AFD7
     */
    X00AFD7 = '38;5;38',

    /**
     * `38;5;39`
     * 
     * @desc Foreground #00AFFF
     */
    X00AFFF = '38;5;39',

    /**
     * `38;5;40`
     * 
     * @desc Foreground #00D700
     */
    X00D700 = '38;5;40',

    /**
     * `38;5;41`
     * 
     * @desc Foreground #00D75F
     */
    X00D75F = '38;5;41',

    /**
     * `38;5;42`
     * 
     * @desc Foreground #00D787
     */
    X00D787 = '38;5;42',

    /**
     * `38;5;43`
     * 
     * @desc Foreground #00D7AF
     */
    X00D7AF = '38;5;43',

    /**
     * `38;5;44`
     * 
     * @desc Foreground #00D7D7
     */
    X00D7D7 = '38;5;44',

    /**
     * `38;5;45`
     * 
     * @desc Foreground #00D7FF
     */
    X00D7FF = '38;5;45',

    /**
     * `38;5;46`
     * 
     * @desc Foreground #00FF00
     */
    X00FF00 = '38;5;46',

    /**
     * `38;5;47`
     * 
     * @desc Foreground #00FF5F
     */
    X00FF5F = '38;5;47',

    /**
     * `38;5;48`
     * 
     * @desc Foreground #00FF87
     */
    X00FF87 = '38;5;48',

    /**
     * `38;5;49`
     * 
     * @desc Foreground #00FFAF
     */
    X00FFAF = '38;5;49',

    /**
     * `38;5;50`
     * 
     * @desc Foreground #00FFD7
     */
    X00FFD7 = '38;5;50',

    /**
     * `38;5;51`
     * 
     * @desc Foreground #00FFFF
     */
    X00FFFF = '38;5;51',

    /**
     * `38;5;52`
     * 
     * @desc Foreground #5F0000
     */
    X5F0000 = '38;5;52',

    /**
     * `38;5;53`
     * 
     * @desc Foreground #5F005F
     */
    X5F005F = '38;5;53',

    /**
     * `38;5;54`
     * 
     * @desc Foreground #5F0087
     */
    X5F0087 = '38;5;54',

    /**
     * `38;5;55`
     * 
     * @desc Foreground #5F00AF
     */
    X5F00AF = '38;5;55',

    /**
     * `38;5;56`
     * 
     * @desc Foreground #5F00D7
     */
    X5F00D7 = '38;5;56',

    /**
     * `38;5;57`
     * 
     * @desc Foreground #5F00FF
     */
    X5F00FF = '38;5;57',

    /**
     * `38;5;58`
     * 
     * @desc Foreground #5F5F00
     */
    X5F5F00 = '38;5;58',

    /**
     * `38;5;59`
     * 
     * @desc Foreground #5F5F5F
     */
    X5F5F5F = '38;5;59',

    /**
     * `38;5;60`
     * 
     * @desc Foreground #5F5F87
     */
    X5F5F87 = '38;5;60',

    /**
     * `38;5;61`
     * 
     * @desc Foreground #5F5FAF
     */
    X5F5FAF = '38;5;61',

    /**
     * `38;5;62`
     * 
     * @desc Foreground #5F5FD7
     */
    X5F5FD7 = '38;5;62',

    /**
     * `38;5;63`
     * 
     * @desc Foreground #5F5FFF
     */
    X5F5FFF = '38;5;63',

    /**
     * `38;5;64`
     * 
     * @desc Foreground #5F8700
     */
    X5F8700 = '38;5;64',

    /**
     * `38;5;65`
     * 
     * @desc Foreground #5F875F
     */
    X5F875F = '38;5;65',

    /**
     * `38;5;66`
     * 
     * @desc Foreground #5F8787
     */
    X5F8787 = '38;5;66',

    /**
     * `38;5;67`
     * 
     * @desc Foreground #5F87AF
     */
    X5F87AF = '38;5;67',

    /**
     * `38;5;68`
     * 
     * @desc Foreground #5F87D7
     */
    X5F87D7 = '38;5;68',

    /**
     * `38;5;69`
     * 
     * @desc Foreground #5F87FF
     */
    X5F87FF = '38;5;69',

    /**
     * `38;5;70`
     * 
     * @desc Foreground #5FAF00
     */
    X5FAF00 = '38;5;70',

    /**
     * `38;5;71`
     * 
     * @desc Foreground #5FAF5F
     */
    X5FAF5F = '38;5;71',

    /**
     * `38;5;72`
     * 
     * @desc Foreground #5FAF87
     */
    X5FAF87 = '38;5;72',

    /**
     * `38;5;73`
     * 
     * @desc Foreground #5FAFAF
     */
    X5FAFAF = '38;5;73',

    /**
     * `38;5;74`
     * 
     * @desc Foreground #5FAFD7
     */
    X5FAFD7 = '38;5;74',

    /**
     * `38;5;75`
     * 
     * @desc Foreground #5FAFFF
     */
    X5FAFFF = '38;5;75',

    /**
     * `38;5;76`
     * 
     * @desc Foreground #5FD700
     */
    X5FD700 = '38;5;76',

    /**
     * `38;5;77`
     * 
     * @desc Foreground #5FD75F
     */
    X5FD75F = '38;5;77',

    /**
     * `38;5;78`
     * 
     * @desc Foreground #5FD787
     */
    X5FD787 = '38;5;78',

    /**
     * `38;5;79`
     * 
     * @desc Foreground #5FD7AF
     */
    X5FD7AF = '38;5;79',

    /**
     * `38;5;80`
     * 
     * @desc Foreground #5FD7D7
     */
    X5FD7D7 = '38;5;80',

    /**
     * `38;5;81`
     * 
     * @desc Foreground #5FD7FF
     */
    X5FD7FF = '38;5;81',

    /**
     * `38;5;82`
     * 
     * @desc Foreground #5FFF00
     */
    X5FFF00 = '38;5;82',

    /**
     * `38;5;83`
     * 
     * @desc Foreground #5FFF5F
     */
    X5FFF5F = '38;5;83',

    /**
     * `38;5;84`
     * 
     * @desc Foreground #5FFF87
     */
    X5FFF87 = '38;5;84',

    /**
     * `38;5;85`
     * 
     * @desc Foreground #5FFFAF
     */
    X5FFFAF = '38;5;85',

    /**
     * `38;5;86`
     * 
     * @desc Foreground #5FFFD7
     */
    X5FFFD7 = '38;5;86',

    /**
     * `38;5;87`
     * 
     * @desc Foreground #5FFFFF
     */
    X5FFFFF = '38;5;87',

    /**
     * `38;5;88`
     * 
     * @desc Foreground #870000
     */
    X870000 = '38;5;88',

    /**
     * `38;5;89`
     * 
     * @desc Foreground #87005F
     */
    X87005F = '38;5;89',

    /**
     * `38;5;90`
     * 
     * @desc Foreground #870087
     */
    X870087 = '38;5;90',

    /**
     * `38;5;91`
     * 
     * @desc Foreground #8700AF
     */
    X8700AF = '38;5;91',

    /**
     * `38;5;92`
     * 
     * @desc Foreground #8700D7
     */
    X8700D7 = '38;5;92',

    /**
     * `38;5;93`
     * 
     * @desc Foreground #8700FF
     */
    X8700FF = '38;5;93',

    /**
     * `38;5;94`
     * 
     * @desc Foreground #875F00
     */
    X875F00 = '38;5;94',

    /**
     * `38;5;95`
     * 
     * @desc Foreground #875F5F
     */
    X875F5F = '38;5;95',

    /**
     * `38;5;96`
     * 
     * @desc Foreground #875F87
     */
    X875F87 = '38;5;96',

    /**
     * `38;5;97`
     * 
     * @desc Foreground #875FAF
     */
    X875FAF = '38;5;97',

    /**
     * `38;5;98`
     * 
     * @desc Foreground #875FD7
     */
    X875FD7 = '38;5;98',

    /**
     * `38;5;99`
     * 
     * @desc Foreground #875FFF
     */
    X875FFF = '38;5;99',

    /**
     * `38;5;100`
     * 
     * @desc Foreground #878700
     */
    X878700 = '38;5;100',

    /**
     * `38;5;101`
     * 
     * @desc Foreground #87875F
     */
    X87875F = '38;5;101',

    /**
     * `38;5;102`
     * 
     * @desc Foreground #878787
     */
    X878787 = '38;5;102',

    /**
     * `38;5;103`
     * 
     * @desc Foreground #8787AF
     */
    X8787AF = '38;5;103',

    /**
     * `38;5;104`
     * 
     * @desc Foreground #8787D7
     */
    X8787D7 = '38;5;104',

    /**
     * `38;5;105`
     * 
     * @desc Foreground #8787FF
     */
    X8787FF = '38;5;105',

    /**
     * `38;5;106`
     * 
     * @desc Foreground #87AF00
     */
    X87AF00 = '38;5;106',

    /**
     * `38;5;107`
     * 
     * @desc Foreground #87AF5F
     */
    X87AF5F = '38;5;107',

    /**
     * `38;5;108`
     * 
     * @desc Foreground #87AF87
     */
    X87AF87 = '38;5;108',

    /**
     * `38;5;109`
     * 
     * @desc Foreground #87AFAF
     */
    X87AFAF = '38;5;109',

    /**
     * `38;5;110`
     * 
     * @desc Foreground #87AFD7
     */
    X87AFD7 = '38;5;110',

    /**
     * `38;5;111`
     * 
     * @desc Foreground #87AFFF
     */
    X87AFFF = '38;5;111',

    /**
     * `38;5;112`
     * 
     * @desc Foreground #87D700
     */
    X87D700 = '38;5;112',

    /**
     * `38;5;113`
     * 
     * @desc Foreground #87D75F
     */
    X87D75F = '38;5;113',

    /**
     * `38;5;114`
     * 
     * @desc Foreground #87D787
     */
    X87D787 = '38;5;114',

    /**
     * `38;5;115`
     * 
     * @desc Foreground #87D7AF
     */
    X87D7AF = '38;5;115',

    /**
     * `38;5;116`
     * 
     * @desc Foreground #87D7D7
     */
    X87D7D7 = '38;5;116',

    /**
     * `38;5;117`
     * 
     * @desc Foreground #87D7FF
     */
    X87D7FF = '38;5;117',

    /**
     * `38;5;118`
     * 
     * @desc Foreground #87FF00
     */
    X87FF00 = '38;5;118',

    /**
     * `38;5;119`
     * 
     * @desc Foreground #87FF5F
     */
    X87FF5F = '38;5;119',

    /**
     * `38;5;120`
     * 
     * @desc Foreground #87FF87
     */
    X87FF87 = '38;5;120',

    /**
     * `38;5;121`
     * 
     * @desc Foreground #87FFAF
     */
    X87FFAF = '38;5;121',

    /**
     * `38;5;122`
     * 
     * @desc Foreground #87FFD7
     */
    X87FFD7 = '38;5;122',

    /**
     * `38;5;123`
     * 
     * @desc Foreground #87FFFF
     */
    X87FFFF = '38;5;123',

    /**
     * `38;5;124`
     * 
     * @desc Foreground #AF0000
     */
    XAF0000 = '38;5;124',

    /**
     * `38;5;125`
     * 
     * @desc Foreground #AF005F
     */
    XAF005F = '38;5;125',

    /**
     * `38;5;126`
     * 
     * @desc Foreground #AF0087
     */
    XAF0087 = '38;5;126',

    /**
     * `38;5;127`
     * 
     * @desc Foreground #AF00AF
     */
    XAF00AF = '38;5;127',

    /**
     * `38;5;128`
     * 
     * @desc Foreground #AF00D7
     */
    XAF00D7 = '38;5;128',

    /**
     * `38;5;129`
     * 
     * @desc Foreground #AF00FF
     */
    XAF00FF = '38;5;129',

    /**
     * `38;5;130`
     * 
     * @desc Foreground #AF5F00
     */
    XAF5F00 = '38;5;130',

    /**
     * `38;5;131`
     * 
     * @desc Foreground #AF5F5F
     */
    XAF5F5F = '38;5;131',

    /**
     * `38;5;132`
     * 
     * @desc Foreground #AF5F87
     */
    XAF5F87 = '38;5;132',

    /**
     * `38;5;133`
     * 
     * @desc Foreground #AF5FAF
     */
    XAF5FAF = '38;5;133',

    /**
     * `38;5;134`
     * 
     * @desc Foreground #AF5FD7
     */
    XAF5FD7 = '38;5;134',

    /**
     * `38;5;135`
     * 
     * @desc Foreground #AF5FFF
     */
    XAF5FFF = '38;5;135',

    /**
     * `38;5;136`
     * 
     * @desc Foreground #AF8700
     */
    XAF8700 = '38;5;136',

    /**
     * `38;5;137`
     * 
     * @desc Foreground #AF875F
     */
    XAF875F = '38;5;137',

    /**
     * `38;5;138`
     * 
     * @desc Foreground #AF8787
     */
    XAF8787 = '38;5;138',

    /**
     * `38;5;139`
     * 
     * @desc Foreground #AF87AF
     */
    XAF87AF = '38;5;139',

    /**
     * `38;5;140`
     * 
     * @desc Foreground #AF87D7
     */
    XAF87D7 = '38;5;140',

    /**
     * `38;5;141`
     * 
     * @desc Foreground #AF87FF
     */
    XAF87FF = '38;5;141',

    /**
     * `38;5;142`
     * 
     * @desc Foreground #AFAF00
     */
    XAFAF00 = '38;5;142',

    /**
     * `38;5;143`
     * 
     * @desc Foreground #AFAF5F
     */
    XAFAF5F = '38;5;143',

    /**
     * `38;5;144`
     * 
     * @desc Foreground #AFAF87
     */
    XAFAF87 = '38;5;144',

    /**
     * `38;5;145`
     * 
     * @desc Foreground #AFAFAF
     */
    XAFAFAF = '38;5;145',

    /**
     * `38;5;146`
     * 
     * @desc Foreground #AFAFD7
     */
    XAFAFD7 = '38;5;146',

    /**
     * `38;5;147`
     * 
     * @desc Foreground #AFAFFF
     */
    XAFAFFF = '38;5;147',

    /**
     * `38;5;148`
     * 
     * @desc Foreground #AFD700
     */
    XAFD700 = '38;5;148',

    /**
     * `38;5;149`
     * 
     * @desc Foreground #AFD75F
     */
    XAFD75F = '38;5;149',

    /**
     * `38;5;150`
     * 
     * @desc Foreground #AFD787
     */
    XAFD787 = '38;5;150',

    /**
     * `38;5;151`
     * 
     * @desc Foreground #AFD7AF
     */
    XAFD7AF = '38;5;151',

    /**
     * `38;5;152`
     * 
     * @desc Foreground #AFD7D7
     */
    XAFD7D7 = '38;5;152',

    /**
     * `38;5;153`
     * 
     * @desc Foreground #AFD7FF
     */
    XAFD7FF = '38;5;153',

    /**
     * `38;5;154`
     * 
     * @desc Foreground #AFFF00
     */
    XAFFF00 = '38;5;154',

    /**
     * `38;5;155`
     * 
     * @desc Foreground #AFFF5F
     */
    XAFFF5F = '38;5;155',

    /**
     * `38;5;156`
     * 
     * @desc Foreground #AFFF87
     */
    XAFFF87 = '38;5;156',

    /**
     * `38;5;157`
     * 
     * @desc Foreground #AFFFAF
     */
    XAFFFAF = '38;5;157',

    /**
     * `38;5;158`
     * 
     * @desc Foreground #AFFFD7
     */
    XAFFFD7 = '38;5;158',

    /**
     * `38;5;159`
     * 
     * @desc Foreground #AFFFFF
     */
    XAFFFFF = '38;5;159',

    /**
     * `38;5;160`
     * 
     * @desc Foreground #D70000
     */
    XD70000 = '38;5;160',

    /**
     * `38;5;161`
     * 
     * @desc Foreground #D7005F
     */
    XD7005F = '38;5;161',

    /**
     * `38;5;162`
     * 
     * @desc Foreground #D70087
     */
    XD70087 = '38;5;162',

    /**
     * `38;5;163`
     * 
     * @desc Foreground #D700AF
     */
    XD700AF = '38;5;163',

    /**
     * `38;5;164`
     * 
     * @desc Foreground #D700D7
     */
    XD700D7 = '38;5;164',

    /**
     * `38;5;165`
     * 
     * @desc Foreground #D700FF
     */
    XD700FF = '38;5;165',

    /**
     * `38;5;166`
     * 
     * @desc Foreground #D75F00
     */
    XD75F00 = '38;5;166',

    /**
     * `38;5;167`
     * 
     * @desc Foreground #D75F5F
     */
    XD75F5F = '38;5;167',

    /**
     * `38;5;168`
     * 
     * @desc Foreground #D75F87
     */
    XD75F87 = '38;5;168',

    /**
     * `38;5;169`
     * 
     * @desc Foreground #D75FAF
     */
    XD75FAF = '38;5;169',

    /**
     * `38;5;170`
     * 
     * @desc Foreground #D75FD7
     */
    XD75FD7 = '38;5;170',

    /**
     * `38;5;171`
     * 
     * @desc Foreground #D75FFF
     */
    XD75FFF = '38;5;171',

    /**
     * `38;5;172`
     * 
     * @desc Foreground #D78700
     */
    XD78700 = '38;5;172',

    /**
     * `38;5;173`
     * 
     * @desc Foreground #D7875F
     */
    XD7875F = '38;5;173',

    /**
     * `38;5;174`
     * 
     * @desc Foreground #D78787
     */
    XD78787 = '38;5;174',

    /**
     * `38;5;175`
     * 
     * @desc Foreground #D787AF
     */
    XD787AF = '38;5;175',

    /**
     * `38;5;176`
     * 
     * @desc Foreground #D787D7
     */
    XD787D7 = '38;5;176',

    /**
     * `38;5;177`
     * 
     * @desc Foreground #D787FF
     */
    XD787FF = '38;5;177',

    /**
     * `38;5;178`
     * 
     * @desc Foreground #D7AF00
     */
    XD7AF00 = '38;5;178',

    /**
     * `38;5;179`
     * 
     * @desc Foreground #D7AF5F
     */
    XD7AF5F = '38;5;179',

    /**
     * `38;5;180`
     * 
     * @desc Foreground #D7AF87
     */
    XD7AF87 = '38;5;180',

    /**
     * `38;5;181`
     * 
     * @desc Foreground #D7AFAF
     */
    XD7AFAF = '38;5;181',

    /**
     * `38;5;182`
     * 
     * @desc Foreground #D7AFD7
     */
    XD7AFD7 = '38;5;182',

    /**
     * `38;5;183`
     * 
     * @desc Foreground #D7AFFF
     */
    XD7AFFF = '38;5;183',

    /**
     * `38;5;184`
     * 
     * @desc Foreground #D7D700
     */
    XD7D700 = '38;5;184',

    /**
     * `38;5;185`
     * 
     * @desc Foreground #D7D75F
     */
    XD7D75F = '38;5;185',

    /**
     * `38;5;186`
     * 
     * @desc Foreground #D7D787
     */
    XD7D787 = '38;5;186',

    /**
     * `38;5;187`
     * 
     * @desc Foreground #D7D7AF
     */
    XD7D7AF = '38;5;187',

    /**
     * `38;5;188`
     * 
     * @desc Foreground #D7D7D7
     */
    XD7D7D7 = '38;5;188',

    /**
     * `38;5;189`
     * 
     * @desc Foreground #D7D7FF
     */
    XD7D7FF = '38;5;189',

    /**
     * `38;5;190`
     * 
     * @desc Foreground #D7FF00
     */
    XD7FF00 = '38;5;190',

    /**
     * `38;5;191`
     * 
     * @desc Foreground #D7FF5F
     */
    XD7FF5F = '38;5;191',

    /**
     * `38;5;192`
     * 
     * @desc Foreground #D7FF87
     */
    XD7FF87 = '38;5;192',

    /**
     * `38;5;193`
     * 
     * @desc Foreground #D7FFAF
     */
    XD7FFAF = '38;5;193',

    /**
     * `38;5;194`
     * 
     * @desc Foreground #D7FFD7
     */
    XD7FFD7 = '38;5;194',

    /**
     * `38;5;195`
     * 
     * @desc Foreground #D7FFFF
     */
    XD7FFFF = '38;5;195',

    /**
     * `38;5;196`
     * 
     * @desc Foreground #FF0000
     */
    XFF0000 = '38;5;196',

    /**
     * `38;5;197`
     * 
     * @desc Foreground #FF005F
     */
    XFF005F = '38;5;197',

    /**
     * `38;5;198`
     * 
     * @desc Foreground #FF0087
     */
    XFF0087 = '38;5;198',

    /**
     * `38;5;199`
     * 
     * @desc Foreground #FF00AF
     */
    XFF00AF = '38;5;199',

    /**
     * `38;5;200`
     * 
     * @desc Foreground #FF00D7
     */
    XFF00D7 = '38;5;200',

    /**
     * `38;5;201`
     * 
     * @desc Foreground #FF00FF
     */
    XFF00FF = '38;5;201',

    /**
     * `38;5;202`
     * 
     * @desc Foreground #FF5F00
     */
    XFF5F00 = '38;5;202',

    /**
     * `38;5;203`
     * 
     * @desc Foreground #FF5F5F
     */
    XFF5F5F = '38;5;203',

    /**
     * `38;5;204`
     * 
     * @desc Foreground #FF5F87
     */
    XFF5F87 = '38;5;204',

    /**
     * `38;5;205`
     * 
     * @desc Foreground #FF5FAF
     */
    XFF5FAF = '38;5;205',

    /**
     * `38;5;206`
     * 
     * @desc Foreground #FF5FD7
     */
    XFF5FD7 = '38;5;206',

    /**
     * `38;5;207`
     * 
     * @desc Foreground #FF5FFF
     */
    XFF5FFF = '38;5;207',

    /**
     * `38;5;208`
     * 
     * @desc Foreground #FF8700
     */
    XFF8700 = '38;5;208',

    /**
     * `38;5;209`
     * 
     * @desc Foreground #FF875F
     */
    XFF875F = '38;5;209',

    /**
     * `38;5;210`
     * 
     * @desc Foreground #FF8787
     */
    XFF8787 = '38;5;210',

    /**
     * `38;5;211`
     * 
     * @desc Foreground #FF87AF
     */
    XFF87AF = '38;5;211',

    /**
     * `38;5;212`
     * 
     * @desc Foreground #FF87D7
     */
    XFF87D7 = '38;5;212',

    /**
     * `38;5;213`
     * 
     * @desc Foreground #FF87FF
     */
    XFF87FF = '38;5;213',

    /**
     * `38;5;214`
     * 
     * @desc Foreground #FFAF00
     */
    XFFAF00 = '38;5;214',

    /**
     * `38;5;215`
     * 
     * @desc Foreground #FFAF5F
     */
    XFFAF5F = '38;5;215',

    /**
     * `38;5;216`
     * 
     * @desc Foreground #FFAF87
     */
    XFFAF87 = '38;5;216',

    /**
     * `38;5;217`
     * 
     * @desc Foreground #FFAFAF
     */
    XFFAFAF = '38;5;217',

    /**
     * `38;5;218`
     * 
     * @desc Foreground #FFAFD7
     */
    XFFAFD7 = '38;5;218',

    /**
     * `38;5;219`
     * 
     * @desc Foreground #FFAFFF
     */
    XFFAFFF = '38;5;219',

    /**
     * `38;5;220`
     * 
     * @desc Foreground #FFD700
     */
    XFFD700 = '38;5;220',

    /**
     * `38;5;221`
     * 
     * @desc Foreground #FFD75F
     */
    XFFD75F = '38;5;221',

    /**
     * `38;5;222`
     * 
     * @desc Foreground #FFD787
     */
    XFFD787 = '38;5;222',

    /**
     * `38;5;223`
     * 
     * @desc Foreground #FFD7AF
     */
    XFFD7AF = '38;5;223',

    /**
     * `38;5;224`
     * 
     * @desc Foreground #FFD7D7
     */
    XFFD7D7 = '38;5;224',

    /**
     * `38;5;225`
     * 
     * @desc Foreground #FFD7FF
     */
    XFFD7FF = '38;5;225',

    /**
     * `38;5;226`
     * 
     * @desc Foreground #FFFF00
     */
    XFFFF00 = '38;5;226',

    /**
     * `38;5;227`
     * 
     * @desc Foreground #FFFF5F
     */
    XFFFF5F = '38;5;227',

    /**
     * `38;5;228`
     * 
     * @desc Foreground #FFFF87
     */
    XFFFF87 = '38;5;228',

    /**
     * `38;5;229`
     * 
     * @desc Foreground #FFFFAF
     */
    XFFFFAF = '38;5;229',

    /**
     * `38;5;230`
     * 
     * @desc Foreground #FFFFD7
     */
    XFFFFD7 = '38;5;230',

    /**
     * `38;5;231`
     * 
     * @desc Foreground #FFFFFF
     */
    XFFFFFF = '38;5;231'
}


