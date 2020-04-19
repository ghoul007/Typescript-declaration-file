import * as umd from "communicatorModularUMD";
import * as amd from "communicatorModularAMD";
import * as cjs from "communicatorModalCJS";
class Communicator {
    constructor() {
    }
    greet(msg: string) {
        // return "<h1>" + _.toUpper(msg) + "</h1>"
        // return communicatorGlobal.greet(msg)
        // return umd.otherFunctions.goodbye()
        return cjs.greet('hello !')
        // return umd.greet(msg)
    }

}


const communicator = new Communicator();

document!.body.innerHTML = communicator.greet("hello world!!");

