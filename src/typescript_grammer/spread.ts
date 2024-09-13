const array: [number, number] = [1, 2]
console.log(...array)

export const sumFunction = (num1: number, num2: number) => console.log(num1 + num2);
console.log(sumFunction(...array));

const array2: number[] = [1, 2, 3, 4, 5];
export const [num1, num2, ...array3] = array2

const array4 = [10, 20];
const array5 = [30, 40];

export const array6 = [...array4, ...array5];

/*
    array7 = array4
    array7 = [...array4]
    だと、上は参照コピー
    下はディープコピー
*/