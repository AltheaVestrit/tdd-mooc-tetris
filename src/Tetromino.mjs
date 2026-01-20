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
        let orientations = [shape, 
            shape.rotateRight(), 
            shape.rotateRight().rotateRight(), 
            shape.rotateRight().rotateRight().rotateRight()
        ].slice(0,nrOrientations);
        return new Tetromino(shape, orientations);
    }

    constructor(shape, orientations) {
        this.#shape = shape;
        this.#orientations = orientations;
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