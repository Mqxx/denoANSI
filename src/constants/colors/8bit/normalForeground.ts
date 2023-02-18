/**
 * @desc ANSI 8-Bit foreground colors normal
 * @readonly
 * @example
 * 
 * '<CSI>{hex 1};{hex 2};{hex n}m'
 * 
 * @enum {string}
 */
export enum normalForeground {
    /**
     * @desc Foreground #000000
     * @default normalForeground.X000000 = '38;5;16'
     */
    X000000 = '38;5;16',

    /**
     * @desc Foreground #00005F
     * @default normalForeground.X00005F = '38;5;17'
     */
    X00005F = '38;5;17',

    /**
     * @desc Foreground #000087
     * @default normalForeground.X000087 = '38;5;18'
     */
    X000087 = '38;5;18',

    /**
     * @desc Foreground #0000AF
     * @default normalForeground.X0000AF = '38;5;19'
     */
    X0000AF = '38;5;19',

    /**
     * @desc Foreground #0000D7
     * @default normalForeground.X0000D7 = '38;5;20'
     */
    X0000D7 = '38;5;20',

    /**
     * @desc Foreground #0000FF
     * @default normalForeground.X0000FF = '38;5;21'
     */
    X0000FF = '38;5;21',

    /**
     * @desc Foreground #005F00
     * @default normalForeground.X005F00 = '38;5;22'
     */
    X005F00 = '38;5;22',

    /**
     * @desc Foreground #005F5F
     * @default normalForeground.X005F5F = '38;5;23'
     */
    X005F5F = '38;5;23',

    /**
     * @desc Foreground #005F87
     * @default normalForeground.X005F87 = '38;5;24'
     */
    X005F87 = '38;5;24',

    /**
     * @desc Foreground #005FAF
     * @default normalForeground.X005FAF = '38;5;25'
     */
    X005FAF = '38;5;25',

    /**
     * @desc Foreground #005FD7
     * @default normalForeground.X005FD7 = '38;5;26'
     */
    X005FD7 = '38;5;26',

    /**
     * @desc Foreground #005FFF
     * @default normalForeground.X005FFF = '38;5;27'
     */
    X005FFF = '38;5;27',

    /**
     * @desc Foreground #008700
     * @default normalForeground.X008700 = '38;5;28'
     */
    X008700 = '38;5;28',

    /**
     * @desc Foreground #00875F
     * @default normalForeground.X00875F = '38;5;29'
     */
    X00875F = '38;5;29',

    /**
     * @desc Foreground #008787
     * @default normalForeground.X008787 = '38;5;30'
     */
    X008787 = '38;5;30',

    /**
     * @desc Foreground #0087AF
     * @default normalForeground.X0087AF = '38;5;31'
     */
    X0087AF = '38;5;31',

    /**
     * @desc Foreground #0087D7
     * @default normalForeground.X0087D7 = '38;5;32'
     */
    X0087D7 = '38;5;32',

    /**
     * @desc Foreground #0087FF
     * @default normalForeground.X0087FF = '38;5;33'
     */
    X0087FF = '38;5;33',

    /**
     * @desc Foreground #00AF00
     * @default normalForeground.X00AF00 = '38;5;34'
     */
    X00AF00 = '38;5;34',

    /**
     * @desc Foreground #00AF5F
     * @default normalForeground.X00AF5F = '38;5;35'
     */
    X00AF5F = '38;5;35',

    /**
     * @desc Foreground #00AF87
     * @default normalForeground.X00AF87 = '38;5;36'
     */
    X00AF87 = '38;5;36',

    /**
     * @desc Foreground #00AFAF
     * @default normalForeground.X00AFAF = '38;5;37'
     */
    X00AFAF = '38;5;37',

    /**
     * @desc Foreground #00AFD7
     * @default normalForeground.X00AFD7 = '38;5;38'
     */
    X00AFD7 = '38;5;38',

    /**
     * @desc Foreground #00AFFF
     * @default normalForeground.X00AFFF = '38;5;39'
     */
    X00AFFF = '38;5;39',

    /**
     * @desc Foreground #00D700
     * @default normalForeground.X00D700 = '38;5;40'
     */
    X00D700 = '38;5;40',

    /**
     * @desc Foreground #00D75F
     * @default normalForeground.X00D75F = '38;5;41'
     */
    X00D75F = '38;5;41',

    /**
     * @desc Foreground #00D787
     * @default normalForeground.X00D787 = '38;5;42'
     */
    X00D787 = '38;5;42',

    /**
     * @desc Foreground #00D7AF
     * @default normalForeground.X00D7AF = '38;5;43'
     */
    X00D7AF = '38;5;43',

    /**
     * @desc Foreground #00D7D7
     * @default normalForeground.X00D7D7 = '38;5;44'
     */
    X00D7D7 = '38;5;44',

    /**
     * @desc Foreground #00D7FF
     * @default normalForeground.X00D7FF = '38;5;45'
     */
    X00D7FF = '38;5;45',

    /**
     * @desc Foreground #00FF00
     * @default normalForeground.X00FF00 = '38;5;46'
     */
    X00FF00 = '38;5;46',

    /**
     * @desc Foreground #00FF5F
     * @default normalForeground.X00FF5F = '38;5;47'
     */
    X00FF5F = '38;5;47',

    /**
     * @desc Foreground #00FF87
     * @default normalForeground.X00FF87 = '38;5;48'
     */
    X00FF87 = '38;5;48',

    /**
     * @desc Foreground #00FFAF
     * @default normalForeground.X00FFAF = '38;5;49'
     */
    X00FFAF = '38;5;49',

    /**
     * @desc Foreground #00FFD7
     * @default normalForeground.X00FFD7 = '38;5;50'
     */
    X00FFD7 = '38;5;50',

    /**
     * @desc Foreground #00FFFF
     * @default normalForeground.X00FFFF = '38;5;51'
     */
    X00FFFF = '38;5;51',

    /**
     * @desc Foreground #5F0000
     * @default normalForeground.X5F0000 = '38;5;52'
     */
    X5F0000 = '38;5;52',

    /**
     * @desc Foreground #5F005F
     * @default normalForeground.X5F005F = '38;5;53'
     */
    X5F005F = '38;5;53',

    /**
     * @desc Foreground #5F0087
     * @default normalForeground.X5F0087 = '38;5;54'
     */
    X5F0087 = '38;5;54',

    /**
     * @desc Foreground #5F00AF
     * @default normalForeground.X5F00AF = '38;5;55'
     */
    X5F00AF = '38;5;55',

    /**
     * @desc Foreground #5F00D7
     * @default normalForeground.X5F00D7 = '38;5;56'
     */
    X5F00D7 = '38;5;56',

    /**
     * @desc Foreground #5F00FF
     * @default normalForeground.X5F00FF = '38;5;57'
     */
    X5F00FF = '38;5;57',

    /**
     * @desc Foreground #5F5F00
     * @default normalForeground.X5F5F00 = '38;5;58'
     */
    X5F5F00 = '38;5;58',

    /**
     * @desc Foreground #5F5F5F
     * @default normalForeground.X5F5F5F = '38;5;59'
     */
    X5F5F5F = '38;5;59',

    /**
     * @desc Foreground #5F5F87
     * @default normalForeground.X5F5F87 = '38;5;60'
     */
    X5F5F87 = '38;5;60',

    /**
     * @desc Foreground #5F5FAF
     * @default normalForeground.X5F5FAF = '38;5;61'
     */
    X5F5FAF = '38;5;61',

    /**
     * @desc Foreground #5F5FD7
     * @default normalForeground.X5F5FD7 = '38;5;62'
     */
    X5F5FD7 = '38;5;62',

    /**
     * @desc Foreground #5F5FFF
     * @default normalForeground.X5F5FFF = '38;5;63'
     */
    X5F5FFF = '38;5;63',

    /**
     * @desc Foreground #5F8700
     * @default normalForeground.X5F8700 = '38;5;64'
     */
    X5F8700 = '38;5;64',

    /**
     * @desc Foreground #5F875F
     * @default normalForeground.X5F875F = '38;5;65'
     */
    X5F875F = '38;5;65',

    /**
     * @desc Foreground #5F8787
     * @default normalForeground.X5F8787 = '38;5;66'
     */
    X5F8787 = '38;5;66',

    /**
     * @desc Foreground #5F87AF
     * @default normalForeground.X5F87AF = '38;5;67'
     */
    X5F87AF = '38;5;67',

    /**
     * @desc Foreground #5F87D7
     * @default normalForeground.X5F87D7 = '38;5;68'
     */
    X5F87D7 = '38;5;68',

    /**
     * @desc Foreground #5F87FF
     * @default normalForeground.X5F87FF = '38;5;69'
     */
    X5F87FF = '38;5;69',

    /**
     * @desc Foreground #5FAF00
     * @default normalForeground.X5FAF00 = '38;5;70'
     */
    X5FAF00 = '38;5;70',

    /**
     * @desc Foreground #5FAF5F
     * @default normalForeground.X5FAF5F = '38;5;71'
     */
    X5FAF5F = '38;5;71',

    /**
     * @desc Foreground #5FAF87
     * @default normalForeground.X5FAF87 = '38;5;72'
     */
    X5FAF87 = '38;5;72',

    /**
     * @desc Foreground #5FAFAF
     * @default normalForeground.X5FAFAF = '38;5;73'
     */
    X5FAFAF = '38;5;73',

    /**
     * @desc Foreground #5FAFD7
     * @default normalForeground.X5FAFD7 = '38;5;74'
     */
    X5FAFD7 = '38;5;74',

    /**
     * @desc Foreground #5FAFFF
     * @default normalForeground.X5FAFFF = '38;5;75'
     */
    X5FAFFF = '38;5;75',

    /**
     * @desc Foreground #5FD700
     * @default normalForeground.X5FD700 = '38;5;76'
     */
    X5FD700 = '38;5;76',

    /**
     * @desc Foreground #5FD75F
     * @default normalForeground.X5FD75F = '38;5;77'
     */
    X5FD75F = '38;5;77',

    /**
     * @desc Foreground #5FD787
     * @default normalForeground.X5FD787 = '38;5;78'
     */
    X5FD787 = '38;5;78',

    /**
     * @desc Foreground #5FD7AF
     * @default normalForeground.X5FD7AF = '38;5;79'
     */
    X5FD7AF = '38;5;79',

    /**
     * @desc Foreground #5FD7D7
     * @default normalForeground.X5FD7D7 = '38;5;80'
     */
    X5FD7D7 = '38;5;80',

    /**
     * @desc Foreground #5FD7FF
     * @default normalForeground.X5FD7FF = '38;5;81'
     */
    X5FD7FF = '38;5;81',

    /**
     * @desc Foreground #5FFF00
     * @default normalForeground.X5FFF00 = '38;5;82'
     */
    X5FFF00 = '38;5;82',

    /**
     * @desc Foreground #5FFF5F
     * @default normalForeground.X5FFF5F = '38;5;83'
     */
    X5FFF5F = '38;5;83',

    /**
     * @desc Foreground #5FFF87
     * @default normalForeground.X5FFF87 = '38;5;84'
     */
    X5FFF87 = '38;5;84',

    /**
     * @desc Foreground #5FFFAF
     * @default normalForeground.X5FFFAF = '38;5;85'
     */
    X5FFFAF = '38;5;85',

    /**
     * @desc Foreground #5FFFD7
     * @default normalForeground.X5FFFD7 = '38;5;86'
     */
    X5FFFD7 = '38;5;86',

    /**
     * @desc Foreground #5FFFFF
     * @default normalForeground.X5FFFFF = '38;5;87'
     */
    X5FFFFF = '38;5;87',

    /**
     * @desc Foreground #870000
     * @default normalForeground.X870000 = '38;5;88'
     */
    X870000 = '38;5;88',

    /**
     * @desc Foreground #87005F
     * @default normalForeground.X87005F = '38;5;89'
     */
    X87005F = '38;5;89',

    /**
     * @desc Foreground #870087
     * @default normalForeground.X870087 = '38;5;90'
     */
    X870087 = '38;5;90',

    /**
     * @desc Foreground #8700AF
     * @default normalForeground.X8700AF = '38;5;91'
     */
    X8700AF = '38;5;91',

    /**
     * @desc Foreground #8700D7
     * @default normalForeground.X8700D7 = '38;5;92'
     */
    X8700D7 = '38;5;92',

    /**
     * @desc Foreground #8700FF
     * @default normalForeground.X8700FF = '38;5;93'
     */
    X8700FF = '38;5;93',

    /**
     * @desc Foreground #875F00
     * @default normalForeground.X875F00 = '38;5;94'
     */
    X875F00 = '38;5;94',

    /**
     * @desc Foreground #875F5F
     * @default normalForeground.X875F5F = '38;5;95'
     */
    X875F5F = '38;5;95',

    /**
     * @desc Foreground #875F87
     * @default normalForeground.X875F87 = '38;5;96'
     */
    X875F87 = '38;5;96',

    /**
     * @desc Foreground #875FAF
     * @default normalForeground.X875FAF = '38;5;97'
     */
    X875FAF = '38;5;97',

    /**
     * @desc Foreground #875FD7
     * @default normalForeground.X875FD7 = '38;5;98'
     */
    X875FD7 = '38;5;98',

    /**
     * @desc Foreground #875FFF
     * @default normalForeground.X875FFF = '38;5;99'
     */
    X875FFF = '38;5;99',

    /**
     * @desc Foreground #878700
     * @default normalForeground.X878700 = '38;5;100'
     */
    X878700 = '38;5;100',

    /**
     * @desc Foreground #87875F
     * @default normalForeground.X87875F = '38;5;101'
     */
    X87875F = '38;5;101',

    /**
     * @desc Foreground #878787
     * @default normalForeground.X878787 = '38;5;102'
     */
    X878787 = '38;5;102',

    /**
     * @desc Foreground #8787AF
     * @default normalForeground.X8787AF = '38;5;103'
     */
    X8787AF = '38;5;103',

    /**
     * @desc Foreground #8787D7
     * @default normalForeground.X8787D7 = '38;5;104'
     */
    X8787D7 = '38;5;104',

    /**
     * @desc Foreground #8787FF
     * @default normalForeground.X8787FF = '38;5;105'
     */
    X8787FF = '38;5;105',

    /**
     * @desc Foreground #87AF00
     * @default normalForeground.X87AF00 = '38;5;106'
     */
    X87AF00 = '38;5;106',

    /**
     * @desc Foreground #87AF5F
     * @default normalForeground.X87AF5F = '38;5;107'
     */
    X87AF5F = '38;5;107',

    /**
     * @desc Foreground #87AF87
     * @default normalForeground.X87AF87 = '38;5;108'
     */
    X87AF87 = '38;5;108',

    /**
     * @desc Foreground #87AFAF
     * @default normalForeground.X87AFAF = '38;5;109'
     */
    X87AFAF = '38;5;109',

    /**
     * @desc Foreground #87AFD7
     * @default normalForeground.X87AFD7 = '38;5;110'
     */
    X87AFD7 = '38;5;110',

    /**
     * @desc Foreground #87AFFF
     * @default normalForeground.X87AFFF = '38;5;111'
     */
    X87AFFF = '38;5;111',

    /**
     * @desc Foreground #87D700
     * @default normalForeground.X87D700 = '38;5;112'
     */
    X87D700 = '38;5;112',

    /**
     * @desc Foreground #87D75F
     * @default normalForeground.X87D75F = '38;5;113'
     */
    X87D75F = '38;5;113',

    /**
     * @desc Foreground #87D787
     * @default normalForeground.X87D787 = '38;5;114'
     */
    X87D787 = '38;5;114',

    /**
     * @desc Foreground #87D7AF
     * @default normalForeground.X87D7AF = '38;5;115'
     */
    X87D7AF = '38;5;115',

    /**
     * @desc Foreground #87D7D7
     * @default normalForeground.X87D7D7 = '38;5;116'
     */
    X87D7D7 = '38;5;116',

    /**
     * @desc Foreground #87D7FF
     * @default normalForeground.X87D7FF = '38;5;117'
     */
    X87D7FF = '38;5;117',

    /**
     * @desc Foreground #87FF00
     * @default normalForeground.X87FF00 = '38;5;118'
     */
    X87FF00 = '38;5;118',

    /**
     * @desc Foreground #87FF5F
     * @default normalForeground.X87FF5F = '38;5;119'
     */
    X87FF5F = '38;5;119',

    /**
     * @desc Foreground #87FF87
     * @default normalForeground.X87FF87 = '38;5;120'
     */
    X87FF87 = '38;5;120',

    /**
     * @desc Foreground #87FFAF
     * @default normalForeground.X87FFAF = '38;5;121'
     */
    X87FFAF = '38;5;121',

    /**
     * @desc Foreground #87FFD7
     * @default normalForeground.X87FFD7 = '38;5;122'
     */
    X87FFD7 = '38;5;122',

    /**
     * @desc Foreground #87FFFF
     * @default normalForeground.X87FFFF = '38;5;123'
     */
    X87FFFF = '38;5;123',

    /**
     * @desc Foreground #AF0000
     * @default normalForeground.XAF0000 = '38;5;124'
     */
    XAF0000 = '38;5;124',

    /**
     * @desc Foreground #AF005F
     * @default normalForeground.XAF005F = '38;5;125'
     */
    XAF005F = '38;5;125',

    /**
     * @desc Foreground #AF0087
     * @default normalForeground.XAF0087 = '38;5;126'
     */
    XAF0087 = '38;5;126',

    /**
     * @desc Foreground #AF00AF
     * @default normalForeground.XAF00AF = '38;5;127'
     */
    XAF00AF = '38;5;127',

    /**
     * @desc Foreground #AF00D7
     * @default normalForeground.XAF00D7 = '38;5;128'
     */
    XAF00D7 = '38;5;128',

    /**
     * @desc Foreground #AF00FF
     * @default normalForeground.XAF00FF = '38;5;129'
     */
    XAF00FF = '38;5;129',

    /**
     * @desc Foreground #AF5F00
     * @default normalForeground.XAF5F00 = '38;5;130'
     */
    XAF5F00 = '38;5;130',

    /**
     * @desc Foreground #AF5F5F
     * @default normalForeground.XAF5F5F = '38;5;131'
     */
    XAF5F5F = '38;5;131',

    /**
     * @desc Foreground #AF5F87
     * @default normalForeground.XAF5F87 = '38;5;132'
     */
    XAF5F87 = '38;5;132',

    /**
     * @desc Foreground #AF5FAF
     * @default normalForeground.XAF5FAF = '38;5;133'
     */
    XAF5FAF = '38;5;133',

    /**
     * @desc Foreground #AF5FD7
     * @default normalForeground.XAF5FD7 = '38;5;134'
     */
    XAF5FD7 = '38;5;134',

    /**
     * @desc Foreground #AF5FFF
     * @default normalForeground.XAF5FFF = '38;5;135'
     */
    XAF5FFF = '38;5;135',

    /**
     * @desc Foreground #AF8700
     * @default normalForeground.XAF8700 = '38;5;136'
     */
    XAF8700 = '38;5;136',

    /**
     * @desc Foreground #AF875F
     * @default normalForeground.XAF875F = '38;5;137'
     */
    XAF875F = '38;5;137',

    /**
     * @desc Foreground #AF8787
     * @default normalForeground.XAF8787 = '38;5;138'
     */
    XAF8787 = '38;5;138',

    /**
     * @desc Foreground #AF87AF
     * @default normalForeground.XAF87AF = '38;5;139'
     */
    XAF87AF = '38;5;139',

    /**
     * @desc Foreground #AF87D7
     * @default normalForeground.XAF87D7 = '38;5;140'
     */
    XAF87D7 = '38;5;140',

    /**
     * @desc Foreground #AF87FF
     * @default normalForeground.XAF87FF = '38;5;141'
     */
    XAF87FF = '38;5;141',

    /**
     * @desc Foreground #AFAF00
     * @default normalForeground.XAFAF00 = '38;5;142'
     */
    XAFAF00 = '38;5;142',

    /**
     * @desc Foreground #AFAF5F
     * @default normalForeground.XAFAF5F = '38;5;143'
     */
    XAFAF5F = '38;5;143',

    /**
     * @desc Foreground #AFAF87
     * @default normalForeground.XAFAF87 = '38;5;144'
     */
    XAFAF87 = '38;5;144',

    /**
     * @desc Foreground #AFAFAF
     * @default normalForeground.XAFAFAF = '38;5;145'
     */
    XAFAFAF = '38;5;145',

    /**
     * @desc Foreground #AFAFD7
     * @default normalForeground.XAFAFD7 = '38;5;146'
     */
    XAFAFD7 = '38;5;146',

    /**
     * @desc Foreground #AFAFFF
     * @default normalForeground.XAFAFFF = '38;5;147'
     */
    XAFAFFF = '38;5;147',

    /**
     * @desc Foreground #AFD700
     * @default normalForeground.XAFD700 = '38;5;148'
     */
    XAFD700 = '38;5;148',

    /**
     * @desc Foreground #AFD75F
     * @default normalForeground.XAFD75F = '38;5;149'
     */
    XAFD75F = '38;5;149',

    /**
     * @desc Foreground #AFD787
     * @default normalForeground.XAFD787 = '38;5;150'
     */
    XAFD787 = '38;5;150',

    /**
     * @desc Foreground #AFD7AF
     * @default normalForeground.XAFD7AF = '38;5;151'
     */
    XAFD7AF = '38;5;151',

    /**
     * @desc Foreground #AFD7D7
     * @default normalForeground.XAFD7D7 = '38;5;152'
     */
    XAFD7D7 = '38;5;152',

    /**
     * @desc Foreground #AFD7FF
     * @default normalForeground.XAFD7FF = '38;5;153'
     */
    XAFD7FF = '38;5;153',

    /**
     * @desc Foreground #AFFF00
     * @default normalForeground.XAFFF00 = '38;5;154'
     */
    XAFFF00 = '38;5;154',

    /**
     * @desc Foreground #AFFF5F
     * @default normalForeground.XAFFF5F = '38;5;155'
     */
    XAFFF5F = '38;5;155',

    /**
     * @desc Foreground #AFFF87
     * @default normalForeground.XAFFF87 = '38;5;156'
     */
    XAFFF87 = '38;5;156',

    /**
     * @desc Foreground #AFFFAF
     * @default normalForeground.XAFFFAF = '38;5;157'
     */
    XAFFFAF = '38;5;157',

    /**
     * @desc Foreground #AFFFD7
     * @default normalForeground.XAFFFD7 = '38;5;158'
     */
    XAFFFD7 = '38;5;158',

    /**
     * @desc Foreground #AFFFFF
     * @default normalForeground.XAFFFFF = '38;5;159'
     */
    XAFFFFF = '38;5;159',

    /**
     * @desc Foreground #D70000
     * @default normalForeground.XD70000 = '38;5;160'
     */
    XD70000 = '38;5;160',

    /**
     * @desc Foreground #D7005F
     * @default normalForeground.XD7005F = '38;5;161'
     */
    XD7005F = '38;5;161',

    /**
     * @desc Foreground #D70087
     * @default normalForeground.XD70087 = '38;5;162'
     */
    XD70087 = '38;5;162',

    /**
     * @desc Foreground #D700AF
     * @default normalForeground.XD700AF = '38;5;163'
     */
    XD700AF = '38;5;163',

    /**
     * @desc Foreground #D700D7
     * @default normalForeground.XD700D7 = '38;5;164'
     */
    XD700D7 = '38;5;164',

    /**
     * @desc Foreground #D700FF
     * @default normalForeground.XD700FF = '38;5;165'
     */
    XD700FF = '38;5;165',

    /**
     * @desc Foreground #D75F00
     * @default normalForeground.XD75F00 = '38;5;166'
     */
    XD75F00 = '38;5;166',

    /**
     * @desc Foreground #D75F5F
     * @default normalForeground.XD75F5F = '38;5;167'
     */
    XD75F5F = '38;5;167',

    /**
     * @desc Foreground #D75F87
     * @default normalForeground.XD75F87 = '38;5;168'
     */
    XD75F87 = '38;5;168',

    /**
     * @desc Foreground #D75FAF
     * @default normalForeground.XD75FAF = '38;5;169'
     */
    XD75FAF = '38;5;169',

    /**
     * @desc Foreground #D75FD7
     * @default normalForeground.XD75FD7 = '38;5;170'
     */
    XD75FD7 = '38;5;170',

    /**
     * @desc Foreground #D75FFF
     * @default normalForeground.XD75FFF = '38;5;171'
     */
    XD75FFF = '38;5;171',

    /**
     * @desc Foreground #D78700
     * @default normalForeground.XD78700 = '38;5;172'
     */
    XD78700 = '38;5;172',

    /**
     * @desc Foreground #D7875F
     * @default normalForeground.XD7875F = '38;5;173'
     */
    XD7875F = '38;5;173',

    /**
     * @desc Foreground #D78787
     * @default normalForeground.XD78787 = '38;5;174'
     */
    XD78787 = '38;5;174',

    /**
     * @desc Foreground #D787AF
     * @default normalForeground.XD787AF = '38;5;175'
     */
    XD787AF = '38;5;175',

    /**
     * @desc Foreground #D787D7
     * @default normalForeground.XD787D7 = '38;5;176'
     */
    XD787D7 = '38;5;176',

    /**
     * @desc Foreground #D787FF
     * @default normalForeground.XD787FF = '38;5;177'
     */
    XD787FF = '38;5;177',

    /**
     * @desc Foreground #D7AF00
     * @default normalForeground.XD7AF00 = '38;5;178'
     */
    XD7AF00 = '38;5;178',

    /**
     * @desc Foreground #D7AF5F
     * @default normalForeground.XD7AF5F = '38;5;179'
     */
    XD7AF5F = '38;5;179',

    /**
     * @desc Foreground #D7AF87
     * @default normalForeground.XD7AF87 = '38;5;180'
     */
    XD7AF87 = '38;5;180',

    /**
     * @desc Foreground #D7AFAF
     * @default normalForeground.XD7AFAF = '38;5;181'
     */
    XD7AFAF = '38;5;181',

    /**
     * @desc Foreground #D7AFD7
     * @default normalForeground.XD7AFD7 = '38;5;182'
     */
    XD7AFD7 = '38;5;182',

    /**
     * @desc Foreground #D7AFFF
     * @default normalForeground.XD7AFFF = '38;5;183'
     */
    XD7AFFF = '38;5;183',

    /**
     * @desc Foreground #D7D700
     * @default normalForeground.XD7D700 = '38;5;184'
     */
    XD7D700 = '38;5;184',

    /**
     * @desc Foreground #D7D75F
     * @default normalForeground.XD7D75F = '38;5;185'
     */
    XD7D75F = '38;5;185',

    /**
     * @desc Foreground #D7D787
     * @default normalForeground.XD7D787 = '38;5;186'
     */
    XD7D787 = '38;5;186',

    /**
     * @desc Foreground #D7D7AF
     * @default normalForeground.XD7D7AF = '38;5;187'
     */
    XD7D7AF = '38;5;187',

    /**
     * @desc Foreground #D7D7D7
     * @default normalForeground.XD7D7D7 = '38;5;188'
     */
    XD7D7D7 = '38;5;188',

    /**
     * @desc Foreground #D7D7FF
     * @default normalForeground.XD7D7FF = '38;5;189'
     */
    XD7D7FF = '38;5;189',

    /**
     * @desc Foreground #D7FF00
     * @default normalForeground.XD7FF00 = '38;5;190'
     */
    XD7FF00 = '38;5;190',

    /**
     * @desc Foreground #D7FF5F
     * @default normalForeground.XD7FF5F = '38;5;191'
     */
    XD7FF5F = '38;5;191',

    /**
     * @desc Foreground #D7FF87
     * @default normalForeground.XD7FF87 = '38;5;192'
     */
    XD7FF87 = '38;5;192',

    /**
     * @desc Foreground #D7FFAF
     * @default normalForeground.XD7FFAF = '38;5;193'
     */
    XD7FFAF = '38;5;193',

    /**
     * @desc Foreground #D7FFD7
     * @default normalForeground.XD7FFD7 = '38;5;194'
     */
    XD7FFD7 = '38;5;194',

    /**
     * @desc Foreground #D7FFFF
     * @default normalForeground.XD7FFFF = '38;5;195'
     */
    XD7FFFF = '38;5;195',

    /**
     * @desc Foreground #FF0000
     * @default normalForeground.XFF0000 = '38;5;196'
     */
    XFF0000 = '38;5;196',

    /**
     * @desc Foreground #FF005F
     * @default normalForeground.XFF005F = '38;5;197'
     */
    XFF005F = '38;5;197',

    /**
     * @desc Foreground #FF0087
     * @default normalForeground.XFF0087 = '38;5;198'
     */
    XFF0087 = '38;5;198',

    /**
     * @desc Foreground #FF00AF
     * @default normalForeground.XFF00AF = '38;5;199'
     */
    XFF00AF = '38;5;199',

    /**
     * @desc Foreground #FF00D7
     * @default normalForeground.XFF00D7 = '38;5;200'
     */
    XFF00D7 = '38;5;200',

    /**
     * @desc Foreground #FF00FF
     * @default normalForeground.XFF00FF = '38;5;201'
     */
    XFF00FF = '38;5;201',

    /**
     * @desc Foreground #FF5F00
     * @default normalForeground.XFF5F00 = '38;5;202'
     */
    XFF5F00 = '38;5;202',

    /**
     * @desc Foreground #FF5F5F
     * @default normalForeground.XFF5F5F = '38;5;203'
     */
    XFF5F5F = '38;5;203',

    /**
     * @desc Foreground #FF5F87
     * @default normalForeground.XFF5F87 = '38;5;204'
     */
    XFF5F87 = '38;5;204',

    /**
     * @desc Foreground #FF5FAF
     * @default normalForeground.XFF5FAF = '38;5;205'
     */
    XFF5FAF = '38;5;205',

    /**
     * @desc Foreground #FF5FD7
     * @default normalForeground.XFF5FD7 = '38;5;206'
     */
    XFF5FD7 = '38;5;206',

    /**
     * @desc Foreground #FF5FFF
     * @default normalForeground.XFF5FFF = '38;5;207'
     */
    XFF5FFF = '38;5;207',

    /**
     * @desc Foreground #FF8700
     * @default normalForeground.XFF8700 = '38;5;208'
     */
    XFF8700 = '38;5;208',

    /**
     * @desc Foreground #FF875F
     * @default normalForeground.XFF875F = '38;5;209'
     */
    XFF875F = '38;5;209',

    /**
     * @desc Foreground #FF8787
     * @default normalForeground.XFF8787 = '38;5;210'
     */
    XFF8787 = '38;5;210',

    /**
     * @desc Foreground #FF87AF
     * @default normalForeground.XFF87AF = '38;5;211'
     */
    XFF87AF = '38;5;211',

    /**
     * @desc Foreground #FF87D7
     * @default normalForeground.XFF87D7 = '38;5;212'
     */
    XFF87D7 = '38;5;212',

    /**
     * @desc Foreground #FF87FF
     * @default normalForeground.XFF87FF = '38;5;213'
     */
    XFF87FF = '38;5;213',

    /**
     * @desc Foreground #FFAF00
     * @default normalForeground.XFFAF00 = '38;5;214'
     */
    XFFAF00 = '38;5;214',

    /**
     * @desc Foreground #FFAF5F
     * @default normalForeground.XFFAF5F = '38;5;215'
     */
    XFFAF5F = '38;5;215',

    /**
     * @desc Foreground #FFAF87
     * @default normalForeground.XFFAF87 = '38;5;216'
     */
    XFFAF87 = '38;5;216',

    /**
     * @desc Foreground #FFAFAF
     * @default normalForeground.XFFAFAF = '38;5;217'
     */
    XFFAFAF = '38;5;217',

    /**
     * @desc Foreground #FFAFD7
     * @default normalForeground.XFFAFD7 = '38;5;218'
     */
    XFFAFD7 = '38;5;218',

    /**
     * @desc Foreground #FFAFFF
     * @default normalForeground.XFFAFFF = '38;5;219'
     */
    XFFAFFF = '38;5;219',

    /**
     * @desc Foreground #FFD700
     * @default normalForeground.XFFD700 = '38;5;220'
     */
    XFFD700 = '38;5;220',

    /**
     * @desc Foreground #FFD75F
     * @default normalForeground.XFFD75F = '38;5;221'
     */
    XFFD75F = '38;5;221',

    /**
     * @desc Foreground #FFD787
     * @default normalForeground.XFFD787 = '38;5;222'
     */
    XFFD787 = '38;5;222',

    /**
     * @desc Foreground #FFD7AF
     * @default normalForeground.XFFD7AF = '38;5;223'
     */
    XFFD7AF = '38;5;223',

    /**
     * @desc Foreground #FFD7D7
     * @default normalForeground.XFFD7D7 = '38;5;224'
     */
    XFFD7D7 = '38;5;224',

    /**
     * @desc Foreground #FFD7FF
     * @default normalForeground.XFFD7FF = '38;5;225'
     */
    XFFD7FF = '38;5;225',

    /**
     * @desc Foreground #FFFF00
     * @default normalForeground.XFFFF00 = '38;5;226'
     */
    XFFFF00 = '38;5;226',

    /**
     * @desc Foreground #FFFF5F
     * @default normalForeground.XFFFF5F = '38;5;227'
     */
    XFFFF5F = '38;5;227',

    /**
     * @desc Foreground #FFFF87
     * @default normalForeground.XFFFF87 = '38;5;228'
     */
    XFFFF87 = '38;5;228',

    /**
     * @desc Foreground #FFFFAF
     * @default normalForeground.XFFFFAF = '38;5;229'
     */
    XFFFFAF = '38;5;229',

    /**
     * @desc Foreground #FFFFD7
     * @default normalForeground.XFFFFD7 = '38;5;230'
     */
    XFFFFD7 = '38;5;230',

    /**
     * @desc Foreground #FFFFFF
     * @default normalForeground.XFFFFFF = '38;5;231'
     */
    XFFFFFF = '38;5;231'
}


