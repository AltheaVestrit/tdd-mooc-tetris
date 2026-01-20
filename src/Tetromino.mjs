import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    #shape;
    static T_SHAPE = Tetromino.fromString(`
    .T.
    TTT
    ...
    `);

    static I_SHAPE = Tetromino.fromString(`
    .....
    .....
    IIII.
    .....
    .....
    `)

    static fromString(shapeType) {
        const shape = RotatingShape.fromString(shapeType)
        return new Tetromino(shape);
    }

    constructor(shape) {
        this.#shape = shape;
    }
    toString() {
        return this.#shape.toString();
    }

    rotateRight() {
        return this.#shape.rotateRight();
    }

    rotateLeft() {
        return this.#shape.rotateLeft();
    }
}