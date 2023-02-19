import { cursor } from "./src/cursor/cursor.ts";

await cursor.savePosition()
await cursor.moveTo({row: 100, column: 500})
// await cursor.moveLeft(1)
// await cursor.moveUp(1)
console.log('#');
await cursor.restorePosition()
