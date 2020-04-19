


// declare function communicatorGlobal(params: string): string;


declare namespace communicatorGlobal {
    function greet(msg: string): string;
    let settings: Settings;
    class Settings {
        constructor(message: string);
        message: string;
    }
}