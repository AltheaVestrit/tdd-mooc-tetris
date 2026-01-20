import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    #shape;
    #orientations;

    static T_SHAPE = Tetromino.fromString(`
    .T.
    TTT
    ...
    `,4);

    static I_SHAPE = Tetromino.fromString(`
    .....
    .....
    IIII.
    .....
    .....
    `,2)

    static fromString(shapeType, nrOrientations) {
        const shape = RotatingShape.fromString(shapeType);
        let orientations = [];
        for (let i = 0; i < nrOrientations; i++) {
            orientations.push()
        }
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