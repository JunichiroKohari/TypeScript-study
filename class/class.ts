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

const jun = new Person('Jun', 23);
jun.incrementAge();
jun.greeting();

const anotherJun = {
    name: 'anotherJun',
    anotherGreeting: jun.greeting
}
anotherJun.anotherGreeting();