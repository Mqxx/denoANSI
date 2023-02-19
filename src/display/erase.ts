import { controls } from "../constants/sequences/controls.ts";
import { eraseEnds } from '../constants/sequences/end/eraseEnds.ts'
import { _writeToOutput, _readFromOutput } from '../constants/stdio.ts'


/**
 * @desc
 * 
 * 
 * @example
 * ```ts
 * await erase.displayFromToEnd()
 * ```
 */
async function displayFromToEnd() : Promise<void> {
    await _writeToOutput()
}

/**
 * @desc
 * 
 * 
 * @example
 * ```ts
 * await erase.displayFromToStart()
 * ```
 */
async function displayFromToStart() : Promise<void> {
    await _writeToOutput()
}

/**
 * @desc
 * 
 * 
 * @example
 * ```ts
 * await erase.displayAll()
 * ```
 */
async function displayAll() : Promise<void> {
    await _writeToOutput()
}

/**
 * @desc
 * 
 * 
 * @example
 * ```ts
 * await erase.displayAllSaved()
 * ```
 */
async function displayAllSaved() : Promise<void> {
    await _writeToOutput()
}

/**
 * @desc
 * 
 * 
 * @example
 * ```ts
 * await erase.lineFromToEnd()
 * ```
 */
async function lineFromToEnd() : Promise<void> {
    await _writeToOutput()
}

/**
 * @desc
 * 
 * 
 * @example
 * ```ts
 * await erase.lineFromToStart()
 * ```
 */
async function lineFromToStart(from : number) : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + 1 + eraseEnds.LINE)
}

/**
 * @desc
 * Erase a entire line.
 * 
 * @example
 * ```ts
 * await erase.lineAll()
 * ```
 */
async function lineAll() : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + 2 + eraseEnds.LINE)
}

/**
 * @desc 
 * Cursor object.
 */
export const erase = {
    displayFromToEnd: displayFromToEnd,
    displayFromToStart: displayFromToStart,
    displayAll: displayAll,
    displayAllSaved: displayAllSaved,
    lineFromToEnd: lineFromToEnd,
    lineFromToStart: lineFromToStart,
    lineAll: lineAll
}
