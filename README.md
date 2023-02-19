# denoANSI
An ANSI escape codes library for Deno.

## Cursor

### cursor.home()
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

### cursor.moveTo()
Moves the cursor to a specific position in the terminal. The index starts from 0.

If the position is positive outside the terminal, then the cursor is placed in the bottom right corner.<br>
If the position is negative outside the terminal, then the cursor is placed in the top left corner.

###### syntax
```ts
function moveTo(position: cursorPosition) : Promise<void>
```

###### example
```ts
// Moves the cursor to the 10th row and to the 20th column.
await cursor.moveTo({row: 9, column: 19});
```

<br>

----

### cursor.moveUp()
Moves the cursor to a specific position in the terminal. The index starts from 0.

If the position is positive outside the terminal, then the cursor is placed in the bottom right corner.<br>
If the position is negative outside the terminal, then the cursor is placed in the top left corner.

###### syntax
```ts
function moveTo(position: cursorPosition) : Promise<void>
```

###### example
```ts
// Moves the cursor to the 10th row and to the 20th column.
await cursor.moveTo({row: 9, column: 19});
```

<br>

----
