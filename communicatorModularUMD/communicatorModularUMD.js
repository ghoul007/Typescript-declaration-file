(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        console.log("amd");
        define([], factory);
    } else if (typeof exports === 'object' && module.exports) {
        console.log("export");
        // CommonJS
        module.exports = factory();
    } else {
        console.log("root");
        // Browser globals (Note: root is window)
        root.communicatorModularUMD = factory();
    }
}(this, function () {
    // Methods
    function greet(message) {
        return "<h1>" + message + "</h1>";
    }


    const otherFunctions = {
        
        goodbye: function(){
            return '<h1>bye</h1>'
        }
    }

    // Exposed public methods
    return {
        greet: greet,
        otherFunctions: otherFunctions,
    };
}));