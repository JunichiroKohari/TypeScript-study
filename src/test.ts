export default class Test {
    message: string

    constructor(message: string) {
        this.message = message;
    }

    public sayHello(elem: HTMLElement | null) {
        if (elem) {
            elem.innerText = this.message
        }
    }
}