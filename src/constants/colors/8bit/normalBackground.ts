/**
 * @desc ANSI 8-Bit background colors normal
 * @readonly
 * @example
 * 
 * '<CSI>{hex 1};{hex 2};{hex n}m'
 * 
 * @enum {string}
 */
export enum normalBackground {
    /**
     * @desc Background #000000
     * @default normalBackground.X000000 = '48;5;16'
     */
    X000000 = '48;5;16',

    /**
     * @desc Background #00005F
     * @default normalBackground.X00005F = '48;5;17'
     */
    X00005F = '48;5;17',

    /**
     * @desc Background #000087
     * @default normalBackground.X000087 = '48;5;18'
     */
    X000087 = '48;5;18',

    /**
     * @desc Background #0000AF
     * @default normalBackground.X0000AF = '48;5;19'
     */
    X0000AF = '48;5;19',

    /**
     * @desc Background #0000D7
     * @default normalBackground.X0000D7 = '48;5;20'
     */
    X0000D7 = '48;5;20',

    /**
     * @desc Background #0000FF
     * @default normalBackground.X0000FF = '48;5;21'
     */
    X0000FF = '48;5;21',

    /**
     * @desc Background #005F00
     * @default normalBackground.X005F00 = '48;5;22'
     */
    X005F00 = '48;5;22',

    /**
     * @desc Background #005F5F
     * @default normalBackground.X005F5F = '48;5;23'
     */
    X005F5F = '48;5;23',

    /**
     * @desc Background #005F87
     * @default normalBackground.X005F87 = '48;5;24'
     */
    X005F87 = '48;5;24',

    /**
     * @desc Background #005FAF
     * @default normalBackground.X005FAF = '48;5;25'
     */
    X005FAF = '48;5;25',

    /**
     * @desc Background #005FD7
     * @default normalBackground.X005FD7 = '48;5;26'
     */
    X005FD7 = '48;5;26',

    /**
     * @desc Background #005FFF
     * @default normalBackground.X005FFF = '48;5;27'
     */
    X005FFF = '48;5;27',

    /**
     * @desc Background #008700
     * @default normalBackground.X008700 = '48;5;28'
     */
    X008700 = '48;5;28',

    /**
     * @desc Background #00875F
     * @default normalBackground.X00875F = '48;5;29'
     */
    X00875F = '48;5;29',

    /**
     * @desc Background #008787
     * @default normalBackground.X008787 = '48;5;30'
     */
    X008787 = '48;5;30',

    /**
     * @desc Background #0087AF
     * @default normalBackground.X0087AF = '48;5;31'
     */
    X0087AF = '48;5;31',

    /**
     * @desc Background #0087D7
     * @default normalBackground.X0087D7 = '48;5;32'
     */
    X0087D7 = '48;5;32',

    /**
     * @desc Background #0087FF
     * @default normalBackground.X0087FF = '48;5;33'
     */
    X0087FF = '48;5;33',

    /**
     * @desc Background #00AF00
     * @default normalBackground.X00AF00 = '48;5;34'
     */
    X00AF00 = '48;5;34',

    /**
     * @desc Background #00AF5F
     * @default normalBackground.X00AF5F = '48;5;35'
     */
    X00AF5F = '48;5;35',

    /**
     * @desc Background #00AF87
     * @default normalBackground.X00AF87 = '48;5;36'
     */
    X00AF87 = '48;5;36',

    /**
     * @desc Background #00AFAF
     * @default normalBackground.X00AFAF = '48;5;37'
     */
    X00AFAF = '48;5;37',

    /**
     * @desc Background #00AFD7
     * @default normalBackground.X00AFD7 = '48;5;38'
     */
    X00AFD7 = '48;5;38',

    /**
     * @desc Background #00AFFF
     * @default normalBackground.X00AFFF = '48;5;39'
     */
    X00AFFF = '48;5;39',

    /**
     * @desc Background #00D700
     * @default normalBackground.X00D700 = '48;5;40'
     */
    X00D700 = '48;5;40',

    /**
     * @desc Background #00D75F
     * @default normalBackground.X00D75F = '48;5;41'
     */
    X00D75F = '48;5;41',

    /**
     * @desc Background #00D787
     * @default normalBackground.X00D787 = '48;5;42'
     */
    X00D787 = '48;5;42',

    /**
     * @desc Background #00D7AF
     * @default normalBackground.X00D7AF = '48;5;43'
     */
    X00D7AF = '48;5;43',

    /**
     * @desc Background #00D7D7
     * @default normalBackground.X00D7D7 = '48;5;44'
     */
    X00D7D7 = '48;5;44',

    /**
     * @desc Background #00D7FF
     * @default normalBackground.X00D7FF = '48;5;45'
     */
    X00D7FF = '48;5;45',

    /**
     * @desc Background #00FF00
     * @default normalBackground.X00FF00 = '48;5;46'
     */
    X00FF00 = '48;5;46',

    /**
     * @desc Background #00FF5F
     * @default normalBackground.X00FF5F = '48;5;47'
     */
    X00FF5F = '48;5;47',

    /**
     * @desc Background #00FF87
     * @default normalBackground.X00FF87 = '48;5;48'
     */
    X00FF87 = '48;5;48',

    /**
     * @desc Background #00FFAF
     * @default normalBackground.X00FFAF = '48;5;49'
     */
    X00FFAF = '48;5;49',

    /**
     * @desc Background #00FFD7
     * @default normalBackground.X00FFD7 = '48;5;50'
     */
    X00FFD7 = '48;5;50',

    /**
     * @desc Background #00FFFF
     * @default normalBackground.X00FFFF = '48;5;51'
     */
    X00FFFF = '48;5;51',

    /**
     * @desc Background #5F0000
     * @default normalBackground.X5F0000 = '48;5;52'
     */
    X5F0000 = '48;5;52',

    /**
     * @desc Background #5F005F
     * @default normalBackground.X5F005F = '48;5;53'
     */
    X5F005F = '48;5;53',

    /**
     * @desc Background #5F0087
     * @default normalBackground.X5F0087 = '48;5;54'
     */
    X5F0087 = '48;5;54',

    /**
     * @desc Background #5F00AF
     * @default normalBackground.X5F00AF = '48;5;55'
     */
    X5F00AF = '48;5;55',

    /**
     * @desc Background #5F00D7
     * @default normalBackground.X5F00D7 = '48;5;56'
     */
    X5F00D7 = '48;5;56',

    /**
     * @desc Background #5F00FF
     * @default normalBackground.X5F00FF = '48;5;57'
     */
    X5F00FF = '48;5;57',

    /**
     * @desc Background #5F5F00
     * @default normalBackground.X5F5F00 = '48;5;58'
     */
    X5F5F00 = '48;5;58',

    /**
     * @desc Background #5F5F5F
     * @default normalBackground.X5F5F5F = '48;5;59'
     */
    X5F5F5F = '48;5;59',

    /**
     * @desc Background #5F5F87
     * @default normalBackground.X5F5F87 = '48;5;60'
     */
    X5F5F87 = '48;5;60',

    /**
     * @desc Background #5F5FAF
     * @default normalBackground.X5F5FAF = '48;5;61'
     */
    X5F5FAF = '48;5;61',

    /**
     * @desc Background #5F5FD7
     * @default normalBackground.X5F5FD7 = '48;5;62'
     */
    X5F5FD7 = '48;5;62',

    /**
     * @desc Background #5F5FFF
     * @default normalBackground.X5F5FFF = '48;5;63'
     */
    X5F5FFF = '48;5;63',

    /**
     * @desc Background #5F8700
     * @default normalBackground.X5F8700 = '48;5;64'
     */
    X5F8700 = '48;5;64',

    /**
     * @desc Background #5F875F
     * @default normalBackground.X5F875F = '48;5;65'
     */
    X5F875F = '48;5;65',

    /**
     * @desc Background #5F8787
     * @default normalBackground.X5F8787 = '48;5;66'
     */
    X5F8787 = '48;5;66',

    /**
     * @desc Background #5F87AF
     * @default normalBackground.X5F87AF = '48;5;67'
     */
    X5F87AF = '48;5;67',

    /**
     * @desc Background #5F87D7
     * @default normalBackground.X5F87D7 = '48;5;68'
     */
    X5F87D7 = '48;5;68',

    /**
     * @desc Background #5F87FF
     * @default normalBackground.X5F87FF = '48;5;69'
     */
    X5F87FF = '48;5;69',

    /**
     * @desc Background #5FAF00
     * @default normalBackground.X5FAF00 = '48;5;70'
     */
    X5FAF00 = '48;5;70',

    /**
     * @desc Background #5FAF5F
     * @default normalBackground.X5FAF5F = '48;5;71'
     */
    X5FAF5F = '48;5;71',

    /**
     * @desc Background #5FAF87
     * @default normalBackground.X5FAF87 = '48;5;72'
     */
    X5FAF87 = '48;5;72',

    /**
     * @desc Background #5FAFAF
     * @default normalBackground.X5FAFAF = '48;5;73'
     */
    X5FAFAF = '48;5;73',

    /**
     * @desc Background #5FAFD7
     * @default normalBackground.X5FAFD7 = '48;5;74'
     */
    X5FAFD7 = '48;5;74',

    /**
     * @desc Background #5FAFFF
     * @default normalBackground.X5FAFFF = '48;5;75'
     */
    X5FAFFF = '48;5;75',

    /**
     * @desc Background #5FD700
     * @default normalBackground.X5FD700 = '48;5;76'
     */
    X5FD700 = '48;5;76',

    /**
     * @desc Background #5FD75F
     * @default normalBackground.X5FD75F = '48;5;77'
     */
    X5FD75F = '48;5;77',

    /**
     * @desc Background #5FD787
     * @default normalBackground.X5FD787 = '48;5;78'
     */
    X5FD787 = '48;5;78',

    /**
     * @desc Background #5FD7AF
     * @default normalBackground.X5FD7AF = '48;5;79'
     */
    X5FD7AF = '48;5;79',

    /**
     * @desc Background #5FD7D7
     * @default normalBackground.X5FD7D7 = '48;5;80'
     */
    X5FD7D7 = '48;5;80',

    /**
     * @desc Background #5FD7FF
     * @default normalBackground.X5FD7FF = '48;5;81'
     */
    X5FD7FF = '48;5;81',

    /**
     * @desc Background #5FFF00
     * @default normalBackground.X5FFF00 = '48;5;82'
     */
    X5FFF00 = '48;5;82',

    /**
     * @desc Background #5FFF5F
     * @default normalBackground.X5FFF5F = '48;5;83'
     */
    X5FFF5F = '48;5;83',

    /**
     * @desc Background #5FFF87
     * @default normalBackground.X5FFF87 = '48;5;84'
     */
    X5FFF87 = '48;5;84',

    /**
     * @desc Background #5FFFAF
     * @default normalBackground.X5FFFAF = '48;5;85'
     */
    X5FFFAF = '48;5;85',

    /**
     * @desc Background #5FFFD7
     * @default normalBackground.X5FFFD7 = '48;5;86'
     */
    X5FFFD7 = '48;5;86',

    /**
     * @desc Background #5FFFFF
     * @default normalBackground.X5FFFFF = '48;5;87'
     */
    X5FFFFF = '48;5;87',

    /**
     * @desc Background #870000
     * @default normalBackground.X870000 = '48;5;88'
     */
    X870000 = '48;5;88',

    /**
     * @desc Background #87005F
     * @default normalBackground.X87005F = '48;5;89'
     */
    X87005F = '48;5;89',

    /**
     * @desc Background #870087
     * @default normalBackground.X870087 = '48;5;90'
     */
    X870087 = '48;5;90',

    /**
     * @desc Background #8700AF
     * @default normalBackground.X8700AF = '48;5;91'
     */
    X8700AF = '48;5;91',

    /**
     * @desc Background #8700D7
     * @default normalBackground.X8700D7 = '48;5;92'
     */
    X8700D7 = '48;5;92',

    /**
     * @desc Background #8700FF
     * @default normalBackground.X8700FF = '48;5;93'
     */
    X8700FF = '48;5;93',

    /**
     * @desc Background #875F00
     * @default normalBackground.X875F00 = '48;5;94'
     */
    X875F00 = '48;5;94',

    /**
     * @desc Background #875F5F
     * @default normalBackground.X875F5F = '48;5;95'
     */
    X875F5F = '48;5;95',

    /**
     * @desc Background #875F87
     * @default normalBackground.X875F87 = '48;5;96'
     */
    X875F87 = '48;5;96',

    /**
     * @desc Background #875FAF
     * @default normalBackground.X875FAF = '48;5;97'
     */
    X875FAF = '48;5;97',

    /**
     * @desc Background #875FD7
     * @default normalBackground.X875FD7 = '48;5;98'
     */
    X875FD7 = '48;5;98',

    /**
     * @desc Background #875FFF
     * @default normalBackground.X875FFF = '48;5;99'
     */
    X875FFF = '48;5;99',

    /**
     * @desc Background #878700
     * @default normalBackground.X878700 = '48;5;100'
     */
    X878700 = '48;5;100',

    /**
     * @desc Background #87875F
     * @default normalBackground.X87875F = '48;5;101'
     */
    X87875F = '48;5;101',

    /**
     * @desc Background #878787
     * @default normalBackground.X878787 = '48;5;102'
     */
    X878787 = '48;5;102',

    /**
     * @desc Background #8787AF
     * @default normalBackground.X8787AF = '48;5;103'
     */
    X8787AF = '48;5;103',

    /**
     * @desc Background #8787D7
     * @default normalBackground.X8787D7 = '48;5;104'
     */
    X8787D7 = '48;5;104',

    /**
     * @desc Background #8787FF
     * @default normalBackground.X8787FF = '48;5;105'
     */
    X8787FF = '48;5;105',

    /**
     * @desc Background #87AF00
     * @default normalBackground.X87AF00 = '48;5;106'
     */
    X87AF00 = '48;5;106',

    /**
     * @desc Background #87AF5F
     * @default normalBackground.X87AF5F = '48;5;107'
     */
    X87AF5F = '48;5;107',

    /**
     * @desc Background #87AF87
     * @default normalBackground.X87AF87 = '48;5;108'
     */
    X87AF87 = '48;5;108',

    /**
     * @desc Background #87AFAF
     * @default normalBackground.X87AFAF = '48;5;109'
     */
    X87AFAF = '48;5;109',

    /**
     * @desc Background #87AFD7
     * @default normalBackground.X87AFD7 = '48;5;110'
     */
    X87AFD7 = '48;5;110',

    /**
     * @desc Background #87AFFF
     * @default normalBackground.X87AFFF = '48;5;111'
     */
    X87AFFF = '48;5;111',

    /**
     * @desc Background #87D700
     * @default normalBackground.X87D700 = '48;5;112'
     */
    X87D700 = '48;5;112',

    /**
     * @desc Background #87D75F
     * @default normalBackground.X87D75F = '48;5;113'
     */
    X87D75F = '48;5;113',

    /**
     * @desc Background #87D787
     * @default normalBackground.X87D787 = '48;5;114'
     */
    X87D787 = '48;5;114',

    /**
     * @desc Background #87D7AF
     * @default normalBackground.X87D7AF = '48;5;115'
     */
    X87D7AF = '48;5;115',

    /**
     * @desc Background #87D7D7
     * @default normalBackground.X87D7D7 = '48;5;116'
     */
    X87D7D7 = '48;5;116',

    /**
     * @desc Background #87D7FF
     * @default normalBackground.X87D7FF = '48;5;117'
     */
    X87D7FF = '48;5;117',

    /**
     * @desc Background #87FF00
     * @default normalBackground.X87FF00 = '48;5;118'
     */
    X87FF00 = '48;5;118',

    /**
     * @desc Background #87FF5F
     * @default normalBackground.X87FF5F = '48;5;119'
     */
    X87FF5F = '48;5;119',

    /**
     * @desc Background #87FF87
     * @default normalBackground.X87FF87 = '48;5;120'
     */
    X87FF87 = '48;5;120',

    /**
     * @desc Background #87FFAF
     * @default normalBackground.X87FFAF = '48;5;121'
     */
    X87FFAF = '48;5;121',

    /**
     * @desc Background #87FFD7
     * @default normalBackground.X87FFD7 = '48;5;122'
     */
    X87FFD7 = '48;5;122',

    /**
     * @desc Background #87FFFF
     * @default normalBackground.X87FFFF = '48;5;123'
     */
    X87FFFF = '48;5;123',

    /**
     * @desc Background #AF0000
     * @default normalBackground.XAF0000 = '48;5;124'
     */
    XAF0000 = '48;5;124',

    /**
     * @desc Background #AF005F
     * @default normalBackground.XAF005F = '48;5;125'
     */
    XAF005F = '48;5;125',

    /**
     * @desc Background #AF0087
     * @default normalBackground.XAF0087 = '48;5;126'
     */
    XAF0087 = '48;5;126',

    /**
     * @desc Background #AF00AF
     * @default normalBackground.XAF00AF = '48;5;127'
     */
    XAF00AF = '48;5;127',

    /**
     * @desc Background #AF00D7
     * @default normalBackground.XAF00D7 = '48;5;128'
     */
    XAF00D7 = '48;5;128',

    /**
     * @desc Background #AF00FF
     * @default normalBackground.XAF00FF = '48;5;129'
     */
    XAF00FF = '48;5;129',

    /**
     * @desc Background #AF5F00
     * @default normalBackground.XAF5F00 = '48;5;130'
     */
    XAF5F00 = '48;5;130',

    /**
     * @desc Background #AF5F5F
     * @default normalBackground.XAF5F5F = '48;5;131'
     */
    XAF5F5F = '48;5;131',

    /**
     * @desc Background #AF5F87
     * @default normalBackground.XAF5F87 = '48;5;132'
     */
    XAF5F87 = '48;5;132',

    /**
     * @desc Background #AF5FAF
     * @default normalBackground.XAF5FAF = '48;5;133'
     */
    XAF5FAF = '48;5;133',

    /**
     * @desc Background #AF5FD7
     * @default normalBackground.XAF5FD7 = '48;5;134'
     */
    XAF5FD7 = '48;5;134',

    /**
     * @desc Background #AF5FFF
     * @default normalBackground.XAF5FFF = '48;5;135'
     */
    XAF5FFF = '48;5;135',

    /**
     * @desc Background #AF8700
     * @default normalBackground.XAF8700 = '48;5;136'
     */
    XAF8700 = '48;5;136',

    /**
     * @desc Background #AF875F
     * @default normalBackground.XAF875F = '48;5;137'
     */
    XAF875F = '48;5;137',

    /**
     * @desc Background #AF8787
     * @default normalBackground.XAF8787 = '48;5;138'
     */
    XAF8787 = '48;5;138',

    /**
     * @desc Background #AF87AF
     * @default normalBackground.XAF87AF = '48;5;139'
     */
    XAF87AF = '48;5;139',

    /**
     * @desc Background #AF87D7
     * @default normalBackground.XAF87D7 = '48;5;140'
     */
    XAF87D7 = '48;5;140',

    /**
     * @desc Background #AF87FF
     * @default normalBackground.XAF87FF = '48;5;141'
     */
    XAF87FF = '48;5;141',

    /**
     * @desc Background #AFAF00
     * @default normalBackground.XAFAF00 = '48;5;142'
     */
    XAFAF00 = '48;5;142',

    /**
     * @desc Background #AFAF5F
     * @default normalBackground.XAFAF5F = '48;5;143'
     */
    XAFAF5F = '48;5;143',

    /**
     * @desc Background #AFAF87
     * @default normalBackground.XAFAF87 = '48;5;144'
     */
    XAFAF87 = '48;5;144',

    /**
     * @desc Background #AFAFAF
     * @default normalBackground.XAFAFAF = '48;5;145'
     */
    XAFAFAF = '48;5;145',

    /**
     * @desc Background #AFAFD7
     * @default normalBackground.XAFAFD7 = '48;5;146'
     */
    XAFAFD7 = '48;5;146',

    /**
     * @desc Background #AFAFFF
     * @default normalBackground.XAFAFFF = '48;5;147'
     */
    XAFAFFF = '48;5;147',

    /**
     * @desc Background #AFD700
     * @default normalBackground.XAFD700 = '48;5;148'
     */
    XAFD700 = '48;5;148',

    /**
     * @desc Background #AFD75F
     * @default normalBackground.XAFD75F = '48;5;149'
     */
    XAFD75F = '48;5;149',

    /**
     * @desc Background #AFD787
     * @default normalBackground.XAFD787 = '48;5;150'
     */
    XAFD787 = '48;5;150',

    /**
     * @desc Background #AFD7AF
     * @default normalBackground.XAFD7AF = '48;5;151'
     */
    XAFD7AF = '48;5;151',

    /**
     * @desc Background #AFD7D7
     * @default normalBackground.XAFD7D7 = '48;5;152'
     */
    XAFD7D7 = '48;5;152',

    /**
     * @desc Background #AFD7FF
     * @default normalBackground.XAFD7FF = '48;5;153'
     */
    XAFD7FF = '48;5;153',

    /**
     * @desc Background #AFFF00
     * @default normalBackground.XAFFF00 = '48;5;154'
     */
    XAFFF00 = '48;5;154',

    /**
     * @desc Background #AFFF5F
     * @default normalBackground.XAFFF5F = '48;5;155'
     */
    XAFFF5F = '48;5;155',

    /**
     * @desc Background #AFFF87
     * @default normalBackground.XAFFF87 = '48;5;156'
     */
    XAFFF87 = '48;5;156',

    /**
     * @desc Background #AFFFAF
     * @default normalBackground.XAFFFAF = '48;5;157'
     */
    XAFFFAF = '48;5;157',

    /**
     * @desc Background #AFFFD7
     * @default normalBackground.XAFFFD7 = '48;5;158'
     */
    XAFFFD7 = '48;5;158',

    /**
     * @desc Background #AFFFFF
     * @default normalBackground.XAFFFFF = '48;5;159'
     */
    XAFFFFF = '48;5;159',

    /**
     * @desc Background #D70000
     * @default normalBackground.XD70000 = '48;5;160'
     */
    XD70000 = '48;5;160',

    /**
     * @desc Background #D7005F
     * @default normalBackground.XD7005F = '48;5;161'
     */
    XD7005F = '48;5;161',

    /**
     * @desc Background #D70087
     * @default normalBackground.XD70087 = '48;5;162'
     */
    XD70087 = '48;5;162',

    /**
     * @desc Background #D700AF
     * @default normalBackground.XD700AF = '48;5;163'
     */
    XD700AF = '48;5;163',

    /**
     * @desc Background #D700D7
     * @default normalBackground.XD700D7 = '48;5;164'
     */
    XD700D7 = '48;5;164',

    /**
     * @desc Background #D700FF
     * @default normalBackground.XD700FF = '48;5;165'
     */
    XD700FF = '48;5;165',

    /**
     * @desc Background #D75F00
     * @default normalBackground.XD75F00 = '48;5;166'
     */
    XD75F00 = '48;5;166',

    /**
     * @desc Background #D75F5F
     * @default normalBackground.XD75F5F = '48;5;167'
     */
    XD75F5F = '48;5;167',

    /**
     * @desc Background #D75F87
     * @default normalBackground.XD75F87 = '48;5;168'
     */
    XD75F87 = '48;5;168',

    /**
     * @desc Background #D75FAF
     * @default normalBackground.XD75FAF = '48;5;169'
     */
    XD75FAF = '48;5;169',

    /**
     * @desc Background #D75FD7
     * @default normalBackground.XD75FD7 = '48;5;170'
     */
    XD75FD7 = '48;5;170',

    /**
     * @desc Background #D75FFF
     * @default normalBackground.XD75FFF = '48;5;171'
     */
    XD75FFF = '48;5;171',

    /**
     * @desc Background #D78700
     * @default normalBackground.XD78700 = '48;5;172'
     */
    XD78700 = '48;5;172',

    /**
     * @desc Background #D7875F
     * @default normalBackground.XD7875F = '48;5;173'
     */
    XD7875F = '48;5;173',

    /**
     * @desc Background #D78787
     * @default normalBackground.XD78787 = '48;5;174'
     */
    XD78787 = '48;5;174',

    /**
     * @desc Background #D787AF
     * @default normalBackground.XD787AF = '48;5;175'
     */
    XD787AF = '48;5;175',

    /**
     * @desc Background #D787D7
     * @default normalBackground.XD787D7 = '48;5;176'
     */
    XD787D7 = '48;5;176',

    /**
     * @desc Background #D787FF
     * @default normalBackground.XD787FF = '48;5;177'
     */
    XD787FF = '48;5;177',

    /**
     * @desc Background #D7AF00
     * @default normalBackground.XD7AF00 = '48;5;178'
     */
    XD7AF00 = '48;5;178',

    /**
     * @desc Background #D7AF5F
     * @default normalBackground.XD7AF5F = '48;5;179'
     */
    XD7AF5F = '48;5;179',

    /**
     * @desc Background #D7AF87
     * @default normalBackground.XD7AF87 = '48;5;180'
     */
    XD7AF87 = '48;5;180',

    /**
     * @desc Background #D7AFAF
     * @default normalBackground.XD7AFAF = '48;5;181'
     */
    XD7AFAF = '48;5;181',

    /**
     * @desc Background #D7AFD7
     * @default normalBackground.XD7AFD7 = '48;5;182'
     */
    XD7AFD7 = '48;5;182',

    /**
     * @desc Background #D7AFFF
     * @default normalBackground.XD7AFFF = '48;5;183'
     */
    XD7AFFF = '48;5;183',

    /**
     * @desc Background #D7D700
     * @default normalBackground.XD7D700 = '48;5;184'
     */
    XD7D700 = '48;5;184',

    /**
     * @desc Background #D7D75F
     * @default normalBackground.XD7D75F = '48;5;185'
     */
    XD7D75F = '48;5;185',

    /**
     * @desc Background #D7D787
     * @default normalBackground.XD7D787 = '48;5;186'
     */
    XD7D787 = '48;5;186',

    /**
     * @desc Background #D7D7AF
     * @default normalBackground.XD7D7AF = '48;5;187'
     */
    XD7D7AF = '48;5;187',

    /**
     * @desc Background #D7D7D7
     * @default normalBackground.XD7D7D7 = '48;5;188'
     */
    XD7D7D7 = '48;5;188',

    /**
     * @desc Background #D7D7FF
     * @default normalBackground.XD7D7FF = '48;5;189'
     */
    XD7D7FF = '48;5;189',

    /**
     * @desc Background #D7FF00
     * @default normalBackground.XD7FF00 = '48;5;190'
     */
    XD7FF00 = '48;5;190',

    /**
     * @desc Background #D7FF5F
     * @default normalBackground.XD7FF5F = '48;5;191'
     */
    XD7FF5F = '48;5;191',

    /**
     * @desc Background #D7FF87
     * @default normalBackground.XD7FF87 = '48;5;192'
     */
    XD7FF87 = '48;5;192',

    /**
     * @desc Background #D7FFAF
     * @default normalBackground.XD7FFAF = '48;5;193'
     */
    XD7FFAF = '48;5;193',

    /**
     * @desc Background #D7FFD7
     * @default normalBackground.XD7FFD7 = '48;5;194'
     */
    XD7FFD7 = '48;5;194',

    /**
     * @desc Background #D7FFFF
     * @default normalBackground.XD7FFFF = '48;5;195'
     */
    XD7FFFF = '48;5;195',

    /**
     * @desc Background #FF0000
     * @default normalBackground.XFF0000 = '48;5;196'
     */
    XFF0000 = '48;5;196',

    /**
     * @desc Background #FF005F
     * @default normalBackground.XFF005F = '48;5;197'
     */
    XFF005F = '48;5;197',

    /**
     * @desc Background #FF0087
     * @default normalBackground.XFF0087 = '48;5;198'
     */
    XFF0087 = '48;5;198',

    /**
     * @desc Background #FF00AF
     * @default normalBackground.XFF00AF = '48;5;199'
     */
    XFF00AF = '48;5;199',

    /**
     * @desc Background #FF00D7
     * @default normalBackground.XFF00D7 = '48;5;200'
     */
    XFF00D7 = '48;5;200',

    /**
     * @desc Background #FF00FF
     * @default normalBackground.XFF00FF = '48;5;201'
     */
    XFF00FF = '48;5;201',

    /**
     * @desc Background #FF5F00
     * @default normalBackground.XFF5F00 = '48;5;202'
     */
    XFF5F00 = '48;5;202',

    /**
     * @desc Background #FF5F5F
     * @default normalBackground.XFF5F5F = '48;5;203'
     */
    XFF5F5F = '48;5;203',

    /**
     * @desc Background #FF5F87
     * @default normalBackground.XFF5F87 = '48;5;204'
     */
    XFF5F87 = '48;5;204',

    /**
     * @desc Background #FF5FAF
     * @default normalBackground.XFF5FAF = '48;5;205'
     */
    XFF5FAF = '48;5;205',

    /**
     * @desc Background #FF5FD7
     * @default normalBackground.XFF5FD7 = '48;5;206'
     */
    XFF5FD7 = '48;5;206',

    /**
     * @desc Background #FF5FFF
     * @default normalBackground.XFF5FFF = '48;5;207'
     */
    XFF5FFF = '48;5;207',

    /**
     * @desc Background #FF8700
     * @default normalBackground.XFF8700 = '48;5;208'
     */
    XFF8700 = '48;5;208',

    /**
     * @desc Background #FF875F
     * @default normalBackground.XFF875F = '48;5;209'
     */
    XFF875F = '48;5;209',

    /**
     * @desc Background #FF8787
     * @default normalBackground.XFF8787 = '48;5;210'
     */
    XFF8787 = '48;5;210',

    /**
     * @desc Background #FF87AF
     * @default normalBackground.XFF87AF = '48;5;211'
     */
    XFF87AF = '48;5;211',

    /**
     * @desc Background #FF87D7
     * @default normalBackground.XFF87D7 = '48;5;212'
     */
    XFF87D7 = '48;5;212',

    /**
     * @desc Background #FF87FF
     * @default normalBackground.XFF87FF = '48;5;213'
     */
    XFF87FF = '48;5;213',

    /**
     * @desc Background #FFAF00
     * @default normalBackground.XFFAF00 = '48;5;214'
     */
    XFFAF00 = '48;5;214',

    /**
     * @desc Background #FFAF5F
     * @default normalBackground.XFFAF5F = '48;5;215'
     */
    XFFAF5F = '48;5;215',

    /**
     * @desc Background #FFAF87
     * @default normalBackground.XFFAF87 = '48;5;216'
     */
    XFFAF87 = '48;5;216',

    /**
     * @desc Background #FFAFAF
     * @default normalBackground.XFFAFAF = '48;5;217'
     */
    XFFAFAF = '48;5;217',

    /**
     * @desc Background #FFAFD7
     * @default normalBackground.XFFAFD7 = '48;5;218'
     */
    XFFAFD7 = '48;5;218',

    /**
     * @desc Background #FFAFFF
     * @default normalBackground.XFFAFFF = '48;5;219'
     */
    XFFAFFF = '48;5;219',

    /**
     * @desc Background #FFD700
     * @default normalBackground.XFFD700 = '48;5;220'
     */
    XFFD700 = '48;5;220',

    /**
     * @desc Background #FFD75F
     * @default normalBackground.XFFD75F = '48;5;221'
     */
    XFFD75F = '48;5;221',

    /**
     * @desc Background #FFD787
     * @default normalBackground.XFFD787 = '48;5;222'
     */
    XFFD787 = '48;5;222',

    /**
     * @desc Background #FFD7AF
     * @default normalBackground.XFFD7AF = '48;5;223'
     */
    XFFD7AF = '48;5;223',

    /**
     * @desc Background #FFD7D7
     * @default normalBackground.XFFD7D7 = '48;5;224'
     */
    XFFD7D7 = '48;5;224',

    /**
     * @desc Background #FFD7FF
     * @default normalBackground.XFFD7FF = '48;5;225'
     */
    XFFD7FF = '48;5;225',

    /**
     * @desc Background #FFFF00
     * @default normalBackground.XFFFF00 = '48;5;226'
     */
    XFFFF00 = '48;5;226',

    /**
     * @desc Background #FFFF5F
     * @default normalBackground.XFFFF5F = '48;5;227'
     */
    XFFFF5F = '48;5;227',

    /**
     * @desc Background #FFFF87
     * @default normalBackground.XFFFF87 = '48;5;228'
     */
    XFFFF87 = '48;5;228',

    /**
     * @desc Background #FFFFAF
     * @default normalBackground.XFFFFAF = '48;5;229'
     */
    XFFFFAF = '48;5;229',

    /**
     * @desc Background #FFFFD7
     * @default normalBackground.XFFFFD7 = '48;5;230'
     */
    XFFFFD7 = '48;5;230',

    /**
     * @desc Background #FFFFFF
     * @default normalBackground.XFFFFFF = '48;5;231'
     */
    XFFFFFF = '48;5;231'
}


