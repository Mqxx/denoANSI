# deno_ansi
An ANSI escape codes library for Deno.

## `cursor`
Cursor object.

###### syntax
```ts
const cursor: {...}
```

<br>

----

### `cursor.home()`
Moves the cursor to the top left corner of the terminal.

###### syntax
```ts
function home() : Promise<void>
```

###### example
```ts
await cursor.home();
```

<br>

----

### `cursor.moveTo()`
Moves the cursor to a specific position in the terminal. The index starts from 0.

If the position is positive outside the terminal, then the cursor is placed in the bottom right corner.<br>
If the position is negative outside the terminal, then the cursor is placed in the top left corner.

###### syntax
```ts
function moveTo(position : cursorPosition) : Promise<void>
```

###### example
```ts
// Moves the cursor to the 10th row and to the 20th column.
await cursor.moveTo({row: 9, column: 19});
```

<br>

----

### `cursor.moveUp()`
Moves the cursor a specified amount of rows up. The position in the column remains the same.

If the number is greater than the cursor can move up, then the cursor gets moved all the way up.

###### syntax
```ts
function moveUp(amount? : number) : Promise<void>
```

###### example
```ts
// Moves the cursor 5 rows up.
await cursor.moveUp(5);
```

<br>

----

### `cursor.moveDown()`
Moves the cursor a specified amount of rows down. The position in the column remains the same.

If the number is greater than the cursor can move down, then the cursor gets moved all the way down.

###### syntax
```ts
function moveDown(amount? : number) : Promise<void>
```

###### example
```ts
// Moves the cursor 7 rows down.
await cursor.moveDown(7);
```

<br>

----

### `cursor.moveRight()`
Moves the cursor a specified amount of columns to the right. The position in the row remains the same.

If the number is greater than the cursor can move to the right, then the cursor gets moved all the way to the right side.

###### syntax
```ts
function moveRight(amount? : number) : Promise<void>
```

###### example
```ts
// Moves the cursor 3 columns to the right.
await cursor.moveRight(3);
```

<br>

----

### `cursor.moveLeft()`
Moves the cursor a specified amount of columns to the left. The position in the row remains the same.

If the number is greater than the cursor can move to the left, then the cursor gets moved all the way to the left side.

###### syntax
```ts
function moveLeft(amount? : number) : Promise<void>
```

###### example
```ts
// Moves the cursor 6 columns to the left.
await cursor.moveLeft(6);
```

<br>

----

### `cursor.moveDownStart()`
Moves the cursor a specified amount of rows down. The position in the column is reset to the start.

If the number is greater than the cursor can move down, then the cursor gets moved all the way down.

###### syntax
```ts
function moveDownStart(amount? : number) : Promise<void>
```

###### example
```ts
// Moves the cursor 2 rows down.
await cursor.moveDownStart(2);
```

<br>

----

### `cursor.moveUpStart()`
Moves the cursor a specified amount of columns up. The position in the column is reset to the start.

If the number is greater than the cursor can move up, then the cursor gets moved all the way up.

###### syntax
```ts
function moveUpStart(amount? : number) : Promise<void>
```

###### example
```ts
// Moves the cursor 2 rows up.
await cursor.moveUpStart(2);
```

<br>

----

### `cursor.moveToColumn()`
Sets the cursor to an absolute position in the column. The position in the row remains the same.

If the absolute position is positive outside the terminal, then the cursor is set to the right side.
If the absolute position is negative outside the terminal, then the cursor is set to the left side.

###### syntax
```ts
function moveToColumn(amount : number) : Promise<void>
```

###### example
```ts
// Sets the cursor to the 9th absolute column.
await cursor.moveToColumn(9);
```

<br>

----

### `cursor.getPosition()`
Get the current absolute position of the cursor.

###### syntax
```ts
function getPosition() : Promise<cursorPosition>
```

###### example
```ts
// Get the absolut cursor position.
const position = await cursor.getPosition();

// Log the row and column position
console.log(`Row: ${position.row}, Column: ${position.column}`);
```

<br>

----

### `cursor.savePosition()`
Save the current absolute position of the cursor.

The position is stored internally. Only one position can be saved at a time.

###### syntax
```ts
function savePosition() : Promise<void>
```

###### example
```ts
await cursor.savePosition();
```

<br>

----

### `cursor.restorePosition()`
Restore the currently saved absolute position of the cursor.

###### syntax
```ts
function restorePosition() : Promise<void>
```

###### example
```ts
await cursor.restorePosition();
```

<br>

----

### `cursor.show()`
Show the cursor.

###### syntax
```ts
function show() : Promise<void>
```

###### example
```ts
await cursor.show();
```

<br>

----

### `cursor.hide()`
Hide the cursor.

###### syntax
```ts
function hide() : Promise<void>
```

###### example
```ts
await cursor.hide();
```

<br>

