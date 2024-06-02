"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var index_1 = require("../dist/index");
function readGerber() {
    var gerberDirectory = path.join(__dirname, '..', 'Gerbers');
    console.log("GerberDirectory: ", gerberDirectory);
    var files = fs.readdirSync(gerberDirectory);
    var typeByFilename = (0, index_1.identifyLayers)(files);
    console.log("typeByFilename: ", typeByFilename);
}
readGerber();
// Optionally, if using a test framework like Jest, wrap it in a test case
// test('adds two numbers correctly', () => {
//     readGerber();
// });
