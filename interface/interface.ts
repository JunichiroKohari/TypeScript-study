interface Human {
    name: string;
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