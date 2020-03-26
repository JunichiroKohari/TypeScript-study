interface addFunc {
    (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Nameable {
    name: string;
}

interface Human extends Nameable {
    age: number;
    greeting(message: string): void;
}

class Developer implements Human {
    constructor(public name: string, public age: number, experience: number){}
    greeting(message: string) {
        console.log(message);
    }
}

const userA = {
    name: 'Jun',
    age: 23,
    greeting(message: string) {
        console.log(message);
    }
}
const user: Human = userA;
