import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    T_SHAPE= Tetromino.fromString();

    static fromString(shapeType) {
        const shape = RotatingShape.fromString(shapeType)
        return shape;
    }

    toString() {return this.toString;}
}