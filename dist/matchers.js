"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchers = void 0;
const layer_types_1 = require("./layer-types");
exports.matchers = layer_types_1.layerTypes.flatMap(layer => {
    return layer.matchers.flatMap(matcher => {
        const cadList = Array.isArray(matcher.cad) ? matcher.cad : [matcher.cad];
        const match = 'ext' in matcher
            ? new RegExp('\\.' + matcher.ext + '$', 'i')
            : new RegExp(matcher.match, 'i');
        return cadList.map(cad => ({
            type: layer.type,
            side: layer.side,
            match,
            cad,
        }));
    });
});
//# sourceMappingURL=matchers.js.map