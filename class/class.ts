class Person {
    name: string;
    constructor(initName: string) {
        this.name = initName;
    }

    greeting(this: { name: string }) {
        console.log(`Hello! My name is ${this.name}`);
    }
}

const jun = new Person('Jun');
jun.greeting();

const anotherJun = {
    name: 'anotherJun',
    anotherGreeting: jun.greeting
}
anotherJun.anotherGreeting();