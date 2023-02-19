# denoANSI
An ANSI escape codes library for Deno.

## `cursor`

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
