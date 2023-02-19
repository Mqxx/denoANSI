import { controls } from '../constants/sequences/controls.ts'
import { cursorEnds } from '../constants/sequences/end/cursorEnds.ts'
import { _writeToOutput, _readFromOutput } from '../constants/stdio.ts'

interface cursorPosition {
    row : number,
    column : number
}

/**
 * @desc
 * Moves the cursor to the top left corner of the terminal.
 * 
 * @example
 * ```ts
 * await cursor.home();
 * ```
 */
async function home() : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + cursorEnds.TO)
}

/**
 * @desc
 * Moves the cursor to a specific position in the terminal. The index starts from 0.
 * 
 * If the position is positive outside the terminal, then the cursor is placed in the bottom right corner.
 * If the position is negative outside the terminal, then the cursor is placed in the top left corner.
 * 
 * @example
 * ```ts
 * // Moves the cursor to the 10th row and to the 20th column.
 * await cursor.moveTo({row: 9, column: 19});
 * ```
 */
async function moveTo(position : cursorPosition) : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + (position.row + 1) + controls.SEP + (position.column + 1) + cursorEnds.TO)
}

/**
 * @desc
 * Moves the cursor a specified amount of rows up. The position in the column remains the same.
 * 
 * If the number is greater than the cursor can move up, then the cursor gets moved all the way up.
 * 
 * @example
 * ```ts
 * // Moves the cursor 5 rows up.
 * await cursor.moveUp(5);
 * ```
 */
async function moveUp(amount? : number) : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + (amount || 1) + cursorEnds.UP)
}

/**
 * @desc 
 * Moves the cursor a specified amount of rows down. The position in the column remains the same.
 * 
 * If the number is greater than the cursor can move down, then the cursor gets moved all the way down.
 * 
 * @example
 * ```ts
 * // Moves the cursor 7 rows down.
 * await cursor.moveDown(7);
 * ```
 */
async function moveDown(amount? : number) : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + (amount || 1) + cursorEnds.DOWN)
}

/**
 * @desc
 * Moves the cursor a specified amount of columns to the right. The position in the row remains the same.
 * 
 * If the number is greater than the cursor can move to the right, then the cursor gets moved all the way to the right side.
 * 
 * @example
 * ```ts
 * // Moves the cursor 3 columns to the right.
 * await cursor.moveRight(3);
 * ```
 */
async function moveRight(amount? : number) : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + (amount || 1) + cursorEnds.RIGHT)
}

/**
 * @desc
 * Moves the cursor a specified amount of columns to the left. The position in the row remains the same.
 * 
 * If the number is greater than the cursor can move to the left, then the cursor gets moved all the way to the left side.
 * 
 * @example
 * ```ts
 * // Moves the cursor 6 columns to the left.
 * await cursor.moveLeft(6);
 * ```
 */
async function moveLeft(amount? : number) : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + (amount || 1) + cursorEnds.LEFT)
}

/**
 * @desc 
 * Moves the cursor a specified amount of rows down. The position in the column is reset to the start.
 * 
 * If the number is greater than the cursor can move down, then the cursor gets moved all the way down.
 * 
 * @example
 * ```ts
 * // Moves the cursor 2 rows down.
 * await cursor.moveDownStart(2);
 * ```
 */
async function moveDownStart(amount? : number) : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + (amount || 1) + cursorEnds.DOWN_START)
}

/**
 * @desc 
 * Moves the cursor a specified amount of columns up. The position in the column is reset to the start.
 * 
 * If the number is greater than the cursor can move up, then the cursor gets moved all the way up.
 * 
 * @example
 * ```ts
 * // Moves the cursor 2 rows up.
 * await cursor.moveUpStart(2);
 * ```
 */
async function moveUpStart(amount? : number) : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + (amount || 1) + cursorEnds.UP_START)
}

/**
 * @desc 
 * Sets the cursor to an absolute position in the column. The position in the row remains the same.
 * 
 * If the absolute position is positive outside the terminal, then the cursor is set to the right side.
 * If the absolute position is negative outside the terminal, then the cursor is set to the left side.
 * 
 * @example
 * ```ts
 * // Sets the cursor to the 9th absolute column.
 * await cursor.moveToColumn(9);
 * ```
 */
async function moveToColumn(amount : number) : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + amount + cursorEnds.TO_COLUMN)
}

/**
 * @desc 
 * Get the current absolute position of the cursor.
 * 
 * @example
 * ```ts
 * // Get the absolut cursor position.
 * const position = await cursor.getPosition();
 * 
 * // Log the row and column position
 * console.log(`Row: ${position.row}, Column: ${position.column}`);
 * ```
 */
async function getPosition() : Promise<cursorPosition> {
    await _writeToOutput(controls.ESC + controls.CSI + cursorEnds.GET_POSITION)
    const readString = await _readFromOutput(128)
    const regExpMatch = [...readString.matchAll(/\[([0-9]+);([0-9]+)R/gm)][0]
    
    return {
        row: parseInt(regExpMatch[1]) - 1,
        column: parseInt(regExpMatch[2]) - 1
    }
}

/**
 * @desc 
 * Save the current absolute position of the cursor.
 * 
 * The position is stored internally. Only one position can be saved at a time.
 * 
 * @example
 * ```ts
 * await cursor.savePosition();
 * ```
 */
async function savePosition() : Promise<void> {
    await _writeToOutput(controls.ESC + cursorEnds.SAVE_POSITION)
}

/**
 * @desc 
 * Restore the currently saved absolute position of the cursor.
 * 
 * @example
 * ```ts
 * await cursor.restorePosition();
 * ```
 */
async function restorePosition() : Promise<void> {
    await _writeToOutput(controls.ESC + cursorEnds.RESTORE_POSITION)
}

/**
 * @desc 
 * Show the cursor.
 * 
 * @example
 * ```ts
 * await cursor.show();
 * ```
 */
async function show() : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + controls.PRIVATE + cursorEnds.SHOW)
}

/**
 * @desc 
 * Hide the cursor.
 * 
 * @example
 * ```ts
 * await cursor.hide();
 * ```
 */
async function hide() : Promise<void> {
    await _writeToOutput(controls.ESC + controls.CSI + controls.PRIVATE + cursorEnds.HIDE)
}

/**
 * @desc 
 * Cursor object.
 */
export const cursor = {
    home: home,
    moveTo: moveTo,
    moveUp: moveUp,
    moveDown: moveDown,
    moveRight: moveRight,
    moveLeft: moveLeft,
    moveDownStart: moveDownStart,
    moveUpStart: moveUpStart,
    moveToColumn: moveToColumn,
    getPosition: getPosition,
    savePosition: savePosition,
    restorePosition: restorePosition,
    show: show,
    hide: hide
}
