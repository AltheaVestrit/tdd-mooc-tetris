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

    rotateRight() {
        let rows = this.#shape.length;
        let cols = this.#shape[0].length;
        let rotated = new Array(rows);
        for (let i=0; i<rows; i++) {
            rotated[i] = new Array(cols);
            for (let j=0; j<cols; j++) {
                rotated[i][j] = "";
            }
        }
        console.log(rotated);
    }
}