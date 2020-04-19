
(function (window) {
    if (typeof (window.communicatorGlobal) === 'undefined') {
        window.communicatorGlobal = function (message) {
            return "<h1>" + message + "</h1>";
        };
    }
})(window);
