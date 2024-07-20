const myProfile = {
    name: "nakatake",
    age: 27
}

const { name, age = 31 } = myProfile;
export const message = `My name is ${name}. Age is ${age}.`


const myProfileArray = [name, age];
const [ arrayName, arrayAge ] = myProfileArray;
export const message2 = `My name is ${arrayName}. Age is ${arrayAge}.`