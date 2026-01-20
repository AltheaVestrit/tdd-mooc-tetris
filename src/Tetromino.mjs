import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    #currentOrientation;
    #orientations;

    static T_SHAPE = Tetromino.fromString(`
    .T.
    TTT
    ...
    `,4,0);

    static I_SHAPE = Tetromino.fromString(`
    .....
    .....
    IIII.
    .....
    .....
    `,2,0)

    static fromString(shapeType, nrOrientations, currentOrientation) {
        const shape = RotatingShape.fromString(shapeType);
        let orientations = [shape, 
            shape.rotateRight(), 
            shape.rotateRight().rotateRight(), 
            shape.rotateRight().rotateRight().rotateRight()
        ].slice(0,nrOrientations);
        return new Tetromino(orientations,currentOrientation);
    }

    constructor(orientations, currentOrientation) {
        this.#currentOrientation = (currentOrientation + orientations.length) % orientations.length;
        this.#orientations = orientations;
    }

    #shape() {
        return this.#orientations[this.#currentOrientation];
    }

    toString() {
        return this.#shape().toString();
    }

    rotateRight() {
        return new Tetromino(this.#orientations,this.#currentOrientation + 1);
    }

    rotateLeft() {
        return new Tetromino(this.#orientations,this.#currentOrientation - 1);
    }
}