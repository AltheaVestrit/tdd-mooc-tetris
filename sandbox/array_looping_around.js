let array = [0,1,2,3];

let index = -1;

if (index < 0) {
    index = array.length + index;
}

console.log(array[index % array.length]);