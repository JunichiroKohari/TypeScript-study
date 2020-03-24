class Person {
    readonly id: number = 32; // 初期化 最初
    constructor(public readonly name: string, protected age: number) {
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
    get subject(): string {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age}. I teach ${this.subject}`);
    }
}

const teacher = new Teacher('Jun', 23, "Math");
console.log(teacher.subject);
teacher.subject = 'Music'
teacher.greeting();