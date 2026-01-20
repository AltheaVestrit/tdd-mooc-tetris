import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    #currentOrientation;
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
        return new Tetromino(orientations);
    }

    constructor(orientations) {
        this.#currentOrientation = orientations[0];
        this.#orientations = orientations;
    }

    toString() {
        return this.#currentOrientation.toString();
    }

    rotateRight() {
        return this.#currentOrientation.rotateRight();
    }

    rotateLeft() {
        return this.#currentOrientation.rotateLeft();
    }
}