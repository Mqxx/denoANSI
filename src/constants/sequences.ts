export enum sequences {
    /**
     * Sequence start (Escape)
     */
    ESC = '\x1B',   
    /**
     * Control Sequence Introducer
     */
    CSI = '\x1B[',
    /**
     * Device Control String
     */
    DCS = '\x1BP',
    /**
     * Operating System Command
     */
    OSC = '\x1B]',
    /**
     * Separator
     */
    SEP = ';'

}
