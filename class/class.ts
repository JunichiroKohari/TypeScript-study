class Person {
    readonly id: number = 32; // 初期化 最初
    constructor(public readonly name: string, private age: number) {
        this.id = 31; // 初期化 最後
        this.name = "Akito";
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: { name: string }) {
        console.log(`Hello! My name is ${this.name}`);
    }
}

class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    greeting() {
        console.log(`Hello! My name is ${this.name}. I teach ${this.subject}`);
    }
}

const teacher = new Teacher('Jun', 23, "Math");
teacher.greeting();