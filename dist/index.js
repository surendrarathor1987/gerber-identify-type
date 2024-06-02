"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.getAllLayers = exports.identifyLayers = void 0;
const get_common_cad_1 = require("./get-common-cad");
const get_matches_1 = require("./get-matches");
const layer_types_1 = require("./layer-types");
__exportStar(require("./constants"), exports);
__exportStar(require("./types"), exports);
function identifyLayers(filenames) {
    if (typeof filenames === 'string')
        filenames = [filenames];
    const matches = filenames.flatMap(f => (0, get_matches_1.getMatches)(f));
    const commonCad = (0, get_common_cad_1.getCommonCad)(matches);
    return Object.fromEntries(filenames.map(filename => {
        const match = _selectMatch(matches, filename, commonCad);
        const layerId = match
            ? { type: match.type, side: match.side }
            : { type: null, side: null };
        return [filename, layerId];
    }));
}
exports.identifyLayers = identifyLayers;
function getAllLayers() {
    return layer_types_1.layerTypes
        .map(layer => ({ type: layer.type, side: layer.side }))
        .filter((layer) => layer.type !== null);
}
exports.getAllLayers = getAllLayers;
function validate(target) {
    const valid = layer_types_1.layerTypes.some(layer => {
        return layer.side === target.side && layer.type === target.type;
    });
    const validSide = layer_types_1.layerTypes.some(layer => layer.side === target.side);
    const validType = layer_types_1.layerTypes.some(layer => layer.type === target.type);
    return {
        valid,
        side: validSide ? target.side : null,
        type: validType ? target.type : null,
    };
}
exports.validate = validate;
function _selectMatch(matches, filename, cad) {
    var _a;
    const filenameMatches = matches.filter(match => match.filename === filename);
    const result = filenameMatches.find(match => match.cad === cad);
    return (_a = result !== null && result !== void 0 ? result : filenameMatches[0]) !== null && _a !== void 0 ? _a : null;
}
//# sourceMappingURL=index.js.map