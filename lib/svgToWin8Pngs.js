"use strict";

var Q = require("q");
var svg2png = Q.nfbind(require("svg2png"));

var scales = {
    ".width-30": "w30",
    ".width-60": "w60",
    ".width-90": "w90",
    ".width-500": "w500"
};

module.exports = function svgToWin8Pngs(sourceFileName) {
    return Q.all(Object.keys(scales).map(function (suffix) {
        var destFileName = sourceFileName + suffix + ".png";
        var scale = scales[suffix];

        return svg2png(sourceFileName, destFileName, scale);
    }));
};
