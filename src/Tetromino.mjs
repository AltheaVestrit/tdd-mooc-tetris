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
        this.#currentOrientation = 0;
        let currentOrientation2 = (currentOrientation + orientations.length) % orientations.lengt;
        this.#orientations = orientations;
    }

    toString() {
        return this.#orientations[this.#currentOrientation].toString();
    }

    rotateRight() {
        this.#currentOrientation = (this.#currentOrientation + 1) % this.#orientations.length;
        return this.#orientations[this.#currentOrientation];
    }

    rotateLeft() {
        console.log(this.#currentOrientation);
        console.log(this.#orientations[this.#currentOrientation].toString());
        if (this.#currentOrientation - 1 < 0) {
            this.#currentOrientation = this.#orientations.length - 1;
        } else {
            this.#currentOrientation = this.#currentOrientation - 1;
        }
        console.log(this.#currentOrientation);
        console.log(this.#orientations[this.#currentOrientation].toString());
        return this.#orientations[this.#currentOrientation];
    }
}