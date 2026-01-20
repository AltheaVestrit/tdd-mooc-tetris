export class RotatingShape {
    #shape;

    static fromString(shape) {
        return new RotatingShape(
            shape
                .replaceAll(" ","")
                .trim()
                .split('\n')
                .map((row) => row.split(''))
        )
    }

    constructor(shape) {
        this.#shape = shape;
    }

    toString() {
        let str = this.#shape.map(row => row.join('')).join('\n') + '\n';
        return str;
    }

    rotateLeft() {
        let rows = this.#shape.length;
        let cols = this.#shape[0].length;
        let rotated = new Array(cols);
        for (let i=0; i<cols; i++) {
            rotated[i] = new Array(rows);
            for (let j=0; j<rows; j++) {
                rotated[i][j] = this.#shape[j][rows-1-i];
            }
        }
        return new RotatingShape(rotated);
    }

    rotateRight() {
        return this.rotateLeft().rotateLeft().rotateLeft();
    }
}