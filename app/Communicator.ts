class Communicator {
    constructor() {

    }
    greet(msg: string) {
        return "<h1>" + msg + "</h1>"
    }
}

const communicator = new Communicator();

document.body.innerHTML = communicator.greet("hello world");
