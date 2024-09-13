const array = [10, 20, 40];

export const arrayFunction = (array: number[]) => array.map((number, index) => console.log(`${index+1}番目は${number}です。`))
arrayFunction(array);