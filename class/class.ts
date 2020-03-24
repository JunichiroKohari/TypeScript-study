abstract class Person {
    static species = 'Homo Sapiens';
    static isAdult(age: number) {
        if(age > 17) return true;
        return false;
    }
    readonly id: number = 32; // 初期化 最初
    constructor(public readonly name: string, protected age: number) {
        this.id = 31; // 初期化 最後
        this.name = "Akito";
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}`);
        this.explainJob();
    }
    abstract explainJob(): void;
}

class Teacher extends Person {
    private static instance: Teacher;
    explainJob() {
        console.log('There is no subject.');
    }
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
    private constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    static getInstance() {
        if (Teacher.instance) {
            return Teacher.instance;
        }
        Teacher.instance = new Teacher('Jun', 23, 'Math');
        return Teacher.instance;
    }
}