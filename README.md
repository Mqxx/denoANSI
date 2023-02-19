# denoANSI
An ANSI escape codes library for Deno.

## Cursor

### home()
Moves the cursor to the top left corner of the terminal.

###### syntax
```ts
function home() : Promise<void>
```

###### example
```ts
await cursor.home();
```

