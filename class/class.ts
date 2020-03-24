class Person {
    name: string;
    private age: number;
    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
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