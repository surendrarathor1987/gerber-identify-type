import * as fs from 'fs';
import * as path from 'path';
import { identifyLayers } from '../dist/index';

function readGerber() {
    const gerberDirectory = path.join(__dirname, '..', 'Gerbers');
    console.log("GerberDirectory: ", gerberDirectory);
    const files = fs.readdirSync(gerberDirectory);
    const typeByFilename = identifyLayers(files);
    console.log("typeByFilename: ", typeByFilename);
}

readGerber();

// Optionally, if using a test framework like Jest, wrap it in a test case
// test('adds two numbers correctly', () => {
//     readGerber();
// });
