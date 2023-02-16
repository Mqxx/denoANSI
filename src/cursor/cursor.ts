
interface cursorPosition {
    row : number,
    column : number
}

export const cursor = {
    home: function() : void {
        
    },
    moveTo: function(position : cursorPosition) : void {

    },
    moveUp: function() : void {

    },
    moveDown: function() : void {

    },
    moveRight: function() : void {

    },
    moveLeft: function() : void {

    },
    moveDownStart: function() : void {

    },
    moveUpStart: function() : void {

    },
    moveToColumn: function() : void {

    },
    getPosition: function() : cursorPosition {
        return {
            row: 0,
            column: 0
        }
    },
    moveUpScroll: function() : void {

    },
    savePosition: function() : void {

    },
    restorePosition: function() : void {

    }
}
