"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var url = "https://checkout.epayco.co/checkout.js";
/**
 *
 */
exports.useEpayco = function (config) {
    var _a = react_1.useState(false), loadedScript = _a[0], setLoaded = _a[1];
    var _b = react_1.useState(), epayco = _b[0], setEpayco = _b[1];
    react_1.useEffect(function () {
        var script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = function () {
            setLoaded(true);
            // @ts-ignore
            var handler = ePayco.checkout.configure(config);
            setEpayco(handler);
        };
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, [config]);
    return { loadedScript: loadedScript, epayco: epayco };
};
exports.default = exports.useEpayco;
