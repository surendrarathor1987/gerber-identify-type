"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatches = void 0;
const matchers_1 = require("./matchers");
function getMatches(filename) {
    return matchers_1.matchers
        .map(m => (m.match.test(filename) ? Object.assign(Object.assign({}, m), { filename }) : null))
        .filter((m) => m !== null);
}
exports.getMatches = getMatches;
//# sourceMappingURL=get-matches.js.map