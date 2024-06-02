"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommonCad = void 0;
function getCommonCad(matches) {
    var _a;
    let mode = null;
    let modeCount = 0;
    const countsByCad = {};
    for (const match of matches) {
        const { cad } = match;
        if (cad !== null) {
            const count = ((_a = countsByCad[cad]) !== null && _a !== void 0 ? _a : 0) + 1;
            if (count > modeCount) {
                modeCount = count;
                mode = cad;
            }
            countsByCad[cad] = count;
        }
    }
    return mode;
}
exports.getCommonCad = getCommonCad;
//# sourceMappingURL=get-common-cad.js.map