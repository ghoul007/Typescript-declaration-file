import * as _ from "lodash";

class Communicator {
    constructor() {
    }
    greet(msg: string) {
        return "<h1>" + _.toUpper(msg) + "</h1>"
    }

}

const communicator = new Communicator();

document!.body.innerHTML = communicator.greet("hello world");
