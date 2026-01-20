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
}