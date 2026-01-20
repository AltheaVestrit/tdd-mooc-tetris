export class Tetromino {
    static T_SHAPE = Tetromino.fromString(`
    .T.
    TTT
    ...
    `);

    static fromString(shapeType) {
        const shape = RotatingShape.fromString(shapeType)
        return shape;
    }

    toString() {return this.toString;}
}