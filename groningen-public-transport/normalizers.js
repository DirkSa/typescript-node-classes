"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeLines(linesResponse) {
    let result = [];
    for (let lineName in linesResponse) {
        let line = linesResponse[lineName];
        result.push(line);
    }
    return result;
}
exports.normalizeLines = normalizeLines;
function normalizeLineDetails(lineDetails) {
    let result = [];
    for (let lineName in lineDetails) {
        let lineDetail = lineDetails[lineName];
        result.push(lineDetail);
    }
    return result;
}
exports.normalizeLineDetails = normalizeLineDetails;
